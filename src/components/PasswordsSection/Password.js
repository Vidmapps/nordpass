import styles from "./PasswordsSection.module.scss";

const Password = (props) => {
  return (
    <tr className={styles.password}>
      <td className={`${styles.borderBottom} ${styles.tdRight}`}>
        {props.value}
      </td>
      <td className={`${styles.borderBottom} ${styles.tdRight}`}>
        {props.count}
      </td>
    </tr>
  );
};

export default Password;
