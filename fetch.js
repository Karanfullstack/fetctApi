const url = "https://jsonplaceholder.typicode.com/users";

const myObj = {
  name: "karan",
  lastName: "Chauhan",
};

const axios = (method, url, body = null) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

axios("POST", url, myObj)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
