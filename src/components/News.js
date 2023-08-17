import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "business",
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    articles = []
    constructor(props) {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        }
    }
    async componentDidMount() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7cd8af8dac824f3d8586d613de6aa1bc
        &page=1&pageSize=${this.props.pageSize}`;
        this.props.setProgress(40)
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        this.props.setProgress(70)
        this.setState({
            loading: false,
            articles: parseData.articles,
            totalResults: parseData.totalResults
        })
        this.props.setProgress(100)
    }
    handlenext = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7cd8af8dac824f3d8586d613de6aa1bc
            &page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url)
            let parseData = await data.json()
            this.setState({
                loading: false,
                page: this.state.page + 1,
                articles: parseData.articles
            })
        }
    }
    handleprev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7cd8af8dac824f3d8586d613de6aa1bc
        &page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            loading: false,
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7cd8af8dac824f3d8586d613de6aa1bc
        &page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            totalResults: parseData.totalResults,
            articles: this.state.articles.concat(parseData.articles)
        })
    };
    render() {
        return (
            <>
                <div className='container my-3 mb-3'>
                    <h1 className={`text-${this.props.heading === 'light' ? 'black' : 'white'}`} style={{ textAlign: 'center' }}>Top Headlines</h1>
                    {/* {this.state.loading && <Spinner/>} */}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row ">
                                {this.state.articles.map((ele) => {
                                    return <div className="col-md-4 my-3" key={ele.url}>
                                        <Newsitem mode={this.props.heading} title={ele.title ? ele.title.slice(0, 72) : ""} date={ele.publishedAt} description={ele.description ? ele.description.slice(0, 88) : ""} imgurl={ele.urlToImage} newsurl={ele.url} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-danger mx-3" onClick={this.handleprev}>&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-success mx-3" onClick={this.handlenext}>Next &raquo;</button>
                </div> */}
            </>
        );
    }
}

export default News;
