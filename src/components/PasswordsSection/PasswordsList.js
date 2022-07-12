import React, { useContext } from "react";
import PasswordsContext from "../../store/passwords-context";
import Password from "./Password";

const PasswordsList = () => {
  const ctx = useContext(PasswordsContext);

  return (
    <tbody>
      {!ctx.isShowAll &&
        ctx.leakedPasswords.slice(0, 0 + 10).map((password) => {
          return (
            <Password
              key={Math.random()}
              value={password.value}
              count={password.count}
            ></Password>
          );
        })}
      {ctx.isShowAll &&
        ctx.leakedPasswords.map((password) => {
          return (
            <Password
              key={Math.random()}
              value={password.value}
              count={password.count}
            ></Password>
          );
        })}
    </tbody>
  );
};

export default PasswordsList;
