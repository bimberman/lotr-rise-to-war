import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import { APP_PAGES } from "../constants/default";
import { connect, batch } from "react-redux";
import banner from "../assets/lotr_rtw_banner.jpg";
import logo from "../assets/logo.png";
import { addNewPage } from "../actions/navigation";

function Header(props) {
  const [appHeaders, setAppHeaders] = useState([]);

  useEffect(() => {
    setAppHeaders(
      APP_PAGES.map((appPages) => {
        const onClick = (event) => {
          event.preventDefault();
          props.addNewPage(appPages.value);
        };
        return (
          <div className={styles.link} onClick={onClick} key={appPages.value}>
            {appPages.label}
          </div>
        );
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
function mapStateToProps(state) {
  const {} = state;
  return {};
}
const mapDispatchToProps = { addNewPage };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
