gsap.registerPlugin(ScrollTrigger)

const { innerHeight } = window

gsap.to('.scale__item', {
	scale: 5,
	duration: 40,
	ease: 'power2.inOut',
	scrollTrigger: {
		trigger: '#scale',
		start: 'top top',
		end: 'bottom bottom',
		pin: true,
		end: `+=${innerHeight * 1}`,
		scrub: 3,
		onLeave: () => gsap.to(scale__item, { opacity: 0, duration: .4 }),
        onEnterBack: () => gsap.to(scale__item, { opacity: 1, duration: 1 }),
		// markers: true,
	},
})

let timeline = gsap.timeline({
	scrollTrigger: {
	  trigger: '#scale',
	  start: 'top +=30px',  // Начало анимации при прокрутке
	  end: `+=${innerHeight * 1.2}`,  // Продолжительность прокрутки
	  pin: true,  // Закрепляем элемент
	  scrub: 5,   // Привязка анимации к скроллу для плавности
	//   markers: true,  // Включить для отладки
	}
  });
  
  // Плавное появление и увеличение .scale__info
  timeline.fromTo('.scale__info', 
	{ opacity: 0, scale: 3 },  // Начальное состояние — невидимый и маленький элемент
	{ 
	  opacity: 1,      // Полностью видимый элемент
	  scale: 8,       // Масштабирование элемента
	  duration: 80,     // Время на проявление и увеличение
	  ease: 'power2.inOut'  // Плавная анимация
	}
  );
  
  // Плавное исчезновение .scale__info при дальнейшем увеличении
  timeline.to('.scale__info', 
	{ 
	  opacity: 0,       // Исчезновение элемента
	  scale: 8,        // Элемент продолжает увеличиваться
	  duration: 80,      // Время на исчезновение
	  ease: 'power2.inOut'  // Плавная анимация
	}
  );

  
const lastCard = document.querySelector('.cards__card:last-child');

gsap.utils.toArray('.cards__card').forEach((cards__card, i) => {
	let tl = gsap.timeline({
	  scrollTrigger: {
		trigger: cards__card,
		start: 'top +=7%',
		end: 'bottom +=200px',
		scrub: 5, 
		pin: true, 
		pinSpacing: false,
		// markers: true,
		onLeave: () => gsap.to(cards__card, { opacity: 0, duration: 1, scale: 0.4 }),
		onEnterBack: () => gsap.to(cards__card, { opacity: 1, duration: 1, scale: 1 })
	  }
	});
  
	tl.to(cards__card.querySelector('.cards__img-img'), {
	  rotate: 180,
	  duration: 10, 
	  ease: 'power2.inOut', 
	  onComplete: () => {
	  }
	});
  });

  gsap.to('.about', {
	ease: 'power2.inOut',
	scrollTrigger: {
		trigger: '.about',
		pin: true,
		start: 'top top',
		end: 'bottom bottom',
		// pinSpacing: false,

		// end: `+=${innerHeight}`,
		scrub: 5,
		// markers: true,
	},
})


