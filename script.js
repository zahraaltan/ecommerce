    // Mobile Navigation Animation
    function section1() {
        var tl = gsap.timeline();
        tl.to(".nav", {
          x: -425,
          duration: 0.9,
        });
        tl.from(".nav .options", {
          x: 100,
          stagger: 0.3,
          opacity: 0,
          duration: 0.7,
        });
        tl.pause();
        var manu = document.querySelector(".nav1 i");
        var cross = document.querySelector(".nav i");
        manu.addEventListener("click", function () {
          tl.play();
        });
        cross.addEventListener("click", function () {
          tl.reverse();
        });
      }
      section1();
  
      // Hero Section Animation
      gsap.from(".line", {
        y: 15,
        opacity: 0,
        duration: 0.5,
        delay: 1,
      });
  
      // GSAP ScrollTrigger Animations for Section 2
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.from(".s2 .heading1", {
        scrollTrigger: {
          trigger: ".s2",
          start: "top 80%",
        },
        y: -50,
        opacity: 0,
        duration: 1,
      });
  
      gsap.from(".s2 .ops", {
    scrollTrigger: {
      trigger: ".s2",
      start: "top 80%",
    },
    y: 35,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger: 0.3,
    clearProps: "transform,opacity"  // Clears the inline styles after the animation
  });
  
  
      gsap.from(".s2 .clothes", {
        scrollTrigger: {
          trigger: ".s2",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        stagger: 0.3,
      });
  
      // Footer Animation on Scroll
      gsap.to(".footer", {
        scrollTrigger: {
          trigger: ".footer",
          start: "top 90%",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });