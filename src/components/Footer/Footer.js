import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <div className="disabledColorText">Engage</div>
        <ul>
          <li className={styles.footerItem}>Privacy Pilicy</li>
          <li className={styles.footerItem}>Terms of Service</li>
        </ul>
      </div>
      <div className={styles.copyright}>Copyright © 2020 NordPass.com </div>
    </div>
  );
};

export default Footer;
