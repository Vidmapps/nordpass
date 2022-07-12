import Logo from "../../assets/Logo.svg";
import Burger from "../../assets/Burger.svg";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <img className={`${styles.logo} pointer`} src={Logo} alt="Logo" />
      <ul className={styles.nav}>
        <li className={`${styles.navItem} pointer`}>Features</li>
        <li className={`${styles.navItem} pointer`}>Pricing</li>
        <li className={`${styles.navItem} pointer`}>Apps</li>
        <li className={`${styles.navItem} pointer`}>Blog</li>
        <li className={`${styles.navItem} pointer`}>Help</li>
        <li className={`${styles.navItem} primaryColor pointer`}>My Account</li>
        <li className={`${styles.navItem} btn primaryColorBackground pointer`}>
          <a
            href="https://panel.nordpass.com/login"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div>Open Vault</div>
          </a>
        </li>
      </ul>
      <div className={styles.burger}>
        <img src={Burger} alt="Burger menu" />
      </div>
    </div>
  );
}
