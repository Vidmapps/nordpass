import React, { useContext } from "react";
import PasswordsContext from "../../store/passwords-context";
import Password from "./Password";

const PasswordsList = () => {
  const ctx = useContext(PasswordsContext);

  const passwordComponent = (password) => {
    return (
      <Password
        key={password.value + password.count}
        value={password.value}
        count={password.count}
      ></Password>
    );
  };

  return (
    <tbody>
      {!ctx.isShowAll &&
        ctx.leakedPasswords.slice(0, 0 + 10).map((password) => {
          return passwordComponent(password);
        })}
      {ctx.isShowAll &&
        ctx.leakedPasswords.map((password) => {
          return passwordComponent(password);
        })}
    </tbody>
  );
};

export default PasswordsList;
