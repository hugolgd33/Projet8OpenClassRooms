
function slider() {
    const left = document.querySelector(".arrow_left");
    const right = document.querySelector(".arrow_right");
	var bannerimg = document.querySelector(".banner-img");
	var bannerp = document.querySelector(".banner-p");
	var dots = document.querySelector(".dots");
	var newdotab=[];

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

	/* Affichage des Dots */
	for (i = 0; i < slides.length; i++) {
		var newDot = document.createElement('div');
		
   		newDot.id = i;
   		newDot.className = 'dot';
		dots.appendChild(newDot);
		newdotab = newdotab.concat(i);
		
	};

	
	var active = 0;
	var activdot = document.getElementById(active);
	activdot.classList.add('dot_selected');
	
	/* Fonction du changement */
	function elementschange(){
		bannerimg.src = "./assets/images/slideshow/"+slides[active]["image"];
		bannerp.innerHTML = slides[active]["tagLine"];
		newdotab.forEach((nmb) => {
			var activdot = document.getElementById(nmb);
			console.log(newdotab[nmb])
			if (newdotab[nmb] == active){
				 activdot.classList.add('dot_selected');
			}
			else{
				activdot.classList.remove('dot_selected');
			};
			
		})
		
	};

	/* Flèche droite cliquée */
	right.onclick = () => {
		if (active < slides.length-1){
		active = active + 1;
		elementschange();	
		}
		else{
			active=0;
			elementschange();
		};
	};

	/* Flèche gauche cliquée */
	left.onclick = () => {
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