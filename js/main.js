$(document).ready(function () {

    $('#menu').slicknav();

    $('.bxslider').bxSlider();


    $('.akordeon').akordeon();

    $('#footer').css('margin-top',
    $(document).height()
  - ($('#header').height() + $('#content').height())
  - $('#footer').height()
    );

});
