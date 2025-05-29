var div = document.querySelector("body");
var cursor = document.querySelector(".cursor"); 

div.addEventListener("mousemove", function(para){
  const rect = cursor.getBoundingClientRect();
  gsap.to(".cursor", {
    x: para.x,
    y: para.y,
    duration: 0.6,
    ease: "back.out",
  })
})

// gsap navigation 
var tl = gsap.timeline();

tl.from("nav h1", {
  y: -80,
  duration: 0.5,
  delay: 0.2,
  opacity: 0,
})

tl.from(".nav-li", {
  x: -50,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
})
tl.from(".lang-btn", {
  x: -50,
  duration: 0.5,
  opacity: 0,
})
tl.from(".land-right img ", {
  x: -50,
  duration: 0.5,
  opacity: 0,
})
tl.from(".land-left h1", {
  x: -50,
  duration: 0.5,
  opacity: 0,
})
tl.from("land-left p", {
  x: -50,
  duration: 0.2,
  opacity: 0,
})
tl.from(".land-left button", {
  x: -50,
  duration: 0.2,
  opacity : 0,
})

//scroll trigger
gsap.from(".story-d", {
    duration: 1,
    opacity: 0,
    y: -50,
    scrollTrigger: {
        trigger: ".story-d",
        scroller: "body",
        start: "top 50%",
        end: "top 60%",
        scrub: 2,
    }
})
gsap.from(".upcoming-sec", {
    duration: 0.5,
    opacity: 0,
    y: -50,
    scrollTrigger: {
        trigger: ".upcoming-sec",
        scroller: "body",
        start: "top 50%",
        end: "top 60%",
        scrub: 2,
    }
})


//---------------spite text
const quotes = document.querySelectorAll(".dish-text");

function setupSplits() {
  quotes.forEach((quote) => {
    // Reset if needed
    if (quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = SplitText.create(quote, {
      type: "words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top center",
       // markers: { startColor: "#dfdcff", endColor: "transparent" }
      },
      opacity: 0,
      duration: 0.6,
      ease: "circ.out",
      x: -80,
      stagger: 0.02
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();
// // --------------------

gsap.fromTo(".copy-dish1",
{ rotation: 0 },
    {
        duration: 2,
      rotation: 160,
      scrollTrigger: {
        trigger: ".copy-dish1",
        scroller: "body",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
        //markers: true,
      }
    }
  );

  gsap.fromTo(".copy-dish2",
    { rotation: 0 },
         {
            duration: 2,
          rotation: -160,
          scrollTrigger: {
            trigger: ".copy-dish2",
            scroller: "body",
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
            //markers: true,
        }
    }
);
gsap.fromTo(".copy-dish3",
    { rotation: 0 },
        {
            duration: 2,
          rotation: 160,
          scrollTrigger: {
            trigger: ".copy-dish3",
            scroller: "body",
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
            // markers: true,
          }
        }
      );

      gsap.fromTo(".copy-dish4",
        { rotation: 0 },
             {
                duration: 2,
              rotation: -160,
              scrollTrigger: {
                trigger: ".copy-dish4",
                scroller: "body",
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
                // markers: true,
            }
        }
    );

gsap.to(".frame-div", {
    y: "100%", // slide to the right
    duration: 2,
    ease: "none",
    scrollTrigger: {
      trigger: ".reservation-d",
      start: "top 80%",
      end: "bottom bottom ",
      scrub: true, // smooth animation with scroll
    //   markers: true,
    }
  });