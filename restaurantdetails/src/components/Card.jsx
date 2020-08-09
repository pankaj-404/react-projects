import React, { Component } from "react"
import styles from "./Card.module.css"
// import { v4 as uuid } from "uuid"


export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.prop
        }
    }

    render() {
        let arr = []
        let obj = this.state.value.payment
        Object.keys(obj).forEach(function (key) {
            if (obj[key] === "true") arr.push(key);
        });
console.log(arr)
        return (
            <>
                <div className={styles.card}>
                    <div>
                        <img src={this.state.value.img} alt="" className={styles.img} />
                    </div>
                    <div>
                        <div className={styles.h1}>{this.state.value.name}</div>
                        <div className={styles.mute}>{this.state.value.categories.join(", ")}</div>
                        <div className={styles.mute}>Cost for 2 : {this.state.value.costForTwo}</div>
                        <div>
                            <span className={styles.floatLeft}>Min price :  {this.state.value.minCost}</span> <span className={styles.span}> &bull; Up to {this.state.value.waitingTime} min.</span>
                        </div>
                        <div className={styles.clear}>Payment mode accepted {arr.join(" | ")}</div>
                    </div>
                    <div className={styles.rightBox}>
                        <div className={styles.btn}> {this.state.value.rating}</div>
                        <div className={styles.mute}>{this.state.value.votes} Votes</div>
                        <div className={styles.mute}>{this.state.value.noOfRatings} Ratingd</div>
                    </div>
                    <div>
                        <div>Order Online &rsaquo;</div>
                    </div>
                </div>
            </>
        )
    }

}