export const getPasswords = async () => {
  const url = "https://playground.nordsec.com/v2/worst-psw.json";
  await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.passwords;
    })
    .catch((e) => {
      alert("Server error", e);
    });
};
