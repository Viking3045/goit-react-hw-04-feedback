import React from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";


// export const App = () => {
//   return (
//     <div>

//     </div>
//   );
// };

export class App extends React.Component {
     state = {
    good: 0,
    neutral: 0,
    bad: 0,

  };

 handleGood = () => {
    this.setState(prevState => ({
        good: prevState.good +1,
    }))};
  handleNeutral = () => {
     this.setState((prevState) => {
      return {
          neutral: prevState.neutral +1,
      }
    })};
  handleBad = () => {
     this.setState((prevState) => {
      return {
           bad: prevState.bad +1,
      }
     })
  };

  render() {
  
    return (<div>
      <Section title="Please leave feedback"  >
      <FeedbackOptions handleGood={this.handleGood} handleNeutral={this.handleNeutral} handleBad={this.handleBad} />
      </Section>
     
      <Section title="Statistics"  >
        <Statistics good={this.state.good} neutral ={this.state.neutral} bad={this.state.bad} />
      </Section>
      
    </div>
    
)

  }
}
