import React from 'react';
import style from './App.module.css';
import axios from "axios"
import Random from "./components/Random"
import Pagination from "./components/Pagination"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      randomQuote: {},
      isLoading: false,
      showRandom: false,
      showPagination: false,
      total: [],
    }
  }


  handleRendom = (e) => {
    this.setState({
      isLoading: true
    })
    axios.get("https://programming-quotes-api.herokuapp.com/quotes/random")
      .then(res => {
        // console.log(res.data)
        this.setState({
          randomQuote: res.data,
          isLoading: false,
          showRandom: true,
          showPagination: false,
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          isLoading: false,
          showRandom: true,
          showPagination: false,
        })
      return (<h1> {err.Error}</h1>)
      })
  }


  componentWillMount = () => {
    this.setState({
      isLoading: true
    })
    axios.get("https://programming-quotes-api.herokuapp.com/quotes/page/2")
      .then(res => {
        // console.log(res.data)
        this.setState({
          data: res.data,
          isLoading: false,
          showRandom: false,
          showPagination: true,
        })
      })
      .catch(err => {
        this.setState({ isLoading:false })
      return (<h1> {err.Error}</h1>)
      })


  }

  handlePage = (e) => {
    const { name } = e.target
    this.setState({
      isLoading: true
    })
    axios.get(`https://programming-quotes-api.herokuapp.com/quotes/page/${name}`)
      .then(res => {
        this.setState({
          data: res.data,
          isLoading: false,
          showRandom: false,
          showPagination: true,
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          isLoading:false
        })
      return (<h1> {err.Error}</h1>)
      })
  }


  pagination = () => {
    
    this.setState({
      isLoading: true
    })
    axios.get(`https://programming-quotes-api.herokuapp.com/quotes/page/1`)
      .then(res => {
        this.setState({
          data: res.data,
          isLoading: false,
          showRandom: false,
          showPagination: true,
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          isLoading:false
        })
      return (<h1> {err.Error}</h1>)
      })

    axios.get("https://programming-quotes-api.herokuapp.com/quotes")
      .then(res => {
        this.setState({
          total: res.data
        })
      })
  }


  render() {
    // const btn={
    //   background:"midNightBlue",
    //   margin:"2px 5px",
    //   padding:".6vw 1.5vw", 
    //   color:"white",
    // }
    const { data, isLoading, randomQuote, showPagination, showRandom, total } = this.state
    // console.log(this.state.btnName)
    return (
      <div className={style.App}>
        <div style={{ fontSize: "7vw", color: "midNightBlue", fontWeight: "bolder", textShadow: ".4vw .2vw .1vw #ffcdab" }}> Ocean of Quotes </div>
        <hr />
        <div style={{ marginRight: "10%", textAlign: "right" }}>
          <button onClick={e => this.handleRendom(e)} name={"random"}  >Random Quote</button>
          <button onClick={e => this.pagination(e)} name={"pagination"} >Quotes</button>
        </div>
        <h1> {isLoading && "DATA IS LOADING.........."}</h1>
        <div >
          <div className={style.block}>
            {!isLoading && showRandom && randomQuote && <Random randomData={this.state.randomQuote} />}
            {!isLoading && showPagination && data.length > 0 && <Pagination data={this.state.data} total={total.length} func={e => this.handlePage(e)} />}
          </div>
        </div>
      </div>
    );
  }
}

