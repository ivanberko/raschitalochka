import { connect } from "react-redux";
import { fetchFinance } from "../redux/finance/financeOperation";

import Home from "../Pages/Home/Home";

const mapDispatchToProps = {
  getFinance: fetchFinance,
};

export default connect(null, mapDispatchToProps)(Home);
