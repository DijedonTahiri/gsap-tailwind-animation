// Toggle mobile menu visibility
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
});

//Gsap Animations
gsap.registerPlugin(ScrollTrigger);


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, { y: -3, duration: 0.15 });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(link, { y: 0, duration: 0.20 });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    menuToggle.addEventListener('click', function() {
        // Toggle icons
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');

        // Reset rotation to 0 degrees before starting the animation
        gsap.set(menuToggle, { rotation: 0 });

        // GSAP animation from 0 to 180 degrees
        gsap.fromTo(menuToggle, { rotation: 0 }, { rotation: 180, duration: 0.5 });
    });
});





gsap.from('.hero', {
    duration: 1.2,
    opacity: 0,
    x: -50,
    ease: 'power3.out',
    onComplete: animateUnderline // Callback function after the animation completes
  });
  
  function animateUnderline() {
    document.querySelector('.underline-target').style.borderColor = 'currentColor';
  }
  

  document.addEventListener("DOMContentLoaded", function() {
    gsap.utils.toArray('.div-hover-effect').forEach((div) => {
      div.addEventListener('mouseenter', () => {
        gsap.to(div, { 
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.07)', 
          scale: 1.02, // Slight zoom
          y: -10, // Move up
          duration: 0.2
        });
      });

      div.addEventListener('mouseleave', () => {
        gsap.to(div, { 
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Original shadow
          scale: 1, // Return to original size
          y: 0, // Return to original position
          duration: 0.2
        });
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    // Target each image container
    gsap.utils.toArray('.div-fade-up-effect').forEach((div, index) => {
      gsap.from(div, {
        opacity: 0, // Start from transparent
        y: 80, // Start 20 pixels below final position
        duration: 0.8, // Duration of the animation
        delay: index * 0.3, // Stagger the start time of each animation
        ease: "power1.out" // Easing function for a smooth effect
      });
    });
  });



  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#skills-section", {
    duration: 1.2, // Duration of the animation
    opacity: 0, // Start with an opacity of 0
    y: 65, // Start 65 pixels down from the final position
    ease: "power1.out", // Use a slight acceleration to smooth the animation
    scrollTrigger: {
      trigger: "#skills-section",
      start: "top 78%", // Start the animation when the top of the section hits 78% of the viewport
      end: "bottom top", // End the animation when the bottom of the section exits the top of the viewport
      toggleActions: "play none none none", // Play the animation once
      markers: false // Shows markers on the scroll for debugging
    }
  });
  gsap.registerPlugin(ScrollTrigger);

  // ScrollTrigger for the skills section
  ScrollTrigger.create({
    trigger: "#skills-section",
    start: "top+=800", // Trigger when the section is in the center of the viewport
    end: "bottom top", // End when the bottom of the section exits the top of the viewport
    scrub: 1, // Smooth interpolation of values
    onEnter: () => {
      // Change to dark background with white text
      gsap.to("#skills-section", { backgroundColor: '#181416', color: '#ffffff', duration: 0.8 });
      gsap.to("#skills-section .text-gray-800", { color: '#ffffff', duration: 0.8 });
      gsap.to("#skills-section .bg-blue-100", { backgroundColor: '#181416', duration: 0.8 });
      // Add additional selectors for other elements as needed
    },
    onLeaveBack: () => {
      // Revert to original colors
      gsap.to("#skills-section", { backgroundColor: '#ffffff', color: '', duration: 0.5 });
      gsap.to("#skills-section .text-gray-800", { color: '', duration: 0.5 });
      gsap.to("#skills-section .bg-blue-100", { backgroundColor: '', duration: 0.5 });
      // Add additional selectors for other elements as needed
    },
    // markers: true // Uncomment to debug
  });


  gsap.registerPlugin(ScrollTrigger);

  // Create a timeline with ScrollTrigger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".personal-description",
      start: "top center+=100", // You may adjust this trigger point
      toggleActions: "play none none reverse",
      // markers: true // Uncomment to see the trigger points
    },
  });
  
  // Add your animations to the timeline
  tl.fromTo(
    ".personal-description span, .personal-description p",
    { y: 50, autoAlpha: 0 }, // Starting from below and invisible
    {
      y: 0,
      autoAlpha: 1,
      ease: "power3.out", // Smooth easing function
      stagger: 0.15, // Stagger the appearance of each span/p
      duration: 1 // Duration of each individual span/p animation
    }
  );
  


