import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Notification } from 'components/notification/Notification';
import { Statistics } from 'components/statistics/Statistics';
import PropTypes from 'prop-types';
import { Container } from './Section.styled';

const Section = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
  onGood,
  onNeutral,
  onBad,
}) => {
  return (
    <Container>
      <h2>{title}</h2>
      <FeedbackOptions onGood={onGood} onNeutral={onNeutral} onBad={onBad} />
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </Container>
  );
};

export { Section };

Section.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,

  title: PropTypes.string.isRequired,
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
