import s from './Feedback.module.css';
const Feedback = ({ ratingData, totalFeedback, positiveFeedback }) => {
  const btnNames = Object.keys(ratingData);
  return (
    <ul>
      {btnNames.map(btnName => (
        <li className={s.itemFeedback} key={btnName}>
          {btnName}: {ratingData[btnName]}
        </li>
      ))}
      <li className={s.itemFeedback}>Total: {totalFeedback}</li>
      <li className={s.itemFeedback}>Positive: {positiveFeedback}</li>
    </ul>
  );
};

export default Feedback;
