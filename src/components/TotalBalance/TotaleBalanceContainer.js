import { connect } from "react-redux";
import * as financeSelectors from "../../redux/reducers/finance/financeSelectors";
import TotalBalance from "./TotalBalance";

const mapStateToProps = (state) => ({
  totalBalance: financeSelectors.getTotalBalance(state),
});

export default connect(mapStateToProps)(TotalBalance);
