//****************************************************/
// 5. BÖLÜM
//****************************************************/
// Object-oriented Programming (OOP)

// let locaiton = {
//   x: 1,
//   y: 1,
// };

// let circle = {
//   radius: 1,
//   locaiton,
// };

let circle = {
  radius: 1,
  locaiton: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log('draw');
  },
};

console.log(circle);
circle.draw(); // circle objesinin draw metodu
