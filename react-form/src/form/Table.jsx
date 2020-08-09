import React, { Component } from "react"
import styles from "../App.module.css"
export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let trBg = {
            background: "#c5e3f6",
        }
        return (
            <>
                <tr style={{ wordWrap: "breakWord" }}>
                    <td style={{ width: 150 }}> {this.props.data.name} </td>
                    <td style={{ width: 70 }}>{this.props.data.department}</td>
                    <td style={{ width: 50 }}>{this.props.data.age}</td>
                    <td style={{ width: 80 }}>{this.props.data.salary}</td>
                    <td style={{ width: 200 }}>{this.props.data.address}</td>
                    <td > <button name={this.props.data.id} onClick={(e) => this.props.toggleState(e)} className={styles.funcBtn}><i style={{fontSize:20}} className="fa">&#xf044;</i></button>
                        <button name={this.props.data.id} onClick={(e) => this.props.delete(e)} className={styles.funcBtn}><i style={{fontSize:20}} className="fa fa-trash"></i></button></td>
                </tr>
            </>
        )
    }
}