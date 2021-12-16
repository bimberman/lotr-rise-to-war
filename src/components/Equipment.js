import React, { useEffect, useState } from "react";
import { connect, batch } from "react-redux";
import styles from "../styles/Equipment.module.css";

function Equipment() {
  return <div>Equipment</div>;
}

function mapStateToProps(state) {
  const { navigation } = state;
  return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);
