let t1 = gsap.timeline({paused:true})
  .from('.front-img',{ease:"elastic.out(1,.8)", top: "70%"})
  .from('.menu',{ease:"elastic.out(1,.8)", left: -40},"<")
  .from('.user',{ease:"elastic.out(1,.8)", right: -40},"<")
  .from('.front-title',{ease:"elastic.out(1,.8)", top: '75%',opacity:0, duration:1},"-=.3")
  .from('.front-text',{ease:"elastic.out(1,.8)", top: '80%',opacity:0,duration:1},"<")
  .from('.button-cart',{ease:"elastic.out(1,.8)", scale:0,duration:1},"<")

window.onload = function() { t1.play()}

let t2 = gsap.timeline({paused:true})
  .to('.front-img',{ease:"elastic.in(1,.8)", top: "-30%", duration:1})
  .to('.menu',{ease:"elastic.out(1,.8)", left: -40},"-=.7")
  .to('.user',{ease:"elastic.out(1,.8)", right: -40},"<")
  .to('.front-title',{ease:"elastic.out(1,.8)", top: '110%',opacity:0, },"<")
  .to('.front-text',{ease:"elastic.out(1,.8)", top: '110%',opacity:0, duration:1},"<")
  .to(".button-cart",{scale:0},'<')
  .to(".button-cart svg",{scale:0},'<')
  .to(".button-cart",{ease:"elastic.out(1,.8)",scale:15, borderRadius:0, duration:1.5},"-=.4")
  .to(".back-img",{ease:"elastic.out(1,.8)",top:"10%"},'<')
  .to(".back-title",{ease:"elastic.out(1,.8)", left:"10%"},'<')
  .to(".back-text",{ease:"elastic.out(1,.8)", left:"50%"},'<')
  .to(".arrow-back",{ease:"elastic.out(1,.8)", bottom:40},"<")

  






const triggerButtonPlay = document.querySelector('.button-cart')
triggerButtonPlay.addEventListener('click', ()=>{
  t2.timeScale(1)
  t2.play()
})

const triggerButtonReverse = document.querySelector('.arrow-back')

triggerButtonReverse.addEventListener('click',()=>{
  t2.timeScale(1.8)
  t2.reverse()
})