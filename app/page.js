import Image from "next/image";
import styles from "./page.module.css";
import PalindromeChecker from "./palindromeChecker.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h2>
          Is it a Palindrome? <span>-&gt;</span>
        </h2>
        <div className={styles.description}>
          Enter in text to check for a palindrome:
        </div>
      </div>
      <div className={styles.description}>
        <p className={styles.card}>
          A <i>palindrome</i> is a word or sentence that's spelled the same way
          both forward and backward, ignoring punctuation, case, and spacing.
        </p>
      </div>
      <PalindromeChecker />
      <footer className={styles.footer}>
        <a
          href="https://www.github.com/celes-sb"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Made by Celeste S. Bareiro
        </a>
      </footer>
    </main>
  );
}