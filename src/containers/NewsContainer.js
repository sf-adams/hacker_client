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
    .then(response => setNewsIds(response.slice(0, 10)))
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
      <NewsList newsStories={newsStories}></NewsList>
    </div>
  )

}
