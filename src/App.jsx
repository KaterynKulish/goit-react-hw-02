import { useState } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

const App = () => {
  const [ratingData, setRatingData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = btnName => {
    console.log(btnName);
    setRatingData(prev => ({ ...prev, [btnName]: prev[btnName] + 1 }));
  };

  const totalFeedback = Object.values(ratingData).reduce(
    (total, value) => total + value,
    0
  );

  const handleReset = ({ ratingData, btnName }) => {
    console.log(ratingData);
    console.log(btnName);

    // setRatingData([btnName]:0);
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
      />
      <Feedback ratingData={ratingData} totalFeedback={totalFeedback} />
    </div>
  );
};

export default App;
