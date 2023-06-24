import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {

    return (
    <section>
      <p>{title}</p>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};