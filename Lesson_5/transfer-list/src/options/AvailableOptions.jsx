import { connect } from 'react-redux';
import Options from './Options';
import { toggleSelected } from '../actions/optionsListActions';
import { availableOptionsSelector } from '../selectors/mapStateToProps';

const mapState = state => {
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleSelected,
};

export default connect(mapState, mapDispatch)(Options);
