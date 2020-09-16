import { connect } from "react-redux";
import * as financeSelectors from "../redux/finance/financeSelectors";
import Filter from "../components/Filter/Filter";

const mapStateToProps = (state) => ({
  financeData: financeSelectors.getFinanceData(state),
  totalBalance: financeSelectors.getTotalBalance(state),
});

export default connect(mapStateToProps,null)(Filter);
