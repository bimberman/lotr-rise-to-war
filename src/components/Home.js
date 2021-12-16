import React, { useEffect, useState } from "react";
import { connect, batch } from "react-redux";
import styles from "../styles/Home.module.css";

function Home() {
  return <div>Home</div>;
}

function mapStateToProps(state) {
  const { navigation } = state;
  return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
