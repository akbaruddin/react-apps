import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [insta, setInsta] = useState('https://www.instagram.com/google/');
  const [loading, setLoading] = useState(false);
  const [instaList, setInstaList] = useState([]);
  const [cursor, setCursor] = useState('');
  const [hash, setHash] = useState(null);
  const [buttonText, setButtonText] = useState('Load More');
  const [userID, setUserID] = useState('');
  const [hasNext, setHasNext] = useState(false);

  const loadMoreEvent = () => {
    setButtonText('Loading....');
    const params = JSON.stringify({"id": userID, "first": 12, "after": cursor});
    const url = `https://www.instagram.com/graphql/query/?query_hash=${hash}&variables=${encodeURI(params)}`
    axios
      .get(url)
      .then((response) => {
        const timeline = response.data.data.user.edge_owner_to_timeline_media;
        const data = timeline.edges.map((data) => data.node);
        setCursor(timeline.page_info.end_cursor);
        setHasNext(timeline.page_info.has_next_page);
        setInstaList([...instaList, ...data]);
        setButtonText('Load More');
        window.scrollTo(0,document.body.scrollHeight);
      })
      .catch(function (error) {
        console.log(error);
        setButtonText('Load More');
      });
  }

  const query = (url) => {
    axios
      .get(`https://www.instagram.com${url}`)
      .then((response) => {
        const data = response.data.match(/queryId:"([a-z0-9]{32})/g);
        const queryHash = data[2].split(':"');
        setHash(queryHash[1]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    setLoading(true);
    setButtonText('Loading....');
    const url = insta.replace(/\/$/, '').replace(/htt(ps|p):\/\/www.instagram.com\//, '');
    axios
      .get(`https://www.instagram.com/${url}/?__a=1`)
      .then((response) => {
        const edge_timeline = response.data.graphql.user.edge_owner_to_timeline_media;
        const data = edge_timeline.edges.map((data) => data.node);
        setLoading(false);
        setInstaList(data)
        setCursor(edge_timeline.page_info.end_cursor);
        setHasNext(edge_timeline.page_info.has_next_page);
        setUserID(response.data.graphql.user.id)
        setButtonText('Load More');
        return url;
      })
      .then((url) => {
        axios
          .get(`https://www.instagram.com/${url}/`)
          .then((response) => {
            const files = response.data.match(/\/(static\/bundles\/.+\/Consumer\.js\/.+\.js)/);
            return query(files[0])
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [insta]);

  return (
    <div className="wrapper">
      <div className="user-input">
        <label className="label">Instagram URL</label>
        <input type="text" value={insta} onChange={(e) => setInsta(e.target.value)} />
      </div>
      <input type="hidden" value={cursor} />
      {loading
        ? (<div>Loading.....</div>)
        : (
          <ul className="insta-list">
            {instaList.map(list => (
              <li key={list.id}>
                <img className="insta-image" src={list.thumbnail_src} alt="" />
              </li>
            ))}
          </ul>
        )
      }
      <div className="text-center">
      { hasNext && <button className="btn" onClick={loadMoreEvent}>{buttonText}</button> }
      </div>
    </div>
  );
}

export default App;
