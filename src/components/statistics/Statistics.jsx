import PropTypes from 'prop-types';
import { Container, StatisticsItems } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <h2>Statistics</h2>
      <Container>
        <StatisticsItems>Good: {good}</StatisticsItems>
        <StatisticsItems>Neutral: {neutral}</StatisticsItems>
        <StatisticsItems>Bad: {bad}</StatisticsItems>
        <StatisticsItems>Total: {total}</StatisticsItems>
        <StatisticsItems>
          PositivePercentage: {positivePercentage}%
        </StatisticsItems>
      </Container>
    </Container>
  );
};

export { Statistics };

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
