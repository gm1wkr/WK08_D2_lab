import React, { useState, useEffect} from 'react';
import NewsList from '../components/NewsList';
const NewsContainer = () => {

    const [articleId, setArticleId] = useState([])
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(data => setArticleId(data))
    }, [])

    
    const getArticles = async () => {
        // console.log(articleId);
        const promises = articleId.map( article => fetch(`https://hacker-news.firebaseio.com/v0/item/${article}.json`).then(res => res.json()))
        const articles = await Promise.all(promises)
        // console.log(articles);
        setArticles(articles)
        
    }
    
    useEffect(() => {
        getArticles();
    }, [articleId])
    

    return (
        <>
            <h1>News Articles</h1>
            <NewsList articleList={articles} />
            
            
        </>
    )
}

export default NewsContainer;