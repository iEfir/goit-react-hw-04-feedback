import { useState } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout';
import { Section } from './section/Section';

export function App() {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);
  let [total, setTotal] = useState(0);
  let [positivePercentage, setPositivePercentage] = useState(0);

  const handleClickOnGood = () => {
    setGood((good += 1));
    setTotal((total = good + neutral + bad));
    setPositivePercentage(Math.ceil((good / total) * 100));
  };

  const handleClickOnNeutral = () => {
    setNeutral((neutral += 1));
    setTotal((total = good + neutral + bad));
    setPositivePercentage(Math.ceil((good / total) * 100));
  };

  const handleClickOnBad = () => {
    setBad((bad += 1));
    setTotal((total = good + neutral + bad));
    setPositivePercentage(Math.ceil((good / total) * 100));
  };

  return (
    <Layout>
      <Section
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
        title="Please leave feedback"
        onGood={handleClickOnGood}
        onNeutral={handleClickOnNeutral}
        onBad={handleClickOnBad}
      />
      <GlobalStyle />
    </Layout>
  );
}
