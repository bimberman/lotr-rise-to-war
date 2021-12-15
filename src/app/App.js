import React from "react";
import styles from "../styles/App.module.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
