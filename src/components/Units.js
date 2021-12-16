import React, { useEffect, useState } from "react";
import { connect, batch } from "react-redux";
import styles from "../styles/Units.module.css";

function Units() {
  return <div>Units</div>;
}

function mapStateToProps(state) {
  const { navigation } = state;
  return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Units);
