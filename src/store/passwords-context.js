import { createContext, useState, useEffect } from "react";
import { getPasswords } from "../getPasswords";

const PasswordsContext = createContext({
  leakedPasswords: getPasswords,
  isShowAll: false,
  sortOption: "sort",
  isLoading: false,
  showAll: () => {},
  sortBy: (option) => {},
});

export const PasswordsContextProvider = (props) => {
  const [leakedPasswords, setLeakedPasswords] = useState([]);
  const [isShowAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("sort");

  useEffect(() => {
    const getPasswords = async () => {
      const url = "https://playground.nordsec.com/v2/worst-psw.json";
      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setLeakedPasswords(data.passwords);
        })
        .catch((e) => {
          alert("Server error", e);
        });
      setIsLoading(false);
    };
    getPasswords();
  }, []);

  const sortByHandler = (option) => {
    setSortOption(option);

    const sorted = () => {
      if (option === "count") {
        return leakedPasswords.sort((a, b) => a[option] - b[option]);
      }

      if (option === "value") {
        return leakedPasswords.sort(
          (a, b) =>
            (typeof b[option] === "number") - (typeof a[option] === "number") ||
            (a[option] > b[option] ? 1 : -1)
        );
      }
      console.log();
    };

    setLeakedPasswords(sorted());
  };

  const showAllHandler = () => {
    let show = isShowAll;
    show = !show;
    setShowAll(show);
  };

  const context = {
    leakedPasswords: leakedPasswords,
    isShowAll: isShowAll,
    sortOption: sortOption,
    isLoading: isLoading,
    showAll: showAllHandler,
    sortBy: sortByHandler,
  };

  return (
    <PasswordsContext.Provider value={context}>
      {props.children}
    </PasswordsContext.Provider>
  );
};

export default PasswordsContext;
