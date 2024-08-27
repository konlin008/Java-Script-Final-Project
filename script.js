function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".txt h1,.txt h2 ", {
    y: 150,
    stagger: 0.25,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
  });
  tl.from(".txt-count", {
    opacity: 0,
    onStart: function () {
      var count = 0;
      var int = setInterval(function () {
        document.querySelector(".txt h5").textContent = count++;
        if (count > 100) {
          clearInterval(int);
        }
      }, 33);
    },
  });
  tl.to("#loader", {
    opacity: 0,
    delay: 3.5,
    duration: 0.5,
  });

  tl.from(".page_1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    ease: "power4",
    duration: 0.5,
  });
  tl.from(".nav", {
    opacity: 0,
  });
  tl.from(".hero h1, .hero h2", {
    y: 150,
    stagger: 0.25,
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loadingAnimation();
function customCrsr() {
  document.addEventListener("mousemove", function(dets){
    let scrollY = window.scrollY; 
    gsap.to(".crsr", {
        top: dets.y + scrollY,  
        left: dets.x,
        duration: 0.5
    });

});
Shery.makeMagnet(".nav_part_2 h4", {});
}
customCrsr();


// function cursorAnimation() {
//   Shery.mouseFollower({
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 0.5,
//   });
// }
// cursorAnimation()