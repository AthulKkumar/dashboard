import React from "react";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      <img src="/vedio.jpeg" alt="Learning" srcset="" />
      <section className={styles.cardContentWrapper}>
        <h2>Learn React</h2>
        <section className={styles.progressWrapper}>
          <h3>Progress</h3>
          <div
            className="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar w-75"></div>75%
          </div>
        </section>
        <div className={styles.enrolledWrapper}>
          <h3>
            Enrolled on Udemy <img src="/udemy.svg" alt="" srcset="" />
          </h3>
          <button>
            Continue Learning<i class="bi bi-arrow-up-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Card;
