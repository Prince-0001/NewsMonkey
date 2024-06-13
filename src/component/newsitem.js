import React, { Component } from 'react';
import noImage from './noImage';
export default class newsitem extends Component {

  render() {
    let {title,text,imgurl,url}=this.props;
    return (
      <div>
             <div className="card" style={{width: "18 rem"}}>
                    <img src={imgurl?imgurl:noImage()}  className="card-img-top" alt=".." width={'150px'} height={'150px'}/>
                    <div className="card-body">
                        <h5 className="card-title">{title?title.slice(0,35):""}</h5>
                        <p className="card-text">{text?text.slice(0,100):"Global markets rally as tech stocks soar, with major indices hitting record highs amid investor optimism."}...
                        </p>
                        <a  rel="noreferrer" href={url} target="_blank" className="btn btn-dark">Read more</a>
                    </div>
             </div>
        
      </div>
    )
  }
}
