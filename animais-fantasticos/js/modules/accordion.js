export default class Accordion {
  constructor(list){
    this.lista = document.querySelectorAll(list)
    this.activeClass = 'ativo'
  }


  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent(){
    this.lista.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

 
  init (){
    if(this.lista.length){
      this.toggleAccordion(this.lista[0])
      this.addAccordionEvent()
    }  
  }

}
