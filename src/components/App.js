import React, { Component } from "react";
import Layout from "../components/Layout/Layout.js";
import FeedbackOptions  from "./FeedbackOpions/FeedbackOptions ";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  onLeaveFeedback = (e) => {
    const {name} = e.target;
    
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,}
      

    });
   console.log(this.state);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    console.log(total);
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const objKey = Object.keys(this.state);


    return (
      <Layout>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions  
          onLeaveFeedback={this.onLeaveFeedback} 
          options={objKey} 
          />
        </Section>


        <Section title={"Statistic"}>
          {total === 0 ? (
            <Notification massage={"No feedback given"} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </Layout>
    );
  }
}
