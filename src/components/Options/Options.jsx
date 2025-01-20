const Options = ({ ratingData, updateFeedback, reset }) => {
  const btnNames = Object.keys(ratingData);

  return (
    <div>
      {btnNames.map(btnName => (
        <button onClick={() => updateFeedback(btnName)} key={btnName}>
          {btnName}
        </button>
      ))}
      <button onClick={reset(btnNames)}>Reset </button>
    </div>
  );
};

export default Options;
