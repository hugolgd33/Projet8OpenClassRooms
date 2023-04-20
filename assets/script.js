
function slider() {
    const left = document.querySelector(".arrow_left");
    const right = document.querySelector(".arrow_right");
	var bannerimg = document.querySelector(".banner-img");
	var bannerp = document.querySelector(".banner-p");
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
	function elementschange(){
		bannerimg.src = "./assets/images/slideshow/"+slides[active]["image"];
		bannerp.innerHTML = slides[active]["tagLine"];
	}
	left.onclick = () => {
		if (active < 3){
		active = active + 1;
		elementschange();	
		}
		else{
			active=0;
			elementschange();
		};
	};
	right.onclick = () => {
		if (active > 0){
		active = active - 1;
		elementschange();
		}
		else{
			active=3;
			elementschange();
		};
	};	
};
document.body.onload = slider();