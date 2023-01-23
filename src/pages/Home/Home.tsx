import React from "react";
import styles from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.pageTitle}>Home</h1>
      <p className={styles.pageDesc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <br />
      <br />

      <div className={styles.cards}>
        <HomepageCard
          color="#fd90d1b3"
          icon="/icons/Activity.png"
          title="Supported networks / assets"
          value="5 networks, 25 pairs"
        />
        <HomepageCard
          color="#67D558b3"
          icon="/icons/Lock.png"
          title="Total Value Locked"
          value="$ 1.6 Billion"
        />
        <HomepageCard
          color="#78CEF9b3"
          icon="/icons/Chart.png"
          title="Total Transaction Volume (last 24h)"
          value="$ 25 Million"
        />
      </div>
    </div>
  );
};

export default Home;

const HomepageCard = ({
  color,
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
  color: string;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src={icon} className={styles.icon} />
        <div className={styles.details}>
          <h4>{title}</h4>
          <p>{value}</p>
        </div>
      </div>
      <div className={styles.layer}></div>
      <div className={styles.gradientLayer} style={{ background: color }}></div>
    </div>
  );
};
