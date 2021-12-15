import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import { APP_HEADERS } from "../config/const";
import banner from "../assets/lotr_rtw_banner.jpg";
import logo from "../assets/logo.png";

function Header() {
  const [appHeaders, setAppHeaders] = useState([]);

  useEffect(() => {
    setAppHeaders(
      APP_HEADERS.map((appHeader) => {
        return <div className={styles.link}>{appHeader.label}</div>;
      })
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImages}>
        <div className={styles.bannerWrapper}>
          <img src={banner} className={styles.bannerImage} alt="Banner" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={logo} className={styles.logoImage} alt="Logo" />
        </div>
      </div>
      <div className={styles.linksContainer}>{appHeaders}</div>
    </div>
  );
}

export default Header;
