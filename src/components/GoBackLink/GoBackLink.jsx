import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { LinkStyled } from './GoBackLink.styled';

const GoBackLink = ({ to, children }) => {
  return (
    <LinkStyled to={to}>
      <HiArrowLeft size="24" />
      {children}
    </LinkStyled>
  );
};

export default GoBackLink;

GoBackLink.propTypes = {
  children: PropTypes.string.isRequired,
};
