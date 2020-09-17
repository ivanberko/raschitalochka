import { connect } from "react-redux";

import { getFinanceData } from "../redux/finance/financeSelectors";
import MainTableDesktop from "../components/MainTable/TabletOrDesktop/MainTableDesckop";

const mapStateToProps = (state) => ({
  financeData: getFinanceData(state),
});


export default connect(mapStateToProps, null)(MainTableDesktop);
