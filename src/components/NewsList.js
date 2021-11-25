import React from 'react'
import NewsItem from './NewsItem'
import "./NewsList.css"

export default function NewsList({newsStories}) {

  const newsStoryItems = newsStories.map((newsStory, index) => {
    return <NewsItem newsStory={newsStory} key={index} />
  })

  return (
    <div>
      <ul className="list">
        {newsStoryItems}
      </ul>
    </div>
  )
}
