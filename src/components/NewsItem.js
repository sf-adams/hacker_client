import React from 'react'
import "./NewsItem.css"

export default function NewsItem({newsStory, id}) {

  return (
    <div key={id} className="list-item">
      <p className = "score">
        <b>Score:</b> {newsStory.score}
      </p>
      <hr />
      <p className = "item-title">
        {newsStory.title}
      </p>
      <p>
        <b>Author:</b> {newsStory.by}
      </p>
      <p>
        <a href={newsStory.url} className="link" target="_blank" rel="noreferrer">URL</a>
      </p>
    </div>
  );
}
