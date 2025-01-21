import s from './Options.module.css';

const Options = ({ ratingData, updateFeedback, reset, totalFeedback }) => {
  const btnNames = Object.keys(ratingData);

  return (
    <div className={s.btnBox}>
      {btnNames.map(btnName => (
        <button
          type="button"
          className={s.btn}
          onClick={() => updateFeedback(btnName)}
          key={btnName}
        >
          {btnName}
        </button>
      ))}
      {totalFeedback !== 0 && (
        <button type="button" className={s.btn} onClick={reset}>
          Reset{' '}
        </button>
      )}
    </div>
  );
};

export default Options;
