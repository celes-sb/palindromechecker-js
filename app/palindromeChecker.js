"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

function PalindromeChecker() {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  const isPalindrome = () => {
    const cleanedInput = textInput.toLowerCase().replace(/[^a-z0-9]/gi, "");
    if (cleanedInput === "") {
      setResult("Please input a value");
      return;
    }
    const isPalindrome =
      cleanedInput === cleanedInput.split("").reverse().join("");
    setResult(
      `${textInput} is ${isPalindrome ? "a palindrome" : "not a palindrome"}`
    );
  };

  return (
    <>
      <input
        id="text-input"
        className={styles.description}
        placeholder="Write a word, phrase, number, etc..."
        value={textInput}
        onChange={handleChange}
      />
      <p id="setResult" className={styles.result}>
        {result}
      </p>
      <button className={styles.button} id="check-btn" onClick={isPalindrome}>
        Check
      </button>
    </>
  );
}

export default PalindromeChecker;
