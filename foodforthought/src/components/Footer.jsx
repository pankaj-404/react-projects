import React, { Component } from "react";
import style from '../App.module.css';

export default class Footer extends Component {
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

    render(){
        return(
            <div>
                {this.buttons}
            </div>
        )
    }
}