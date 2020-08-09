import React from 'react';
import styles from './App.module.css';
import Timer from "./components/Timer"
import StopWatch from './components/StopWatch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerShow: true,
      stopWatch: false,
      time:0,
      endtime:0,
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={styles.App}>
        <div>
          <button onClick={() => this.setState({ timerShow: false, stopWatch: true })} >STOP WATCH</button>
          <button onClick={() => this.setState({ timerShow: true, stopWatch: false })} >Timer</button><br />
        </div>
        <hr/>

        {(!this.state.timerShow && this.state.stopWatch) ?
          <StopWatch
            counter={this.state.counter} /> :

          <Timer counter={this.state.counter} />
        }


      </div>)

  }
}

export default App;
