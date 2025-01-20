const Feedback = ({ ratingData, totalFeedback }) => {
  const btnNames = Object.keys(ratingData);
  return (
    <ul>
      {btnNames.map(btnName => (
        <li key={btnName}>
          {btnName}: {ratingData[btnName]}
        </li>
      ))}{' '}
      <li>Total: {totalFeedback}</li>
    </ul>
  );
};

export default Feedback;
