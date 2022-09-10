let array = [
  { name: "Vlad", gender: "male", age: 18, job: "singer" },
  { name: "Olga", gender: "female", age: 28, job: "dancer" },
  { name: "Vova", gender: "male", age: 19, job: "frontend" },
  { name: "John", gender: "male", age: 27, job: "doctor" },
  { name: "Larisa", gender: "female", age: 24, job: "lashmaster" },
];

// map
let newArr = JSON.parse(JSON.stringify(array)).map(function (person) {
  return person.gender == "male"
    ? (person.name = "Mr." + person.name)
    : (person.name = "Mrs." + person.name);
});

// reduce
let sumAge = array.reduce((sum, current) => {
  return sum + current.age;
}, 0);

// filter
let oldAge = array.filter(function (person) {
  return person.age > 20;
});

// splice
let changeArr = [...array].splice(0, 2);

// find
let job = [...array].find((object) => {
  object.job = "frontend";
  return object;
});

// codeMirror - МАР
var myCodeMirror = CodeMirror(document.querySelector(".map__js"), {
  value: `//Map method
let newArr = array.map(function (person) {
    return person.name;
  });`,
  mode: "Javascript",
  mode: "text/x-groovy",
  theme: "3024-night",
  lineNumbers: false,
});

// НАЧАЛЬНОЕ ЗНАЧЕНИЕ МАССИВА
const JSONarr = JSON.stringify(array, undefined, 2);
document.querySelector(".map__first").innerHTML = JSONarr;

// RESULT MAP
const JSONarrResult = JSON.stringify(newArr, undefined, 2);
document.querySelector(".map__end").innerHTML = JSONarrResult;

// codeMirror - REDUCE
var myCodeMirror = CodeMirror(document.querySelector(".reduce__js"), {
  value: `//Reduce method
  let sumAge = array.reduce((sum, current) => {
    return sum + current.age;
  }, 0);`,
  mode: "Javascript",
  mode: "text/x-groovy",
  theme: "3024-night",
  lineNumbers: false,
});

// НАЧАЛЬНОЕ ЗНАЧЕНИЕ МАССИВА
const JSONreduce = JSON.stringify(array, undefined, 2);
document.querySelector(".reduce__first").innerHTML = JSONreduce;

// RESULT MAP
const JSONreduceResult = JSON.stringify(sumAge, undefined, 2);
document.querySelector(".reduce__end").innerHTML = JSONreduceResult;

// Filter method
var myCodeMirror = CodeMirror(document.querySelector(".filter__js"), {
  value: `//Filter method
  let oldAge = array.filter(function (person) {
    return person.age > 20;
  });`,
  mode: "Javascript",
  mode: "text/x-groovy",
  theme: "3024-night",
  lineNumbers: false,
});

// начальное значение массива
const JSONfilt = JSON.stringify(array, null, 2);
document.querySelector(".filter__first").innerHTML = JSONfilt;

// filter result
const JSONfiltresult = JSON.stringify(oldAge, undefined, 2);
document.querySelector(".filter__end").innerHTML = JSONfiltresult;

// codemirror splice
var myCodeMirror = CodeMirror(document.querySelector(".splice__js"), {
  value: ` //Splice method
  let changeArr = [...array].splice(0, 2);
});`,
  mode: "Javascript",
  mode: "text/x-groovy",
  theme: "3024-night",
  lineNumbers: false,
});

// начальное значение массива
const JSONsplice = JSON.stringify(array, undefined, 2);
document.querySelector(".splice__first").innerHTML = JSONsplice;

// splice result
const JSONspliceResult = JSON.stringify(changeArr, undefined, 2);
document.querySelector(".splice__end").innerHTML = JSONspliceResult;

// Find codemirror
var myCodeMirror = CodeMirror(document.querySelector(".find__js"), {
  value: ` //Find method
  let job = [...array].find((object) => {
    object.job = "frontend";
    return object;
  });
});`,
  mode: "Javascript",
  mode: "text/x-groovy",
  theme: "3024-night",
  lineNumbers: false,
});

// начальное значение массива
const JSONfind = JSON.stringify(array, undefined, 2);
document.querySelector(".find__first").innerHTML = JSONfind;

// find result
const JSONfindResult = JSON.stringify(job, undefined, 2);
document.querySelector(".find__end").innerHTML = JSONfindResult;
