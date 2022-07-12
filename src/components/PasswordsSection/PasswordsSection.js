import React, { useContext } from "react";
import PasswordsContext from "../../store/passwords-context";
import styles from "./PasswordsSection.module.css";
import PasswordsTable from "./PasswordsTable";

const PasswordsSection = () => {
  const ctx = useContext(PasswordsContext);

  return (
    <div className={styles.topLeakedPasswords}>
      <h1 className="centerText">Top Leaked Passwords</h1>
      <div className={styles.passwordsList}>
        <div>
          {ctx.isLoading && <p>Loading...</p>}
          {!ctx.isLoading && <PasswordsTable isShowAll={ctx.isShowAll} />}
          {!ctx.isShowAll && (
            <div className="centerContent">
              <div className="btn primaryColorBackground pointer">
                <div className="centerText" onClick={ctx.showAll}>
                  Show all {ctx.leakedPasswords.length}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PasswordsSection;
