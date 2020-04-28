

// 父元素
let navBurger = document.getElementById('navbar-burger');
let navBar = document.querySelector(".navbar-menu");
console.log(navBurger)
// 子元素
// var child = document.getElementById('child');

// 透過 addEventListener 指定事件的綁定
// 第三個參數 true / false 分別代表捕獲/ 冒泡 機制

navBurger.addEventListener('click', function () {
  navBar.classList.toggle("is-active");
  console.log(navBar)
}, true);
// document.getElementById("myDIV").addEventListener("mousemove", myFunction);



// document.getElementById("myBtn").addEventListener("click", function(){
//   document.getElementById("demo").innerHTML = "Hello World";
// });
// parent.addEventListener('click', function () {
//   console.log('Parent Bubbling');
// }, false);


// child.addEventListener('click', function () {
//   console.log('Child Capturing');
// }, true);

// child.addEventListener('click', function () {
//   console.log('Child Bubbling');
// }, false);