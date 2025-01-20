const Options = ({ ratingData, updateFeedback, handleReset }) => {
  const btnNames = Object.keys(ratingData);

  return (
    <div>
      {btnNames.map(btnName => (
        <button onClick={() => updateFeedback(btnName)} key={btnName}>
          {btnName}
        </button>
      ))}
      <button onClick={handleReset}>Reset </button>
    </div>
  );
};

export default Options;
