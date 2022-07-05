import React from "react";
import articleListItem from '../components/articleListItem';

const NewsList = ({articleList}) => {

    const listOfArticles = articleList.map((article) => {
        return (<articleListItem key={article.id}/>)
    })

    return(
        <>
        <h2>News List</h2>
        <ul>
            {listOfArticles}
        </ul>
        
        </>
    )
}

export default NewsList;