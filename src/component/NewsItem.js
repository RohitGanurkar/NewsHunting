import React from 'react'

const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author,date, source} = props;
    
    return (
        <div>
            <div className="card" >
            <img src={!imageUrl?`https://images.news18.com/ibnlive/uploads/2021/08/market-4-162977980416x9.jpg`:imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-secondary" style={{left: '86%', zIndex: 1}}>
                {source}
            </span>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"unknow"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Readmore</a>
            </div>
            </div>
        </div>
    )

}

export default NewsItem
