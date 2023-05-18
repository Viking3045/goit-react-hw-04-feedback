import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => {
    return (<ul className={css.list}>
        <li className={css.item}>  <button className={css.button}  type="button" onClick={handleGood}>Good</button></li>
        <li className={css.item}> <button className={css.button} type="button" onClick={handleNeutral}>Neutral</button></li>
        <li className={css.item}> <button className={css.button} type="button" onClick={handleBad}>Bad</button>  </li>
    </ul>
      
     
     
     )
}
 
export default FeedbackOptions;