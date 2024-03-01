import React from "react";
import RightNav from "../rightNavbar/RightNav";
import styles from "./dashboard.module.css";
import Card from "../card/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <RightNav />
        <div className={styles.dashboardWrapper}>
          <TopNav />

          <AddLearning />

          <Content />
        </div>
      </div>
    </>
  );
};

function TopNav() {
  return (
    <div className={styles.topNavWrapper}>
      <section className={styles.topNavLeft}>
        <div class="input-group mb-3">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            <i class="bi bi-search"></i>
          </button>
          <input
            type="text"
            class="form-control"
            placeholder="Search "
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
      </section>
      <section className={styles.topNavRight}>
        <button>+</button>
        <i class="bi bi-bell-fill"></i>
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt=""
          srcset=""
        />
      </section>
    </div>
  );
}

function AddLearning() {
  return (
    <div className={styles.addLearningWrapper}>
      <h1>My Learnings</h1>
      <section className={styles.addLearningRight}>
        <i class="bi bi-search"></i>
        <button>
          <span className={styles.addLearningButton}>Add Learning</span> +
        </button>
      </section>
    </div>
  );
}

function Content() {
  const arr = [1, 2, 3, 4];
  return (
    <div className={styles.contentWrapper}>
      <section className={styles.contentLeft}>
        {arr.map((item, indx) => {
          return <Card key={indx} />;
        })}
      </section>
      <section className={styles.contentRight}>
        <div className={styles.contentRightWrapper}>
          <section className={styles.contentRightProgressWrapper}>
            <div className={styles.circularProgressBar}>
              <CircularProgressbar value={71} text="71%" />
            </div>
            <div className={styles.progressContent}>
              <h2>Monthly earning goal</h2>
              <p>Set target to acomplisht the learning.</p>
              <span>
                <i class="bi bi-clock"></i> 23/60 Hours
              </span>
            </div>
            <i class="bi bi-three-dots-vertical"></i>
          </section>
          <section className={styles.pipelineWrapper}>Pipe line</section>
          <section>
            <hr />
            Completed <i class="bi bi-patch-check-fill"></i>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
