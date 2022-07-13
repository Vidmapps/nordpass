import { FAQinfo } from "../../faqData";
import FAQCard from "./FAQCard.js";
import styles from "./FAQ.module.scss";

const FAQ = () => {
  return (
    <div className={styles.faq}>
      <h1 className="centerText">Frequently asked questions</h1>
      <div className="centerContent">
        <ul>
          {FAQinfo.map((FAQitem) => {
            return (
              <FAQCard
                question={FAQitem.question}
                answer={FAQitem.answer}
                key={FAQitem.question}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
