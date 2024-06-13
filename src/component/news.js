import React, { Component } from 'react'
import Newsitem from "./newsitem"
import Loader from './loading';

export default class news extends Component {
    

  constructor (){
      super();
    this.state={
      articles:[],
      loading:false,
      

    }
}
async componentDidMount(){
    this.setState({
      loading:true
    })
    
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=6f4b92d4022a4a6189310902a6f236cd&pagesize=${this.props.pagesize}&page=1`;
   let data= await fetch(url);
   let parsedata=await data.json();
   console.log(parsedata);
   this.setState({articles:parsedata.articles,
  totalResults:parsedata.totalResults,
  page:1,
  loading:false
})



}
changeNextPage=async()=>{
  
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=6f4b92d4022a4a6189310902a6f236cd&pagesize=${this.props.pagesize}&page=${this.state.page+1}`;
    this.setState({
      loading:true
    })
     let data= await fetch(url);
     let parsedata=await data.json();
     this.setState({
      articles:parsedata.articles,
      page:this.state.page+1,
      loading:false
     })

  


}
changePreviousPage=async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=6f4b92d4022a4a6189310902a6f236cd&pagesize=${this.props.pagesize}&page=${this.state.page-1}`;
  this.setState({
    loading:true
  })
   let data= await fetch(url);
   let parsedata=await data.json();
   this.setState({
    articles:parsedata.articles,
    page:this.state.page-1,
    loading:false
   })

}
  render() {
    
    return (
        <div className='container mt-5'>
        <h1 className='mb-3'>Today's -Top News</h1>
        {this.state.loading&&<Loader/>}

        <div className='row row-md-col-3'>
            {!this.state.loading&&this.state.articles.map((Element)=>{
               return <div className='col-md-3 col-sm-1 mb-4'>
                <Newsitem key={Element.url} title={Element.title} imgurl={Element.urlToImage} url={Element.url} text={Element.description} />
      
                </div>

            })}
          
          
          

        </div>
        <div className='d-flex justify-content-between'>
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.changePreviousPage}>&#8592; Previous</button>
        <button type="button" disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-dark" onClick={this.changeNextPage}>Next &#8594;</button>
        </div>
        
        
        
      </div>
    )
  }
}
