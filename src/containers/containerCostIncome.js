import { connect } from "react-redux";
import { fetchFinance } from "../redux/finance/financeOperation";
import * as financeSelectors from "../redux/finance/financeSelectors";
import * as sessionSelectors from '../redux/session/sessionSelectors';
import FormCostIncome from "../components/FormCostIncome/FormCostIncome";

const mapStateToProps = (state) => ({
  balance: financeSelectors.getTotalBalance(state),
  token: sessionSelectors.getToken(state),
  user: sessionSelectors.getUser(state),
});

const mapDispatchToProps = {
  getFinance: fetchFinance,
};

export default connect(mapStateToProps,mapDispatchToProps)(FormCostIncome);
