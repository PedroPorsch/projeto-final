export default class ScrollSuave {
  constructor(links, option){
  this.linksInternos = document.querySelectorAll(links);
  if(option === undefined ){
    this.option = {behavior: 'smooth', block: 'start'}
  }else{
    this.option = option;
  }
  this.scrollToSection = this.scrollToSection.bind(this)
  }   

  


  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.option)
  }

  addLinkEvent(){
    this.linksInternos.forEach((link) =>{
      link.addEventListener('click', this.scrollToSection)
    })
  }

  init(){
    if(this.linksInternos){
      this.addLinkEvent();
    return this
    }
    
  }

}
