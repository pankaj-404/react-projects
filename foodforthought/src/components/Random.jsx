import React, { Component } from "react";
import style from '../App.module.css';

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        const { randomData } = this.props
        return (
            randomData && 
            <div className={style.quots}>
                <div>{randomData.en}</div>
                <small style={{marginLeft:"50%", fontSize:"2vw", color:"black"}}>By: {randomData.author}</small>
                <hr/>
            </div>
            
        )
    }
}