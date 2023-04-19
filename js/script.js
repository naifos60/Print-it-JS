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
const img = document.querySelector(".banner-img");

/************ function *********/
function next(){
	if(img.dataset.index < slides.length - 1){	
		img.dataset.index++;
		document.querySelector(".dot_selected").nextElementSibling.classList.add("dot_selected");
	    document.querySelector(".dot_selected").classList.remove("dot_selected");
	}else{
		img.dataset.index = 0;
		img.setAttribute("src", "./assets/images/slideshow/" + slides[img.dataset.index].image);
	    img.nextElementSibling.innerHTML = slides[img.dataset.index].tagLine;
		dots.firstElementChild.classList.add("dot_selected");
		dots.lastElementChild.classList.remove("dot_selected");
	}
	console.log(i);
	img.setAttribute("src", "./assets/images/slideshow/" + slides[img.dataset.index].image);
	img.nextElementSibling.innerHTML = slides[img.dataset.index].tagLine;
};

function previous(){
	if(img.dataset.index > 0){	
		img.dataset.index--;
		document.querySelector(".dot_selected").previousElementSibling.classList.add("dot_selected");
	    document.querySelector(".dot_selected").nextElementSibling.classList.remove("dot_selected");
		img.setAttribute("src", "./assets/images/slideshow/" + slides[img.dataset.index].image);
	    img.nextElementSibling.innerHTML = slides[img.dataset.index].tagLine;
	}else{
		img.dataset.index = slides.length - 1;
		 img.setAttribute("src", "./assets/images/slideshow/" + slides[img.dataset.index].image);
	     img.nextElementSibling.innerHTML = slides[img.dataset.index].tagLine;
		 dots.lastElementChild.classList.add("dot_selected");
		 dots.firstElementChild.classList.remove("dot_selected");
	}
	console.log(i);
};
/******** carrousel **********/
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







