import React, { useEffect, useState } from "react";
import styles from "../styles/Body.module.css";
import { connect, batch } from "react-redux";
import { APP_PAGES } from "../constants/default";
import Factions from "../components/Factions";

function Body(props) {
  const { currentPageIndex } = props;
  const [content, setContent] = useState();
  const pages = [];

  useEffect(() => {
    const Page = APP_PAGES[currentPageIndex].page;
    setContent(<Page />);
  }, [currentPageIndex]);

  return <div className={styles.container}>{content}</div>;
}
function mapStateToProps(state) {
  const { navigation } = state;
  return {
    currentPageIndex: navigation.currentPageIndex,
  };
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
