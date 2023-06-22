import React, { Component } from 'react';
import { Notification } from 'components/Notification/Notification';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickToButton = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, elem) => acc + elem, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <p>Please leave feedback</p>
        {Object.keys(this.state).map(item => {
          return (
            <button
              key={item}
              type="button"
              onClick={() => {
                this.handleClickToButton(item);
              }}
            >
              {item}
            </button>
          );
        })}

        <p>Statistics</p>

        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <>
            <ul>
              {Object.entries(this.state).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          </>
        )}
      </>
    );
  }
}
