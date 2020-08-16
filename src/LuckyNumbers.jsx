import React, { Fragment, Component } from "react";

class LuckyNumbers extends Component {

state = {
      random1: "",
      random2: "",
      random3: "",
      random4: "",
      random5: "",
      random6: "",
      random7: "",
    };

  baseState = this.state;

  numberGenerator = () => {
    this.setState({
      random1: Math.ceil(Math.random() * 49),
      random2: Math.ceil(Math.random() * 49),
      random3: Math.ceil(Math.random() * 49),
      random4: Math.ceil(Math.random() * 49),
      random5: Math.ceil(Math.random() * 49),
      random6: Math.ceil(Math.random() * 49),
      random7: Math.ceil(Math.random() * 49),
    });
  };

  reset = () => {
    this.setState(this.baseState);
  };

  render() {
    return (
      <Fragment>
        <section>
          <h1>Lotto 6 / 49</h1>
          <p>Generating lucky numbers</p>
          <div className="containerNumbers hide">
            <span>{this.state.random1}</span>
            <span>{this.state.random2}</span>
            <span>{this.state.random3}</span>
            <span>{this.state.random4}</span>
            <span>{this.state.random5}</span>
            <span>{this.state.random6}</span>
            <span>{this.state.random7}</span>
          </div>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.numberGenerator} id="showMe">
            Show me lucky numbers
          </button>
        </section>
      </Fragment>
    );
  }
}


export default LuckyNumbers