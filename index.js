//****************************************************/
// 6. BÖLÜM
//****************************************************/
// ARRAYS
const numbers = [5, 6];
// numbers = [5, 6]; // const ile tanımlı olduğu için Bu işlem yapılamaz ama içerik değiştirilebilir.

// Add new element to array's end
numbers.push(7, 8);

// Add new element to array's begining
numbers.unshift(1, 2);

// Add new element to array's middle
numbers.splice(2, 0, 3, 4, 'a'); // hangi pozisyondan (2), kaç element sil (0), ne ekle (3, 4, 'a')

console.log(numbers);
