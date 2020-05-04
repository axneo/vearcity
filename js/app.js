/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
$(".techstack").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    }
  ]
});

$(document).ready((function() {
  $(window).on("scroll", (function() {
    $(".header").addClass("scorlling");
  }));
}));

var controller = new ScrollMagic.Controller();

var tl = gsap.timeline({ delay: 0.5 });

var whatwe = gsap.timeline();
var technology = gsap.timeline();
var how = gsap.timeline();
var team = gsap.timeline({ delay: 0.75 });
var contact = gsap.timeline({ delay: 0.75 });

tl.from(".home .logo", { duration: 0.5, y: 10, opacity: 0 })
  .from(".home .nav-group > * ", {
    duration: 1,
    y: 10,
    stagger: 0.2,
    opacity: 0
  })
  .from(
    ".home .cta-section > * ",
    { duration: 1, y: 60, stagger: 0.3, opacity: 0 },
    "-=.8"
  )
  .from(".animation", { duration: 1.2, opacity: 0, y: 70 }, "-=.7")
  .from(".home .scroll", { duration: 1.2, opacity: 0, y: -20 });

whatwe
  .to(".home .scroll", { duration: 0.5, opacity: 0, y: -20 })
  .from(".home .what-we-do .title-center > * ", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2
  })
  .from(
    ".serives-group",
    { duration: 1, y: 30, opacity: 0, stagger: 0.2 },
    "-=.7"
  );

technology
  .from(".home .technology .title-center > * ", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2
  })
  .from(".techstack", { duration: 1, y: 30, opacity: 0 }, "-=.7")
  .from(".works", { duration: 1, y: 40, opacity: 0 });

how
  .from(".how-we-work .title-center > * ", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2
  })
  .from(".a", { duration: 0.5, y: 30, opacity: 0 })
  .from(".sep1 img", { duration: 0.5, y: -40, opacity: 0 })
  .from(".b", { duration: 0.5, y: 30, opacity: 0 })
  .from(".sep2 img", { duration: 0.5, y: -40, opacity: 0 })
  .from(".c", { duration: 0.5, y: 30, opacity: 0 })
  .from(".sep3 img", { duration: 0.5, y: -40, opacity: 0 })
  .from(".d", { duration: 0.5, y: 30, opacity: 0 })
  .from(".sep4 img", { duration: 0.5, y: -40, opacity: 0 })
  .from(".e", { duration: 0.5, y: 30, opacity: 0 });

team.from(".team img ", { duration: 2, y: 40, opacity: 0 });

contact
  .from(".home .contacts .title-center > * ", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2
  })
  .from(".home .contact-wrapper", { duration: 1, y: 30, opacity: 0 })
  .from(
    ".home .contact-form *",
    { duration: 1, y: 20, opacity: 0, stagger: 0.2 },
    "-=.3"
  )
  .from(".side-group *", { duration: 1, y: 30, opacity: 0 });

var scene = new ScrollMagic.Scene({
  triggerElement: ".what-we-do",
  triggerHook: 0.95
})
  .setTween(whatwe)
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".technology",
  triggerHook: 0.95
})
  .setTween(technology)
  .addTo(controller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: ".how-we-work",
  triggerHook: 0.95
})
  .setTween(how)
  .addTo(controller);

var scene4 = new ScrollMagic.Scene({
  triggerElement: ".team",
  triggerHook: 0.95
})
  .setTween(team)
  .addTo(controller);

var scene5 = new ScrollMagic.Scene({
  triggerElement: ".contacts",
  triggerHook: 0.95
})
  .setTween(contact)
  .addTo(controller);

(function() {
  $(".menu").on("click", (function() {
    $(".mobile-menu").slideDown();
  }));

  $(".closed").on("click", (function() {
    $(".mobile-menu").slideUp();
  }));

  $('.nav-group a[href^="#"]').click((function() {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      500
    );
    return false;
  }));

  $('.nav-group-mo a[href^="#"]').click((function() {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      500
    );
    $(".mobile-menu").slideUp();
    return false;
  }));
})();
