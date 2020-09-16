import { connect } from "react-redux";
import * as financeSelectors from "../redux/finance/financeSelectors";
import TotalBalance from "../components/TotalBalance/TotalBalance";

const mapStateToProps = (state) => ({
  totalBalance: financeSelectors.getTotalBalance(state),
});

export default connect(mapStateToProps)(TotalBalance);
