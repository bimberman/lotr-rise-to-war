import React, { useEffect, useState } from "react";
import { connect, batch } from "react-redux";
import styles from "../styles/Simulator.module.css";

function Simulator() {
  return <div>Simulator</div>;
}

function mapStateToProps(state) {
  const { navigation } = state;
  return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Simulator);
