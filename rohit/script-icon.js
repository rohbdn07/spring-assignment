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

// ----------------------used for footer-bar------------------
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

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("#back2Top").fadeIn();
  } else {
    $("#back2Top").fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
/*Scroll to top when arrow up clicked END*/
