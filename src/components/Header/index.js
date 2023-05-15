import React from "react";
import LogoComponent from "../Logo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header>
        <LogoComponent />
        <h1> Landrover </h1>
        <div className={styles.navContainer}>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};


