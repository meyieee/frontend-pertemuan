//1.
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}

async function messages() {
  let msg = await helloWorld();
  console.log(msg);
}

messages();

//2.
function ambilDataUser() {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((users) =>
      console.log(
        users.data.map((user) => `${user.first_name} ${user.last_name}`)
      )
    );
}

ambilDataUser();

//3.
async function ambilDataUser() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    console.log(
      users.data.map((user) => `${user.first_name} ${user.last_name}`)
    );
  } catch (error) {
    console.error(error);
  }
}

ambilDataUser();

//4.
import axios from "axios";

async function ambilDataUser() {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    console.log(
      response.data.data.map((user) => `${user.first_name} ${user.last_name}`)
    );
  } catch (error) {
    console.error(error);
  }
}

ambilDataUser();
