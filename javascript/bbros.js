$(function () {
	changeSelectedButton('home');
	activateTabListeners();
	var baseImageString = "images/slides/bbros";
    var pngExtension = ".png";
    var jpgExtension = ".jpg";
    var i=1;
    
    //rotate the images on the home page
    setInterval(function () {
            var imagePath = baseImageString + (i);
            if (i < 5) {
                imagePath += pngExtension;
            }
            else {
                imagePath += jpgExtension;
            }
            document.getElementById('curr-image-in-slider').src = imagePath;
            
            if (i++ >= 31) {
                i = 1;
            }
            
    }, 3500);

});

var changeSelectedButton = function (button) {
	var selectedColor = '#EDEDED';
	var defaultColor = 'darkgray';
	var homeButton = $('#home-tab');
	var aboutButton = $('#about-tab');
	var portfolioButton = $('#portfolio-tab');
	var contactButton = $('#contact-tab');
	
	if (button === 'about') {
		aboutButton.css('background', selectedColor);
		homeButton.css('background', defaultColor);
		portfolioButton.css('background', defaultColor);
		contactButton.css('background', defaultColor);
	}
	else if (button === 'portfolio') {
		aboutButton.css('background', defaultColor);
		homeButton.css('background', defaultColor);
		portfolioButton.css('background', selectedColor);
		contactButton.css('background', defaultColor);
	}
	else if (button === 'contact') {
		aboutButton.css('background', defaultColor);
		homeButton.css('background', defaultColor);
		portfolioButton.css('background', defaultColor);
		contactButton.css('background', selectedColor);			
	}
	else {
		aboutButton.css('background', defaultColor);
		homeButton.css('background', selectedColor);
		portfolioButton.css('background', defaultColor);
		contactButton.css('background', defaultColor);
	}
}

var changeScreen = function (page) {
	var homePage = $('.home-page');
	var aboutPage = $('.about-page');
	var portfolioPage = $('.portfolio-page');
	var contactPage = $('.contact-page');
	
	if (page === 'portfolio') {
		homePage.fadeOut(250);
		aboutPage.fadeOut(250);
		contactPage.fadeOut(250);
		setTimeout(function () {
			portfolioPage.fadeIn();
		}, 250);
	}
	else if (page === 'about') {
		homePage.fadeOut(250);
		portfolioPage.fadeOut(250);
		contactPage.fadeOut(250);
		setTimeout(function() {
			aboutPage.fadeIn();
		}, 250);
	}
	else if (page === 'contact') {
		homePage.fadeOut(250);
		portfolioPage.fadeOut(250);
		aboutPage.fadeOut(250);
		setTimeout(function() {
			contactPage.fadeIn();
		}, 250);
	}
	else {
		aboutPage.fadeOut(250);
		portfolioPage.fadeOut(250);
		contactPage.fadeOut(250);
		setTimeout(function() {
			homePage.fadeIn();
		}, 250);
	}
}

var activateTabListeners = function () {
	var homeButton = $('#home-tab');
	var aboutButton = $('#about-tab');
	var portfolioButton = $('#portfolio-tab');
	var contactButton = $('#contact-tab');

	homeButton.on('click', function () {
		changeSelectedButton('home');
		changeScreen('home');
	});
	
	portfolioButton.on('click', function () {
		changeSelectedButton('portfolio');
		changeScreen('portfolio');
	});
	
	aboutButton.on('click', function () {
		changeSelectedButton('about');
		changeScreen('about');
	});
	
	contactButton.on('click', function () {
		changeSelectedButton('contact');
		changeScreen('contact');
	});
}
	