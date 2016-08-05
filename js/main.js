$(document).ready(function () {

    //This jQuery plugin creates a quick mobile hamburger menu navigation.
    $('#menu').slicknav();

    //This jQuery plugin creates a responsive slider in which you can place images and control the rate at which it transitions
    $('.bxslider').bxSlider();

    //This jQuery plugin creates a collapsible menu of items
    $('.akordeon').akordeon();

    //Custom jquery
    //This takes all of the paragraphs and sets them to hidden which is then followed by a fade in which fades them onto the page as it loads.
    $('p').hide().fadeIn();

    $('#footer').css('margin-top',
    $(document).height()
  - ($('#header').height() + $('#content').height())
  - $('#footer').height()
    );

});

//Custom JavaScript
//This code listens for when the user clicks on the Toy Story alien image. After clicking on the image, this code adds the text including a promo code for a free game, right above the Awards heading. This code also adds styling to the text to make it stand out when added to the page. I needed to wrap the Event Listener in an if statement to prevent errors from appearing in the other pages where the page could not find the element with the id of "alien".
var clickMe = document.getElementById('alien');

var newParagraph = document.createElement('p');

var promoCode = document.createTextNode('Hey buddy! Thanks for showing some intergalactic love. Take this promo code to the game keeper on your next visit for a free try at The Claw: CLAW2016');

var maincontent = document.getElementById('maincontent');

var awards = document.getElementById('awards');


if (clickMe) {
    clickMe.addEventListener('click', function () {
        newParagraph.appendChild(promoCode);
        newParagraph.setAttribute('style', 'color: #f16b6f');
        maincontent.insertBefore(newParagraph, awards);
    });
}
