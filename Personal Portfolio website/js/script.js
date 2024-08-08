let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
	document.querySelector('body').classList.toggle('mobile-nav-active');
	this.classList.toggle('bi-x-lg')
})



// typing animation
 var typed = new Typed('.auto-input', {
      strings: ['Freelancer.', 'Website Designer.', 'E-Commerce Website Designer.', 'Website Developer.', 'Responsive Web Designer.', 'Portfolio Website Designer.',],
      typeSpeed: 70,
      backspeed: 100,
      backDelay: 2000,
      loop: true,
    });
 

 // active link

let navLinks = document.querySelectorAll('nav ul li a')

let sections = document.querySelectorAll('section')

console.log(sections)

window.addEventListener('scroll', function (){
	const scrollPos = window.scrollY + 20
	sections.forEach(section =>{
		if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
			navLinks.forEach(link =>{
				link.classList.remove('active');
				if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
					link.classList.add('active')
				}
			});
		}
	});


});



// gmail linnk

function sendMail(){
	let parms = {
	name : document.getElementById("name").value,
	email : document.getElementById("email").value,
	subject : document.getElementById("subject").value,
	msg : document.getElementById("msg").value,

	}

	emailjs.send("service_cgghean", "template_4jq270g",parms).then(alert("Email Sent!!"))
}
 

