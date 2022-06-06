import React from "react";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import Search from "./components/Search/Search";
import { DataProvider } from "./context/DataProvider";

const App = () => {
  return (
    <DataProvider>
      {/* <AppRouter /> */}
      <AppRouter />
    </DataProvider>
  );
};

export default App;
