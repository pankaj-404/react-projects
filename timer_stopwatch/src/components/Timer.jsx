import React, { Component } from "react"
import styles from '../App.module.css';


export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 3600000,
            start: false
        };
    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    start = () => {
        if (!this.state.start && this.state.number>0) {

            this.interval = setInterval(() => {
                this.setState({ number: this.state.number - 1, start: true });
            }, 10);
        }
        
    }


    pause = () => {
        this.setState({
            number: this.state.number, start: false
        })
        clearInterval(this.interval)
    }

    reset = () => {
        this.setState({
            number: 3600000, start: false
        })
        clearInterval(this.interval)
    }

    inputHandler=(e)=>{
        let {value} = e.target
        this.setState({
            number: value*100
        })
    }

    render() {
        if(this.state.number <= 0){

            clearInterval(this.interval)
            alert("Time is Over")
        }
        return (
            <div>
                <input placeholder="Enter time in secconds" onChange={this.inputHandler}/>
                <h1>Timer</h1>
                <h1><span>{Math.floor((this.state.number / (100*60*60)))} : </span><span>{Math.floor((this.state.number / (100*60))%60)} : </span><span>{Math.floor((this.state.number / 100)%60)} : </span><span style={{ fontSize: "small", margin: "15px", width: "15px" }}>{this.state.number % 100}</span>  </h1>

                {/* <h1><span>{Math.floor(this.state.number / 100)}</span><span style={{ fontSize: "small", margin: "15px", width: "15px" }}>{this.state.number % 100}</span>  </h1> */}
                <button className={styles.start} onClick={this.start}>Start</button>
                <button className={styles.pause} onClick={this.pause}>Pause</button>
                <button className={styles.reset} onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

//   ReactDOM.render(<App/>, document.querySelector('#mount'));