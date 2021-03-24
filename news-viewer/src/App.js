import React, { useState, useCallback } from "react";
import NewsPage from "./pages/NewsPage";
import { Route } from "react-router-dom";

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;

//API KEY :  5489c90d70ce4e1dbf92aeab56573360
