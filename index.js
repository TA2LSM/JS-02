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

// Object Literal
// let circle = {
//   radius: 1,
//   locaiton: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   // Burada tanımlanan "draw" metodu bir başka yerde de kullanılabilir.
//   // circle2 olarak tanımlanan objede de bu kod tekrar edecektir.
//   // Bu istenmeyen bir durumdur. Bu nedenle "constructor" tanımlaması
//   // kullanamak gerekir.
//   draw: function () {
//     console.log('draw');
//   },
// };

//console.log(circle);
//circle.draw(); // circle objesinin draw metodu

//----------------------------------------------------------------------------

// Factory Function (Obje yaratan fonksiyon)
// İsimlendirmede "camelSize" kullanılır.
// function createCircle(location, radius) {
//   // location bir obje olarak parametre girdisi olarak verilecek
//   //anahtar ve parametre aynı ise JS'de tek değer yazılabilir. Aşağıdaki gibi.
//   return {
//     location,
//     radius,
//     isVisible: true,
//     draw() {
//       console.log('Factory draw');
//     },
//   };
// }

// Önce circle boş olarak oluşturulur. createCircle fonksiyonunun
// yerelde oluşturup döndüğü değer (obje) circle'a kopyalanır.
// circle bir obje tipine döner.
// let circle = createCircle({ posX: 1, posY: 1 }, 2);
// console.log(circle);
// circle.draw();

//----------------------------------------------------------------------------

// Constructor Function (Obje yaratan fonksiyon)
// İsimlendirmede "PascalSize" kullanılır.
// function Circle(location, radius) {
//   this.location = location;
//   this.radius = radius;
//   this.draw = function () {
//     console.log('Constructor draw');
//   };

//   //return this; // "new" operatörü bunu otomatik yapıyor.
// }

// // Yukarıdaki tanımlama JS engine tarafından şuna çevriliyor:
// const Circle1 = new Function(
//   'location, radius',
//   `this.location = location;
//    this.radius = radius;
//    this.draw = function () {
//      console.log('Constructor draw');
//    };
//   `,
// );
// Bu şekilde de tanımlama yapılabilir ama kullanılmıyor.
// Bu aslında yukardaki Circle'ın aynısı

// "new" ile boş bir obje oluşturulur.
// ( const circle2 = {}; ya da const circle2 = new Object(); )
// "this" keyword'ü artık o objeyi gösterir. (pointer)
// Sonra o objeye location, radius değişkenleri ile
// draw metodu eklenir. Direkt objeye değişken yazarak.
// Eğer new kullanılmazsa "this" global object (window)'i
// işaret eder. Hata alınır.
// const circle2 = new Circle({ posX: 1, posY: 1 }, 2);
// const circle3 = new Circle1({ posX: 1, posY: 1 }, 2);
// console.log(circle2);
// console.log('circle3: ', circle3);
// circle2.draw();

// Objelere her zaman yeni özellikler eklenebilir
// var olan silinebilir. (Function da dahil)
// delete circle2.draw;
// console.log(circle2);
// circle2.draw = function () {
//   console.log('Constructor draw');
// };
// circle2.draw();

// circle2 const olsa da yuukarıdaki ekleme ve silmeler yapılabiliyor.
// const burada circle2'yi tamamen farklı bir obje olarak değiştirmeyi
// önlüyor.

// Constructor Functions
// console.log(circle.constructor);
// console.log(circle2.constructor);

// Functions are objects
// console.log(Circle.name);
// console.log(Circle.length);
// console.log(Circle.constructor);

// Circle içindeki "this" artık aşağıdaki {} kısmını işaret ediyor
// Circle.call({}, { posX: 1, posY: 1 }, 2);
// Boş bir obje oluşturup referans verirsek circle4'ü oluşturabiliriz.
// const circle4 = {};
// Circle.call(circle4, { posX: 1, posY: 1 }, 2);
// console.log(circle4);

// // Apply metodu dizi olarak parametre girmek için
// const circle5 = {};
// Circle.apply(circle5, [{ posX: 1, posY: 1 }, 2]);
// console.log(circle5);

//----------------------------------------------------------------------------
// let x = 10;
// let y = x; // simple value assign

// x = 20;
// console.log(`x = ${x}, y = ${y}`);

// let m = { value: 20 };
// let n = m; // pointer assignment

// m.value = 30;
// console.log(`m = ${m.value}, n = ${n.value}`);

//----------------------------------------------------------------------------
// let number = 10;
// function increase(number) {
//   ++number;
// }

// increase(number);
// console.log(number);

// // direkt number2 objesi değiştirilir. Dikkat edilmesi gereken bir nokta...
// let number2 = { value: 20 };
// function increase(number2) {
//   ++number2.value;
// }

// increase(number2);
// console.log(number2);

//----------------------------------------------------------------------------
// const circle = {
//   radius: 1,
//   draw() {
//     console.log.apply('draw');
//   },
// };

// Obje kopyalama
// const another = {};
// for (let key in circle) another[key] = circle[key]; //another['radius'] = circle['radius'] şeklinde çalışır.

// yukardaki ifade aşağıdakine denktir.
// const another = Object.assign({}, circle);   // {} ile boş obje geçilebileceği gibi
// { color: 'yellow'} şeklinde ek bir özellik de verilebilir. Var olan bir obje de buraya
// parametre geçilebilir.

// En modern şekilde kopyalama ise şu şekildedir:
// const another = { ...circle };   // spread operator kullanımı

// console.log('Another is', another);

// Dizi kopyalama >> x = [...y]; şeklinde

// for (let key in circle) console.log(key, circle[key]);

// for (let key of circle) console.log(key);
// Error verir. Array ve mapping yapılabilen değişkenlerle kullanılabilir. (for of)
// bunun yerine aşağıdaki gibi yazılabilir.

// Object.keys(circle) string array döner. Bu array Iterable olduğu
// için for-of kullanılabilir.
// for (let key of Object.keys(circle)) console.log(key);
// for (let entry of Object.entries(circle)) console.log(entry);

// if ('radius' in circle) console.log('Yes. Radius in');

//----------------------------------------------------------------------------
// Garbage Collection
// C, C++ gibi dillerde hafıza temizliği yapılması lazım. Hafızada yer alan oluşturulmuş
// değişkenler artık kullanılmayacaksa o bölgenin free edilmesi boşaltılması gerekir.
// yoksa hafıza dolması sonucu işlem yapılamaz hale gelebilir.
// JS engine bunu otomatik oalrak yapıyor. Kullanılmayan değişkenleri kendi siliyor.

//----------------------------------------------------------------------------
// const message = 'This is primitive string';
// String primitive >> message. ile metotlara erişilebilir (typeof >> string)

// const message2 = new String('This is object string');
// String Object >> Burada String, constructor fonksiyonu olduğu
// için başına "new" yazılması gerekiyor. (typeof >> object)

/**
 * message.length                           >> 24
 * message[0]                               >> T
 * message.includes('is pr')                >> true
 * message.startsWith('th')                 >> false (case sensitive)
 * message.endsWith('ing')                  >> true (case sensitive)
 * messageçindexOf('is')                    >> 5
 * message.replace('string', 'string!')     >> 'This is primitive string!' (returns a new string. doesn't change org. )
 * message.toUpperCase, toLowerCase ...
 * message.trim, trimLeft ...
 * message.split(' ')                       >> return an array >> ['This', 'is', 'primitive', 'string']
 */

/**
 * ESCAPE NOTATION
 * \0, \', \", \\, \n, \r, \v, \t ...
 */

// Template Literal
// const message = 'This is my\n' + "'first' message"; // Bu şekilde yazmamak için aşağıdaki gibi yazılır:
// const message = `This is my
// 'first' message`; // backtick kullanılıyor.

// const date = '18.08.2022';
// const name = 'Semih';
// const emailMessage = `Selam ${name}!

// Haber bültenimize katıldığın için teşekkür ederiz.
// ${50 + 23}!

// Saygılarımızla.
// A-Team

// ${date}`;

//----------------------------------------------------------------------------
// Date
// const now = new Date();
// const date1 = new Date('Aug 18 2022 17:15');
// const date2 = new Date(2018, 0, 1, 13, 15); // ay kısmı 0-11 aralığında

// console.log('Now: ', now, '\nDate1: ', date1, '\nDate2: ', date2);
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toISOString()); // server ve web application'larda kullanılan bu format

// date1.setFullYear(2025);
// console.log(date1.toDateString()); // haftanın günü kendiliğinden hesaplanıyor

// //now.get...
// //now.set...

//----------------------------------------------------------------------------
//Excercise 1:
// const address = {
//   street: 'Kitapci Mehmet Suleyman Sk.',
//   city: 'Istanbul',
//   zipCode: '34744',
// };

// function showAddress(adress) {
//   for (let key in address) console.log(key, ':', address[key]);
//   // let kullanmasak da çalışıyor
// }

// showAddress(address);

//----------------------------------------------------------------------------
//Excercise 2:
// Factory Function
// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }

// const address = createAddress('Kitapci Mehmet Suleyman Sk.', 'Istanbul', '34744');

// Constructor Function
// function CreateAddress(street, city, zipCode) {
//   (this.street = street), (this.city = city), (this.zipCode = zipCode);
// }

// const address = new CreateAddress('Kitapci Mehmet Suleyman Sk.', 'Istanbul', '34744');

// console.log(address);

//----------------------------------------------------------------------------
//Excercise 3:
// function CreateAddress(street, city, zipCode) {
//   (this.street = street), (this.city = city), (this.zipCode = zipCode);
// }

// const address1 = new CreateAddress('Kitapci Mehmet Suleyman Sk.', 'Istanbul', '34744');
// const address2 = new CreateAddress('Kitapci Mehmet Suleyman Sk.', 'Istanbul', '34744');
// const address3 = address1;

// // 2 object are equal at the property level or not
// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode
//   );
// }

// // 2 object are same reference or not
// function areSame(address1, address2) {
//   return address1 === address2; // true or false
//   //=== aynı hafıza alanını işaret eden durumları kontrol eder
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address3)); // address1 === address3 (reference based)

//----------------------------------------------------------------------------
//Excercise 4:
// const post = {
//   title: 'a',
//   body: 'Some text...',
//   author: 'TA2LSM',
//   views: 1245564,
//   comments: [
//     {
//       author: 'John',
//       body: 'This is incredible!',
//     },
//     {
//       author: 'Marry',
//       body: `Can't wait to see how it ends`,
//     },
//   ],
//   isLive: true,
// };

// console.log(post);

//----------------------------------------------------------------------------
//Excercise 5:
// Post creater
// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.comments = [];
//   this.isAlive = false;
//   this.views = 0;
// }

// const post = new Post('a', 'Some text...', 'TA2LSM');
// console.log(post);

//----------------------------------------------------------------------------
//Excercise 6:
const priceRanges = [
  { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
  { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
  { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

const restaurants = [{ averagePerPerson: 5 }];
