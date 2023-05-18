import Notification from "components/Notification/Notification";
 import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad }) => {
   const total = bad + good + neutral;
   const feedback = (total === 0) ? 0 : `${Math.round(good * 100 / total)}%`;
   if (total === 0) {
     return (
         <Notification message="There is no feedback"/>
       ) 
   } else {
      return (
      
      <ul className={css.list}>
        <li className={css.item}>Good:{good}</li>
        <li className={css.item}>Neutral:{neutral}</li>
        <li className={css.item}>Bad:{bad}</li>
        <li className={css.item}>Total:{total}</li>
        <li className={css.item}>Positive feedback:{feedback}</li>
      </ul>
    )
     }
   
   
 }
 
 export default Statistics