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

//Custom JavaScript
//This code listens for when the user clicks on the Toy Story alien image. After clicking on the image, this code adds the text including a promo code for a free game, right above the Awards heading.
var clickMe = document.getElementById('alien');

var newParagraph = document.createElement('p');

var promoCode = document.createTextNode('Hey buddy! Thanks for showing some intergalactic love. Take this promo code to the game keeper on your next visit for a free try at The Claw: CLAW2016');

var maincontent = document.getElementById('maincontent');

var awards = document.getElementById('awards');

clickMe.addEventListener('click', function () {
    newParagraph.appendChild(promoCode);
    newParagraph.setAttribute('style', 'color: #f16b6f');
    maincontent.insertBefore(newParagraph, awards);
});
