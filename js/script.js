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
/********** variables *********/
let i = 0;
let dots = document.querySelector(".dots");	

const arrowRight = document.querySelector(".arrow_right"); 
const arrowLeft = document.querySelector(".arrow_left");

/************ function *********/
function next(){
	if(i < slides.length - 1){	
		i++;
		document.querySelector(".dot_selected").nextElementSibling.classList.add("dot_selected");
	    document.querySelector(".dot_selected").classList.remove("dot_selected");
	}else{
		i = 0;
		document.querySelector(".banner-img").setAttribute("src", "./assets/images/slideshow/" + slides[i].image);
	    document.querySelector(".banner-img").nextElementSibling.innerHTML = slides[i].tagLine;
		dots.firstElementChild.classList.add("dot_selected");
		dots.lastElementChild.classList.remove("dot_selected");
	}
	console.log(i);
	document.querySelector(".banner-img").setAttribute("src", "./assets/images/slideshow/" + slides[i].image);
	document.querySelector(".banner-img").nextElementSibling.innerHTML = slides[i].tagLine;
};

function previous(){
	if(i > 0){	
		i--;
		document.querySelector(".dot_selected").previousElementSibling.classList.add("dot_selected");
	    document.querySelector(".dot_selected").nextElementSibling.classList.remove("dot_selected");
		document.querySelector(".banner-img").setAttribute("src", "./assets/images/slideshow/" + slides[i].image);
	    document.querySelector(".banner-img").nextElementSibling.innerHTML = slides[i].tagLine;
	}else{
		 i = slides.length - 1;
		 document.querySelector(".banner-img").setAttribute("src", "./assets/images/slideshow/" + slides[i].image);
	     document.querySelector(".banner-img").nextElementSibling.innerHTML = slides[i].tagLine;
		 dots.lastElementChild.classList.add("dot_selected");
		 dots.firstElementChild.classList.remove("dot_selected");
	}
	console.log(i);
};

for(let i = 0; i < slides.length; i++){
	const content = document.createElement("span");
	content.classList.add("dot")
	dots.appendChild(content);
	dots.firstElementChild.classList.add("dot_selected");	
};

arrowRight.addEventListener("click", function(){
	console.log("suivant");	
	next();
	
});

arrowLeft.addEventListener("click", function(){
	console.log("précédent");
	previous();
});







