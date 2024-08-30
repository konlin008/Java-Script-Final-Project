function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
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

function customCrsr() {
  document.addEventListener("mousemove", function (dets) {
    let scrollY = window.scrollY;
    gsap.to(".crsr", {
      top: dets.y + scrollY,
      left: dets.x,
      duration: 0.5,
    });
  });
  Shery.makeMagnet(".nav_part_2 h4", {});
}
locomotive();
loadingAnimation();
customCrsr();

// function cursorAnimation() {
//   Shery.mouseFollower({
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 0.5,
//   });
// }
// cursorAnimation()
