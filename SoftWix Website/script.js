const headerTl = gsap.timeline();
const servicesTl = gsap.timeline();

// Header animations
headerTl.from("header h1, header nav", {
    y: -15,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1
});

// Hero animation
gsap.from("#hero h2", {
    y: -50,
    duration: 1.2,
    opacity: 0,
    ease: "power2.out"
});

// Services animations
servicesTl.from(".service-content h3, .service-content p", {
    y: 10,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1
});

// scrollTriggerConfig
const scrollTriggerConfig = {
    scroller: "body",
    markers: false, 
    start: "top 80%",
    toggleActions: "play none none none"
};

// Section animations
const sections = [
    { id: "#why-choose-us", trigger: "#why-choose-us .section-title" },
    { id: "#about", trigger: "#about .section-title" },
    { id: "#contact", trigger: "#contact .section-title" },
    { id: "#team", trigger: "#team .team-header" }
];

sections.forEach(section => {
    gsap.from(section.id, {
        y: 50,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: section.trigger,
            ...scrollTriggerConfig
        }
    });
});

// Component Anmations
const components = [
    { selector: ".advantages-grid", trigger: ".advantage-card" },
    { selector: ".about-details", trigger: ".about-details" },
    { selector: ".contact-wrapper", trigger: ".contact-wrapper" },
    { selector: ".team-container", trigger: ".team-container .team-member" }
];

components.forEach(component => {
    gsap.from(component.selector, {
        y: 50,
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: component.trigger,
            ...scrollTriggerConfig
        }
    });
});