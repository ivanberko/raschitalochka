import { connect } from "react-redux";

import { getFinanceData } from "../redux/finance/financeSelectors";
import MainTableMobile from "../components/MainTable/Mobile/MainTableMobile";

const mapStateToProps = (state) => ({
  financeData: getFinanceData(state),
});


export default connect(mapStateToProps, null)(MainTableMobile);
