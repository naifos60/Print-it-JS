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
]
let i = 0;

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function(){
	console.log("suivant");
		document.querySelector(".dot_selected").nextElementSibling.classList.add("dot_selected");
	    document.querySelector(".dot_selected").classList.remove("dot_selected");
	
	if(i > 3){	
		i = 0;
	}else{
		i++;
	}
	console.log(i);
	document.querySelector(".banner-img").setAttribute("src", "./assets/images/slideshow/" + slides[i].image);
	document.querySelector(".banner-img").nextElementSibling.innerHTML = slides[i].tagLine;
});

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function(){
	console.log("précédent");
	document.querySelector(".dot_selected").previousElementSibling.classList.add("dot_selected");
	document.querySelector(".dot_selected").nextElementSibling.classList.remove("dot_selected");
	if(i < 0){	
		i = 3;
	}else{
		i--;
	}
	document.querySelector(".banner-img").setAttribute("src", "./assets/images/slideshow/" + slides[i].image);
	document.querySelector(".banner-img").nextElementSibling.innerHTML = slides[i].tagLine;
});



const dots = document.querySelector(".dots");
 for(let i = 0; i < slides.length; i++){
	const content = document.createElement("span");
	content.classList.add("dot")
	dots.appendChild(content);
	dots.firstElementChild.classList.add("dot_selected");
	
};



