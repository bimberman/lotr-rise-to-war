import React, { useEffect, useState } from "react";
import { connect, batch } from "react-redux";
import styles from "../styles/Factions.module.css";
import Card from "./Card";
import factionsData from "../data/factions.json";
import lothlorienFlag from "../assets/lothlorien_flag.png";
import eraborFlag from "../assets/erabor_flag.png";

function Factions() {
  const [factionsEle, setFactionsEle] = useState([]);

  useEffect(() => {
    const flags = {
      loth: lothlorienFlag,
      erabor: eraborFlag,
    };
    setFactionsEle(
      factionsData.map((faction, index) => {
        return (
          <Card key={index} flag={flags[faction.flag]} faction={faction} />
        );
      })
    );
  }, []);

  useEffect(() => {
    console.info(factionsEle);
  }, [factionsEle]);
  return <div className={styles.container}>{factionsEle}</div>;
}

function mapStateToProps(state) {
  const { navigation } = state;
  return {
    currentPage: navigation.currentPage,
  };
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Factions);
