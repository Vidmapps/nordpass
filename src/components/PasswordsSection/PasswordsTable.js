import React, { useContext } from "react";
import styles from "./PasswordsSection.module.css";
import PasswordsList from "./PasswordsList";
import PasswordsContext from "../../store/passwords-context";

const PasswordsTable = () => {
  const ctx = useContext(PasswordsContext);

  return (
    <div>
      <table className="widthFillAvailable">
        <thead>
          <tr>
            <th className={`textAlignStart ${styles.borderBottom}`}>
              Password
            </th>
            <th className={`textAlignEnd ${styles.borderBottom}`}>
              <select
                className="dropdown"
                name="sort"
                id="sort"
                value={ctx.sortOption}
                onChange={(event) => ctx.sortBy(event.target.value)}
              >
                <option disabled className="textAlignStart" value="sort">
                  Sort
                </option>
                <option className="textAlignStart" value="count">
                  Count
                </option>
                <option className="textAlignStart" value="value">
                  ABC
                </option>
              </select>
            </th>
          </tr>
        </thead>
        <PasswordsList />
      </table>
    </div>
  );
};

export default PasswordsTable;
