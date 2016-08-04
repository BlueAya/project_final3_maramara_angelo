$(document).ready(function () {

    $('#menu').slicknav();

    $('.bxslider').bxSlider();

    $('#footer').css('margin-top',
    $(document).height()
  - ($('#header').height() + $('#content').height())
  - $('#footer').height()
    );
});
