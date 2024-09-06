let container = document.querySelector(".container");
let crsr = document.querySelector(".crsr");
let video = document.querySelector(".container video");
let img = document.querySelector(".container img");
let play_btn = document.querySelector(".paly_button");
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
function imageAnimation() {
  Shery.imageEffect(".image_div", {
    style: 6,
    config: {
      noiseDetail: { value: 9.92, range: [0, 100] },
      distortionAmount: { value: 10, range: [0, 10] },
      scale: { value: 35.88, range: [0, 100] },
      speed: { value: 0.16, range: [0, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.6979438827672384 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: false },
      onMouse: { value: 0 },
      noise_speed: { value: 0.99, range: [0, 10] },
      metaball: { value: 0.56, range: [0, 2] },
      discard_threshold: { value: 0.6, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 9.16, range: [0, 100] },
    },
    gooey: true,
  });
  Shery.imageEffect(".max_img_div", {
    style: 6,
    config: {
      noiseDetail: { value: 7.44, range: [0, 100] },
      distortionAmount: { value: 2.98, range: [0, 10] },
      scale: { value: 36.36, range: [0, 100] },
      speed: { value: 0.79, range: [0, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.8375136314067612 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1.31, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.4, range: [0, 2] },
      discard_threshold: { value: 0.86, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.44, range: [0, 2] },
      noise_scale: { value: 12.98, range: [0, 100] },
    },
    gooey: true,
    // debug:true
  });
}

function paly_btn_anime() {
  container.addEventListener("mouseenter", function () {
    crsr.style.display = "none";
    container.addEventListener("mousemove", function (dets) {
      gsap.to(".paly_button", {
        top: dets.y - 295,
        left: dets.x - 520,
      });
    });
  });
  container.addEventListener("mouseleave", function () {
    crsr.style.display = "block";
    gsap.to(".paly_button", {
      top: "-15%",
      left: "85%",
    });
  });
  var flag = 0;

  container.addEventListener("click", function () {
    if (flag === 0) {
      video.play();
      img.style.display = "none";
      gsap.to(".paly_button", {
        scale: 0.5,
      });
      play_btn.innerHTML = '<i class="ri-pause-line"></i>';
      flag = 1;
    } else {
      video.pause();
      img.style.display = "initial";
      gsap.to(".paly_button", {
        scale: 1,
      });
      play_btn.innerHTML = '<i class="ri-play-large-fill"></i>';
      flag = 0;
    }
  });
}
function flagAnimation(){
  document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
      x:dets.x,
      y:dets.y,
      duration: 1
    })
    document.querySelectorAll(".hero_3 h1").forEach(h1 => {
      h1.addEventListener("mouseenter",function(){
        gsap.to("#flag",{
          opacity:1,
        })
      })
      h1.addEventListener("mouseleave",function(){
        gsap.to("#flag",{
          opacity:0
        })
      })
      
    });
  })
  
}
const footerHead = document.querySelector(".footer_head");
let footerIsAnimating = false;
function footerTextAnimation() {
  footerHead.addEventListener("mouseenter", () => {
    if (!footerIsAnimating) {
      footerIsAnimating = true;
      gsap.fromTo(
        ".footer h1",
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.5,
          duration: 0.5,
          onStart: function () {
            $(".footer h1").css({
              "font-family": "Silk Serif",
            });
            $(".footer h1").textillate({ in: { effect: "fadeIn" } });
            $(".footer h1").textillate("in");
          },
          onComplete: function () {
            footerIsAnimating = false; // Reset flag when animation completes
          }
        }
      );
    }
  });

  footerHead.addEventListener("mouseleave", () => {
    if (!footerIsAnimating) {
      footerIsAnimating = true;
      gsap.fromTo(
        ".footer h1",
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.5,
          duration: 1,
          onStart: function () {
            $(".footer h1").css({
              "font-family": "Plain",
            });
            $(".footer h1").textillate({ in: { effect: "fadeIn" } });
            $(".footer h1").textillate("in");
          },
          onComplete: function () {
            footerIsAnimating = false; // Reset flag when animation completes
          }
        }
      );
    }
  });
}

locomotive();
loadingAnimation();
customCrsr();
imageAnimation();
paly_btn_anime();
flagAnimation();
footerTextAnimation();
