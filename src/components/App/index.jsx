import React from "react";
import FormCostIncome from "../FormCostIncome";

// Components
import Home from "../../Pages/Home/Home";

export const App = () => {

  return (
    <div>
    <Home />
      <FormCostIncome actionType="COST" />
    </div>
  );
};

export default App;
