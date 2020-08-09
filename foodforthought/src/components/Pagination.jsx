import React, { Component } from "react";
import style from '../App.module.css';

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    buttons = () => {
        let pages = Math.ceil(this.props.total / 20)
        let buttons = []
        for (let i = 1; i <= pages; i++) {
            buttons.push(<button onClick={e=>this.props.func(e)} name={i} style={{background:"midNightBlue", margin:2, padding:"5px 10px", color:"white"}} >{i}</button>)
        }
        return buttons
    }


    render() {
        // console.log(this.props)
        const { data} = this.props
        return (
            <>
                {data && data.map(item => (
                    <div className={style.quots}>
                        <div>{item.en}</div>
                        <small style={{ marginLeft: "50%", fontSize: "2vw", color: "black" }}>By: {item.author}</small>
                        <hr />
                    </div>
                ))}
                < div >
                    {this.buttons()}
                </div >
            </>
        )
    }
}