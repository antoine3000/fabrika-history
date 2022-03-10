function animateFrom(elem, speed, direction) {
  direction = direction || 1;
  if (window.matchMedia("(min-width: 600px)").matches) {
    speed = speed;
  } else {
    speed = speed/3;
  }
  var x = 0,
  y = direction * speed/2;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -speed/2;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = speed/2;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: speed/40, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

function scroll(elem, speed) {
  ScrollTrigger.create({
    trigger: elem,
    onEnter: function() { animateFrom(elem, speed) }, 
    onEnterBack: function() { animateFrom(elem, speed, -1) },
    onLeave: function() { hide(elem, speed) } // assure that the element is hidden when scrolled into view
  });
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".anim-1").forEach(function(elem) {
    hide(elem);
    scroll(elem, 100);
  });

  gsap.utils.toArray(".anim-2").forEach(function(elem) {
    hide(elem);
    scroll(elem, 300);
  });

  gsap.utils.toArray(".anim-3").forEach(function(elem) {
    hide(elem);
    scroll(elem, 500);
  });
});
