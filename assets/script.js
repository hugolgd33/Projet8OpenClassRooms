
function slider() {
    const left = document.querySelector(".arrow_left");
    const right = document.querySelector(".arrow_right");
	var dots = document.querySelector(".dots");
	var bannerimg = document.querySelector(".banner-img");
	var bannerp = document.querySelector(".banner-p");

	/*Tab des img + p */
	const slides = [
		{
			"image":"slide1.jpg",
			"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image":"slide2.jpg",
			"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image":"slide3.jpg",
			"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image":"slide4.png",
			"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
		}
	];
	var active = 0;
	slides.forEach((nmb) => {
		var newDot = document.createElement('div');
   		newDot.id = 'd'+nmb;
   		newDot.className = 'dot';
		dots.appendChild(newDot);
	});
	/* Fonction du changement */
	function elementschange(){
		bannerimg.src = "./assets/images/slideshow/"+slides[active]["image"];
		bannerp.innerHTML = slides[active]["tagLine"];
	}

	/* Flèche gauche cliquée */
	left.onclick = () => {
		if (active < slides.length-1){
		active = active + 1;
		elementschange();	
		}
		else{
			active=0;
			elementschange();
		};
	};

	/* Flèche droite cliquée */
	right.onclick = () => {
		if (active > 0){
		active = active - 1;
		elementschange();
		}
		else{
			active = slides.length-1;
			elementschange();
		};
	};	
};

/* lorsque le body du html est chargé */
document.body.onload = slider();