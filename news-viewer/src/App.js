import React, { useState, useCallback } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/categories";

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;

//API KEY :  5489c90d70ce4e1dbf92aeab56573360
