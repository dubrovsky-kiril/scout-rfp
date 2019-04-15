import * as React from "react";
import Header from "components/Header/Header.container";
import Main from "components/Main/Main.container";
import Footer from "components/Footer/Footer";
import styles from "./App.scss";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
