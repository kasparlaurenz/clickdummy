$(".show-menu").on("click", () => {
  $(".menu").toggleClass("hidden");
});

//show menu-teaser on mouseover
$(".nav-level-1 li a, .nav-level-1 li p").mouseover(() => {
  $(".menu-teaser").removeClass("hidden");
});

//hide menu-teaser on mouseout
$(".nav-level-1 li a, .nav-level-1 li p").mouseout(() => {
  $(".menu-teaser").addClass("hidden");
});

//open level-2-services
$('.services').on('click', () => {

    $('.menu').addClass('hidden-teaser');
    $('.level-2-services').toggleClass('hidden');
    $('.services').toggleClass('active');
    if (!$('.level-2-tools').hasClass('hidden')) {
      $('.level-2-tools').toggleClass('hidden');
      $('.tools').toggleClass('active');
    }
    if ($('.level-2-services').hasClass('hidden') && $('.level-2-tools').hasClass('hidden')) {
      $('.menu').removeClass('hidden-teaser');
    }
  })

  //open level-2-tools
  $('.tools').on('click', () => {
    $('.menu').addClass('hidden-teaser');
    $('.level-2-tools').toggleClass('hidden');
    $('.tools').toggleClass('active');
    if (!$('.level-2-services').hasClass('hidden')) {
      $('.level-2-services').toggleClass('hidden');
      $('.services').toggleClass('active');
    }
    if ($('.level-2-services').hasClass('hidden') && $('.level-2-tools').hasClass('hidden')) {
      $('.menu').removeClass('hidden-teaser');
    }
  })
  
  