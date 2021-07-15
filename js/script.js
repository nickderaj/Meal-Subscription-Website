$(document).ready(function () {
  //   For the sticky navigation
  $(".section-features").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
        $("nav").addClass("animate__animated animate__fadeIn");
      } else {
        $("nav").removeClass("sticky");
        $("nav").removeClass("animate__animated animate__fadeIn");
      }
    },
    {
      offset: "60px;",
    }
  );

  //   For animations
  $(".js--wp-1").waypoint(
    (direction) => {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".icon").click(function () {
    let nav = $(".main-nav");
    nav.slideToggle(200);
  });
});
