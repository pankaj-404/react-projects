import React, { Component } from 'react';
import styles from './App.module.css';
import Card from "./components/Card"
import data from "./data.json"
import { v4 as uuidv4 } from 'uuid';
// import Button from "./components/Button"



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.prop,
      sort: "",
      rating: 0,
      mode: ""
    }
  }

  // maintain state for cost of 2person, sorting data 
  sortData = (e) => {
    this.setState({
      sort: e.target.attributes[0].value,
      rating: 0,
      mode: ""
    })
  }

  // maintain state for rating  
  ratingData = (e) => {
    this.setState({
      rating: Number(e.target.attributes[0].value),
      mode: ""
    })
  }

  // maintain state for payment mode 
  modeData = (e) => {
    this.setState({
      mode: e.target.attributes[0].value,
      rating: 0
    })
  }

  // sorting function which handle soring cases 
  sortHandler = (a, b) => {
    let sort = this.state.sort
    if (sort === 'asc') { return a.costForTwo - b.costForTwo }
    if (this.state.rating > 0) { return b.rating - a.rating }
    else { return b.costForTwo - a.costForTwo }
  }

  // render components
  render() {
    return (
      <div>
        <div className={styles.flex}>
          <button onClick={this.sortData} sort="asc" className={styles.btn}>Low-to-High</button>
          <button onClick={this.sortData} sort="desc" className={styles.btn}>High-to-Low</button>
          <button onClick={this.modeData} mode="card" className={styles.btn}>Card</button>
          <button onClick={this.modeData} mode="cash" className={styles.btn}>Cash</button>
          <button onClick={this.modeData} mode="all" className={styles.btn}>All</button>
          <button onClick={this.ratingData} rating="1" className={styles.btn}>1 Rating</button>
          <button onClick={this.ratingData} rating="2" className={styles.btn}>2 Rating</button>
          <button onClick={this.ratingData} rating="3" className={styles.btn}>3 Rating</button>
          <button onClick={this.ratingData} rating="4" className={styles.btn}>4 Rating</button>
        </div>

        <div className={styles.grid}>
          {
            data.sort(this.sortHandler)
              //filter for rating
              .filter(
                (this.state.rating == 0) ?
                  (ele => ele.rating >= 0) :
                  (ele => ele.rating > this.state.rating)
              )
              // filter for payment mode
              .filter(
                (this.state.mode === "card") ?
                  (ele => ele.payment.card === "true") :
                  ((this.state.mode === "cash") ? (ele => ele.payment.cash === "true") :
                    ((this.state.mode === "all") ? (ele => ele.payment.card === "true" && ele.payment.cash === "true" && ele.payment.upi === "true") :
                      (ele => ele)))
              )
              // rendering card by map and passing key by uuid-v4
              .map(item => (
                < Card key={uuidv4()} prop={item} />
              ))
          }
        </div>
      </div>
    )
  }

}