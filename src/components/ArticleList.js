import React from 'react'
import Article from './Article.js'

const ArticleList = ({posts}) => {
    const mappedPosts = posts.map((article) => {
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview}/>
    })
    return(
        <main>{mappedPosts}</main>
    )
}

export default ArticleList