// $(document).ready(function () {
//     $('#share').click(function () {
//         $('#share').toggleClass('rotate');
//         $('.facebook').toggleClass('rotate-fb');
//         $('.twitter').toggleClass('rotate-tw');
//         $('.linkedin').toggleClass('rotate-li');
//         $('.codepen').toggleClass('rotate-cp');

//     });

// });

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "-200px";
//   } else {
//     document.getElementById("navbar").style.top = "0px";
//   }
//   prevScrollpos = currentScrollPos;
// };

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos < prevScrollpos) {
    document.getElementById("flex").style.top = "-500px";
  } else {
    document.getElementById("flex").style.top = "950px";
  }
  prevScrollpos = currentScrollPos;
};
