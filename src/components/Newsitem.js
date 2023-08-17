import React, { Component } from 'react';

class Newsitem extends Component {
    render() {
        let {title,description,imgurl,newsurl,mode,date}=this.props;
        return (
            <div>
                <div className="card" style={{backgroundColor:mode==='light'?'white':'black',color:mode==='light'?'black':'white',border:`2px solid ${mode==='light'?'black':'white'}`}}>
                    <img src={!imgurl?"https://media.loom-app.com/gizmodo/dist/images/2023/07/27/%E3%81%A9%E3%81%93%E3%83%A2%E3%83%9000.jpg?w=1280&h=630&f=jpg":imgurl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small>Published on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target='_blank' className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsitem;
