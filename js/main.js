// const Accordions = document.querySelectorAll('.faq-item');
// const AccordionsBtn = document.querySelectorAll('.faq-accordion');

// if (AccordionsBtn) {
// 	AccordionsBtn.forEach(AccordionsBtn => {
// 		AccordionsBtn.addEventListener('click', ()=> {
// 			Accordions.classList.toggle('.faq-item--open')
// 		})
// 	})
// }

const accordions = document.querySelectorAll('.faq-item');
const accordionsBtn = document.querySelectorAll('.faq-accordion');

function closeAccordion() {
	accordions.forEach(function (accordion) {
		accordion.classList.remove('faq-item--open');
	});
}

accordionsBtn.forEach(function (accordionBtn) {
	accordionBtn.addEventListener('click', function () {
		closeAccordion();

		accordionBtn.closest('.faq-item').classList.add('faq-item--open');
	});
})