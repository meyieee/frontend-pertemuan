// Berikut adalah penjelasan setiap baris kode yang Anda berikan dalam bahasa Indonesia:

// ### 1. Menggunakan `for-loop` untuk Mengiterasi Array

// ```javascript
// let people = ["Greg", "Mary", "Devon", "James"];
// // 1. Menggunakan for-loop untuk mengiterasi array ini dan menampilkan semua nama di konsol.
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }
// ```

// - **Penjelasan**:
//   - `let people = ["Greg", "Mary", "Devon", "James"];`: Mendefinisikan array `people` dengan elemen-elemen "Greg", "Mary", "Devon", dan "James".
//   - `for (let i = 0; i < people.length; i++) { ... }`: Menggunakan `for-loop` untuk mengiterasi semua elemen di dalam array `people`.
//   - `console.log(people[i]);`: Menampilkan setiap elemen di konsol.

// ### 2. Menggunakan `forEach()` untuk Mengiterasi Array

// ```javascript
// // Menggunakan forEach() untuk mengiterasi array ini dan menampilkan semua nama di konsol.
// people.forEach(function (person) {
//   console.log(person);
// });
// ```

// - **Penjelasan**:
//   - `people.forEach(function (person) { ... });`: Menggunakan metode `forEach()` untuk mengiterasi array `people`. Metode ini mengambil fungsi callback yang dijalankan untuk setiap elemen.
//   - `console.log(person);`: Menampilkan setiap elemen (yang disimpan dalam variabel `person`) di konsol.

// ### 3. Menghapus Elemen "Greg" dari Array

// ```javascript
// // 3. Perintah untuk menghapus "Greg" dari array
// people.shift();
// console.log(people);
// ```

// - **Penjelasan**:
//   - `people.shift();`: Menggunakan metode `shift()` untuk menghapus elemen pertama dari array `people`, yaitu "Greg".
//   - `console.log(people);`: Menampilkan array yang sudah diperbarui tanpa "Greg".

// ### 4. Menghapus Elemen "James" dari Array

// ```javascript
// // 4. Perintah untuk menghapus "James" dari array.
// people.pop();
// console.log(people);
// ```

// - **Penjelasan**:
//   - `people.pop();`: Menggunakan metode `pop()` untuk menghapus elemen terakhir dari array `people`, yaitu "James".
//   - `console.log(people);`: Menampilkan array yang sudah diperbarui tanpa "James".

// ### 5. Menambahkan "Matt" ke Depan Array

// ```javascript
// // 5. Perintah untuk menambahkan "Matt" ke depan array.
// people.unshift("Matt");
// console.log(people);
// ```

// - **Penjelasan**:
//   - `people.unshift("Matt");`: Menggunakan metode `unshift()` untuk menambahkan elemen "Matt" ke depan array `people`.
//   - `console.log(people);`: Menampilkan array yang sudah diperbarui dengan "Matt" di awal.

// ### 6. Menambahkan Nama Anda ke Akhir Array

// ```javascript
// // 6. Perintah untuk menambahkan nama Anda ke akhir array.
// people.push("Meilyan");
// console.log(people);
// ```

// - **Penjelasan**:
//   - `people.push("Meilyan");`: Menggunakan metode `push()` untuk menambahkan nama "Meilyan" ke akhir array `people`.
//   - `console.log(people);`: Menampilkan array yang sudah diperbarui dengan nama "Meilyan" di akhir.

// ### 7. Menggunakan `for-loop` untuk Menghentikan Setelah "Mary"

// ```javascript
// // 7. Menggunakan for-loop untuk mengiterasi array ini dan setelah menampilkan "Mary", keluar dari loop.
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
//   if (people[i] === "Mary") {
//     break;
//   }
// }
// ```

// - **Penjelasan**:
//   - `for (let i = 0; i < people.length; i++) { ... }`: Menggunakan `for-loop` untuk mengiterasi semua elemen di dalam array `people`.
//   - `console.log(people[i]);`: Menampilkan setiap elemen di konsol.
//   - `if (people[i] === "Mary") { break; }`: Jika elemen saat ini adalah "Mary", perintah `break` akan menghentikan loop.

// ### 8. Membuat Salinan Array Tanpa "Mary" dan "Matt"

// ```javascript
// // 8. Perintah untuk membuat salinan array menggunakan slice. Salinan ini TIDAK termasuk "Mary" atau "Matt".
// let copy = people.slice(2);
// console.log(copy);
// ```

// - **Penjelasan**:
//   - `let copy = people.slice(2);`: Menggunakan metode `slice()` untuk membuat salinan array `people` mulai dari indeks ke-2. Ini menghilangkan "Matt" (indeks 0) dan "Mary" (indeks 1).
//   - `console.log(copy);`: Menampilkan salinan array baru yang tidak termasuk "Matt" atau "Mary".

// ### 9. Menggunakan `splice()` untuk Mengganti Elemen

// ```javascript
// // 9. Mendefinisikan ulang variabel people dengan nilai yang Anda mulai dengan. Menggunakan perintah splice untuk menghapus "Devon" dari array dan menambahkan "Elizabeth" dan "Artie".
// people.splice(2, 1, "Elizabeth", "Artie");
// console.log(people);
// ```

// - **Penjelasan**:
//   - `people.splice(2, 1, "Elizabeth", "Artie");`: Menggunakan metode `splice()` untuk memulai dari indeks 2, menghapus 1 elemen (yaitu "Devon"), dan menambahkan "Elizabeth" dan "Artie" di posisi yang sama.
//   - `console.log(people);`: Menampilkan array yang sudah diperbarui: `["Matt", "Mary", "Elizabeth", "Artie", "Meilyan"]`.

// ### 10. Menambahkan "Bob" Menggunakan `concat()`

// ```javascript
// // 10. Membuat variabel baru dengan nama withBob dan mengisinya dengan array people yang dikonkat dengan string "Bob".
// let withBob = people.concat("Bob");
// console.log(withBob);
// ```

// - **Penjelasan**:
//   - `let withBob = people.concat("Bob");`: Menggunakan metode `concat()` untuk menggabungkan array `people` dengan string "Bob", menghasilkan array baru.
//   - `console.log(withBob);`: Menampilkan array baru yang berisi semua elemen `people` ditambah "Bob".

// ### 11. Menambahkan "Go" ke Akhir Array `languages`

// ```javascript
// let programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
// };
// // 1. Perintah untuk menambahkan bahasa "Go" ke akhir array languages.
// programming.languages.push("Go");
// console.log(programming.languages);
// ```

// - **Penjelasan**:
//   - `programming.languages.push("Go");`: Menggunakan metode `push()` untuk menambahkan "Go" ke akhir array `languages`.
//   - `console.log(programming.languages);`: Menampilkan array `languages` yang sudah diperbarui.

// ### 12. Menggunakan Notasi Bracket untuk Mengubah `difficulty`

// ```javascript
// // 2. Menggunakan notasi bracket untuk mengubah difficulty menjadi nilai 7.
// programming["difficulty"] = 7;
// console.log(programming.difficulty);
// ```

// - **Penjelasan**:
//   - `programming["difficulty"] = 7;`: Menggunakan notasi bracket (`[]`) untuk mengakses properti `difficulty` dari objek `programming` dan mengubah nilainya menjadi 7.
//   - `console.log(programming.difficulty);`: Menampilkan nilai properti `difficulty` yang sudah diperbarui.

// ### 13. Menghapus `jokes` Menggunakan `delete`

// ```javascript
// // 3. Menggunakan keyword delete untuk menghapus key jokes dari objek programming.
// delete programming.jokes;
// console.log(programming);
// ```

// - **Penjelasan**:
//   - `delete programming.jokes;`: Menggunakan keyword `delete` untuk menghapus properti `jokes` dari objek `programming`.
//   - `console.log(programming);`: Menampilkan objek `programming` tanpa properti `jokes`.

// ### 14. Menambahkan Properti Baru `isFun`

// ```javascript
// // 4. Menggunakan notasi titik untuk menambahkan key baru bernama isFun dengan nilai true ke objek programming.
// programming.isFun = true;
// console.log(programming);
// ```

// - **Penjelasan**:
//   - `programming.isFun = true;`: Menggunakan notasi titik (`.`) untuk menambahkan properti baru `isFun` dengan nilai `true` ke objek `programming`.
//   - `console.log(programming);`: Menampilkan objek `programming` yang sudah diperbarui dengan properti baru `isFun`.

// ### 15. Menggunakan `map()` untuk Mengiterasi `languages`

// ```javascript
// // 5. Menggunakan map() untuk mengiterasi array languages dan memperbarui setiap elemen menjadi "0 - JavaScript, 1 - Python, …", di mana 0 mewakili indeks array, dan menampilkan output di konsol.
// programming.languages
