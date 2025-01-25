
/* Loader */
onload = () => {
	let load = document.querySelector('.load');


	setTimeout(() => {
		load.style.display ='none';
	}, 1000);
};


/* show / hide menu  by click */
let navMenu    = document.getElementById('nav-menu'),
      navToggle  = document.getElementById('nav-toggle'),
      navClose   = document.getElementById('nav-close');
 
 // validate if constant exists
if(navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
};

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
};

// remove menu mobile 
let navLink = document.querySelectorAll('.nav-link');

function linkAction () {
	// when we click on each nav-list we remove the show
	navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

// change background header 

function scrollHeader () {
	let header = document.getElementById('header');
	// when the scroll is > 50 vh , add scroll-header class to header tag
	if(this.scrollY >= 50) {
		header.classList.add('scroll-header');
	} else {
		header.classList.remove('scroll-header');
	}
}

window.addEventListener('scroll', scrollHeader);

  /* Mixed filter products */
  let mixerProducts = mixitup('.products-content', {
  	selectors: {
  	    target:'.products-card'
  	},
  	animation: {
  		duration:300
  	}
  }); 
 
 // default filter products 
 // mixerProducts.filter('.cake');

 // link active product
  let linkProducts = document.querySelectorAll('.products-item');
  function activeProducts () {
  	linkProducts.forEach(l => l.classList.remove('active-product'));
  	this.classList.add('active-product');
  }

  linkProducts.forEach( z => z.addEventListener('click', activeProducts));

  /* Show Scroll Up */

  function scrollUp () {
  	let scrollUp = document.getElementById('scroll-up');
  	// when the scroll is > 350 vh , add show-scroll class to the a tag with scroll-top class
  	if(this.scrollY >= 350) {
  		scrollUp.classList.add('show-scroll');
  	} else {
  		scrollUp.classList.remove('show-scroll');
  	}
  }
  window.addEventListener('scroll', scrollUp)


  /* Scroll section active link */

  let sections = document.querySelectorAll('section[id]');

  function scrollActive () {
  	let scrollY = window.pageYOffset;

  	sections.forEach(current => {
  		let sectionHeight = current.offsetHeight,
  			sectionTop    = current.offsetTop -58,
  			sectionId     = current.getAttribute('id');

  		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  			document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
  		} else {
  			document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
  		};
  	});

  };
  window.addEventListener('scroll', scrollActive);