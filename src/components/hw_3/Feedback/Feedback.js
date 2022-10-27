import React, { Component } from "react";
import { FeedbackBtn } from "components/hw-2/Feedback/FeedbackBtn/FeedbackBtn";
import Statistics from "components/hw-2/Feedback/Statistics/Statistics";
import Section from "components/hw-2/Section/Section";
import Notification from "components/hw-2/Feedback/Notification/Notification";

export default class Feedback extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countFeedback = (e) => {
    this.setState(prevState => ({
      [e.target.textContent]: prevState[e.target.textContent] + 1
    }))
  }

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () =>
    this.state.good === 0
      ? this.state.good
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {

    const feedback = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
    <div>
      <h1>Please leave feedback</h1>
      <Section>
        <FeedbackBtn
          feedback={feedback}
          feedbackOptions={this.countFeedback} />
      </Section>

      <Section title={'Statistics'}>
        {this.countTotalFeedback() === 0
          ?
          <Notification message="There is no feedback" />
          :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage} />}
      </Section>
    </div>)
  }
}