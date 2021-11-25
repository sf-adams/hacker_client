import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList';


export default function NewsContainer() {

  const [newsIds, setNewsIds] = useState([]);
  const [newsStories, setNewsStories] = useState([]);

  useEffect(() => {
    getPromises();
    // resolvePromises(promiseArray);
  }, [newsIds])

  const getPromises = function() {
    var recievedNewsStories = [];

    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => response.json())
    .then(response => setNewsIds(response))
    .then(data => {
      recievedNewsStories = newsIds.map((ids) => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${ids}.json`)
        .then(response => response.json())
      })
      // promise
      Promise.all(recievedNewsStories).then((values) => {setNewsStories(values)})
    }
    )
  }

  return (
    <div>
      <div className = "header-ribbon"></div>
      <h1 id="title">Hacker News Top 20 Articles</h1>
      <NewsList newsStories={newsStories.sort((a, b) => b.score - a.score).slice(0, 20)}></NewsList>
    </div>
  )

}
