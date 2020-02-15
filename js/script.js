AOS.init();
$("#designBar").waypoint(
  function() {
    $("#designBar").css("animation", "design 2s");
  },
  {
    offset: "100%"
  }
);

$("#photographyBar").waypoint(
  function() {
    $("#photographyBar").css("animation", "photography 2s");
  },
  {
    offset: "100%"
  }
);

$("#marketing-bar").waypoint(
  function() {
    $("#marketing-bar").css("animation", "marketing 2s");
  },
  {
    offset: "100%"
  }
);

$("#boarding-bar").waypoint(
  function() {
    $("#boarding-bar").css("animation", "branding 2s");
  },
  {
    offset: "100%"
  }
);

$(document).ready(function() {
  $(".nav--mobile__toogle").click(function() {
    $("nav").toggleClass("active--nav");
    $(".fa-times:before").css("display", "block");
  });
});
