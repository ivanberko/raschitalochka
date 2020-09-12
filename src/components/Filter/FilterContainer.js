import { connect } from "react-redux";
import * as financeSelectors from "../../redux/reducers/finance/financeSelectors";
import Filter from "./Filter";

const mapStateToProps = (state) => ({
  financeData: financeSelectors.getFinanceData(state),
});

export default connect(mapStateToProps,null)(Filter);
