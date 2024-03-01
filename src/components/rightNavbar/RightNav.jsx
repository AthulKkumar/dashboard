import React from "react";
import styles from "./rightnav.module.css";

const RightNav = () => {
  const topData = [
    { name: "DashBoard", icon: "bi bi-house-fill " },
    { name: "Learnings", icon: "bi bi-activity" },
    { name: "Tools", icon: "bi bi-tools" },
    { name: "Profile", icon: "bi bi-person-fill" },
  ];
  const bottomData = [
    { name: "Help", icon: "bi bi-info-circle" },
    { name: "Settings", icon: "bi bi-gear" },
  ];
  return (
    <nav className={styles.navWrapper}>
      <section className={styles.topSection}>
        <ul className={styles.topSectionContentWrapper}>
          {topData.map((item, index) => (
            <li key={index}>
              <i class={item.icon}></i>

              <a href="/">{item.name}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.bottomSection}>
        <div className={styles.offerWrapper}>
          <section className={styles.offer}>
            <i class="bi bi-gift"></i>
            <h2>Free Gifts awaits you</h2>
          </section>
          <a href="http://">Explore More Features</a>
        </div>
        <ul className={styles.bottomSectionContentWrapper}>
          {bottomData.map((item, index) => (
            <li key={index}>
              <i class={item.icon}></i>
              <a href="/">{item.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default RightNav;
