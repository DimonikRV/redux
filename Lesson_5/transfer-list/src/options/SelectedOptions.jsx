import { connect } from 'react-redux';
import Options from './Options';
import { toggleSelected } from '../actions/optionsListActions';
import { selectedOptionListSelector } from '../selectors/mapStateToProps';

const mapState = state => {
  return {
    options: selectedOptionListSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleSelected,
};

export default connect(mapState, mapDispatch)(Options);
