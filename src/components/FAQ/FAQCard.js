import { useState } from "react";
import ArrowUp from "../../assets/ArrowUp.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import styles from "./FAQ.module.scss";

const FAQCard = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className={styles.faqCard}>
      <div>
        <div
          className={`${styles.faqCardHeader} pointer`}
          onClick={() => setIsActive(!isActive)}
        >
          <strong className={styles.faqCardQuestion}>{props.question}</strong>
          {isActive ? (
            <img className="pointer" src={ArrowUp} alt="Show answer" />
          ) : (
            <img className="pointer" src={ArrowDown} alt="Hide answer" />
          )}
        </div>
        {isActive && <div className={styles.faqCardAnswer}>{props.answer}</div>}
      </div>
    </li>
  );
};

export default FAQCard;
