export default class AnimacaoScroll {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.animaScroll = this.animaScroll.bind(this)
  }
  
  // getDistance(){
  //     this.sections.forEach((section) =>{
  //     const sectionTop = section.getBoundingClientRect().top;
  //     console.log(sectionTop)
  //   })
  // }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init(){
    // this.getDistance()
    this.animaScroll()
    window.addEventListener('scroll', this.animaScroll)
  }
    
}
