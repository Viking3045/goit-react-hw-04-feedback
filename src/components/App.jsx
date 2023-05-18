import React from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import { useState } from "react";


// export const App = () => {
//   return (
//     <div>

//     </div>
//   );
// };

export const App = ()=>  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  //    state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,

  // };

 const handleGood = () => {
    setGood((prevState) => 
         prevState +1,
    )};
  const handleNeutral = () => {
     setNeutral((prevState) => 
      
           prevState +1,
    )};
 const handleBad = () => {
     setBad((prevState) => 
           prevState +1,
     )
  };
    return (<div>
      <Section title="Please leave feedback"  >
      <FeedbackOptions handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
      </Section>
     
      <Section title="Statistics"  >
        <Statistics good={good} neutral ={neutral} bad={bad} />
      </Section>
      
    </div>
    
)
}
