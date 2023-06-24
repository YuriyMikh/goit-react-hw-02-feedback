import PropTypes from 'prop-types';

export const Statistics = ({ grades, total, positivePercentage }) => {
  return (
    <>
      <ul>
        {grades.map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <p>Total: {total()}</p>
      <p>Positive feedback: {positivePercentage()}%</p>
    </>
  );
};

Statistics.propTypes = {
  grades: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
