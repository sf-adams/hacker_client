import React from 'react'
import NewsItem from './NewsItem'

export default function NewsList({newsStories}) {

  const newsStoryItems = newsStories.map((newsStory, index) => {
    return <NewsItem newsStory={newsStory} id={index} />
  })

  return (
    <div>
      <ul>
        {newsStoryItems}
      </ul>
    </div>
  )
}
