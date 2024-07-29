"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

function PalindromeChecker() {
  return (
    <>
      <div className={styles.description}>
        <input id="text-input"></input>
        <button
          className={styles.button}
          id="check-btn"
          onclick="isPalindrome()"
        >
          Check
        </button>
        <p id="result"></p>
      </div>
    </>
  );
}

export default PalindromeChecker;
