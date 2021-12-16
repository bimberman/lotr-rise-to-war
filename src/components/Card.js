import React from "react";
import { connect, batch } from "react-redux";
import styles from "../styles/Card.module.css";
import { setActiveFaction } from "../actions/data";

function Card(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.faction.name}</div>
      <div className={styles.flagWrapper}>
        <img src={props.flag} className={styles.flag} alt="Banner" />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { navigation } = state;
  return {
    currentPage: navigation.currentPage,
  };
}
const mapDispatchToProps = { setActiveFaction };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
