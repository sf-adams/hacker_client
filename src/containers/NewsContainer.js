import React, {useState, useEffect} from 'react';

export default function NewsContainer() {

  const [newsIds, setNewsIds] = useState([]);
  const [newsStories, setNewsStories] = useState([]);

  useEffect(() => {
    getPromises();
    // resolvePromises(promiseArray);
  }, [])

  // useEffect(() => {
  //   const promiseList = getNewsStories();
  //   Promise.all(promiseList)
  // }, [newsIds])

  const getPromises = function() {

    var recievedNewsStories = [];

    // fetch('https://hacker-news.firebaseio.com/v0/item/29338658.json')
    // .then(response => response.json())
    // .then(response => console.log(response.title))

    // let recievedNewsStories = [];

    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => response.json())
    .then(response => setNewsIds(response.slice(0, 20)))
    .then(data => {
      recievedNewsStories = newsIds.map((ids) => {
        // console.log("iteration of news story map " + ids)
        fetch(`https://hacker-news.firebaseio.com/v0/item/${ids}.json`)
        // .then(response => response.json())
        .then(response => {newsStories.push(response)})
        // .then(response => {setNewsStories(response)})
        // .then(response => {return response})
        // .then(response => response.title)
        // .then(response => {return response})

        // return response.title
        // .then(response => console.log(response.title))
        // .then(data => {return data})
      })
      // setNewsStories(newsStories)
    //   Promise.all(recievedNewsStories).then((values) => {console.log(values)})
    // })
      }
    )
    }
  // const resolvePromises = function(promiseArray) {
  //   Promise.all(promiseArray)
  // }

  // const getNewsStories = function() {
  //   console.log("News Ids:", newsIds);
  //   const recievedNewsStories = newsIds.map((ids) => {
  //     fetch(`https://hacker-news.firebaseio.com/v0/item/${ids}.json`)
  //     .then(response => response.json())
  //     .then(data => {return data})
  //   })
  //   const promiseList = recievedNewsStories;
  //   // console.log(recievedNewsStories);
  //   return promiseList;
  // }

  // const getNewsStories = function() {
  //   const recievedNewsStories = newsIds.map((ids) => {
  //     fetch(`https://hacker-news.firebaseio.com/v0/item/${ids}.json`)
  //     .then(response => response.json())
  //     .then(data => {return data})
  //   })
  //   setNewsStories(recievedNewsStories);
  //   console.log(recievedNewsStories);
  //   console.log(newsStories);
  // }

  return (
    <div>
      <p>test</p>
    </div>
  )

}
