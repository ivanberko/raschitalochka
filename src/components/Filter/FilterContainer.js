import { connect } from "react-redux";
import * as filterAction from "../../redux/reducers/filter/filterAction";
import * as filterSelectors from "../../redux/reducers/filter/filterSelectors";
import Filter from "./Filter";

const mapStateToProps = (state) => ({
  filterMonth: filterSelectors.getFilterMonth(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSelectMonth: (month) => dispatch(filterAction.filterMonth(month)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
