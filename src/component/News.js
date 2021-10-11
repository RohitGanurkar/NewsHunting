import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
    
    const capital=(str)=>{ return str.charAt(0).toUpperCase() + str.slice(1); }

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalResult, setTotalResult] = useState(0);

    
    const updateNews = async() =>{
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
        props.setProgress(10);
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles)
        setTotalResult(parseData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }  

    useEffect(() => {
        document.title = `NewsHunting - ${capital(props.category)} Headlines`;
        updateNews();
        // eslint-disable-next-line
    },[])

    const fetchMoreData = async () =>{
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles))
        setTotalResult(parseData.totalResults)
    }

    return (
        <>
            <h1 className="mb-2 fw-bold text-light text-center" style={{marginTop: '82px'}}>NewsHunting Top <span className="badge bg-dark mt-2">{capital(props.category)}</span> Headline</h1>
            {loading && <Loader/>}

            <InfiniteScroll
            dataLength = {articles.length} //This is important field to render the next data
            next={fetchMoreData} // a function to add more data
            hasMore={articles.length !== totalResult} // {true||false}
            loader={<Loader/>}>

            <div className="container">
                <div className="row">
                    {articles.map((elm)=>{

                    return <div className="col-md-4 mt-4" key={elm.url}>
                            <NewsItem title={elm.title?elm.title:""} description={elm.description?elm.description:""} imageUrl={elm.urlToImage} newsUrl={elm.url} author={elm.author} date={elm.publishedAt} source={elm.source.name} />
                            </div>})}
                    
                </div>
            </div>

            </InfiniteScroll>
        </>
    )

}

News.prototype = {
    country: "in",
    pagesize: 12,
    category: "in"
}
News.defaultProps = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}

export default News
