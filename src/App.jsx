import { useEffect, useState } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

const App = () => {
  const [ratingData, setRatingData] = useState(
    () =>
      JSON.parse(localStorage.getItem('ratingData')) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  useEffect(
    () => localStorage.setItem('ratingData', JSON.stringify(ratingData)),
    [ratingData]
  );

  const updateFeedback = btnName => {
    console.log(btnName);
    setRatingData(prev => ({ ...prev, [btnName]: prev[btnName] + 1 }));
  };

  const totalFeedback = Object.values(ratingData).reduce(
    (total, value) => total + value,
    0
  );

  const positiveFeedback =
    Math.round((ratingData.good / totalFeedback) * 100) + '%';

  const handleReset = () => {
    setRatingData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        ratingData={ratingData}
        updateFeedback={updateFeedback}
        reset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          ratingData={ratingData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
};

export default App;
