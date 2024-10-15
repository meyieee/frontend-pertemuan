// Asynschronous JS

// synchronous -> single thread
console.log("Proses 1");
console.log("Proses 2");
console.log("Memakan waktu yang lama");
console.log("Proses 3");

// Asynchronous -> multi thread -> non blocking

//1.  Paralel -> berjalan bersamaan
// setTimeout(() => {
//   console.log("Proses 1");
// }, 5000);
// console.log("Proses 2");
// setTimeout(() => {
//   console.log("Proses 3");
// }, 3000);
// console.log("Proses 4");

// Concurenccy -> berjalan berurutan sambil menunggu. Lebih cocok untuk konsep asynschronous
// setTimeout(() => {
//   console.log("Proses 1");

//   setTimeout(() => {
//     console.log("Proses 2");

//     setTimeout(() => {
//       console.log("Proses 3");

//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

// Promise
// Buat promise sederhana
// let condition = false;
// const newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Berhasil");
//   } else {
//     reject("Gagal");
//   }
// });

// Pakai Promise
// 1. then - catch
// newPromise
//   .then((result) => result)
//   .then((result2) => console.log(result2))
//   .catch((error) => console.log(error));

// // 2. async - await
// // harus dibuat di dalam fungsi
// const consumePromise = async () => {
//   try {
//     let result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// consumePromise();

//1. Pakai promise yang sudah ada

//1. fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// (async () => {
//   let result = await fetch("https://jsonplaceholder.typicode.com/users");
//   let json = await result.json();
//   json.forEach(({ name }) => console.log(name));
// })();

//2. axios
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((result) => console.log(result.data));

(async () => {
  let result = await axios.get("https://jsonplaceholder.typicode.com/users");
  result.data.forEach(({ name }) => {
    console.log(name);
  });
})();
