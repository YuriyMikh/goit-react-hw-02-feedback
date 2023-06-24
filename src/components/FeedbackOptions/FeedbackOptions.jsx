import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(item => {
    return (
      <button
        key={item}
        type="button"
        onClick={() => {
          onLeaveFeedback(item);
        }}
      >
        {item}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
