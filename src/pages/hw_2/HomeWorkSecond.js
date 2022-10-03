/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { FeedbackBtn } from "components/hw-2/FeedbackBtn/FeedbackBtn";

export default class HomeWorkeSecond extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countFeedback(e) {
   
  }

  countTotalFeedback() { }
  
  countPositiveFeedbackPercentage() {}

  render() {
    console.log(this.setState)
    const { good, neutral, bad } = this.state;
    return <div>
      <h1>Please leave feedback</h1>
      <div>
        <FeedbackBtn
          feedback='Good'
          feedbackOptions={this.countFeedback}/>
        <FeedbackBtn feedback='Neutral' />
        <FeedbackBtn feedback='Bad' />
      </div>
      <h2>Statistics</h2>
      <ul>
        <li>Good: { good}</li>
        <li>Neutral: {neutral }</li>
        <li>Bad: {bad}</li>
        <li>Total:</li>
        <li>Positive fedback: </li>
      </ul>
    </div>
  }
}