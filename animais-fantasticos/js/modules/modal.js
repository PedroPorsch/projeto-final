export default class initModal{
  constructor(botaoAbrir, botaoFechar, containerModal){
   this.botaoAbrir = document.querySelector(botaoAbrir);
   this.botaoFechar = document.querySelector(botaoFechar);
   this.containerModal = document.querySelector(containerModal);

   this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvent(){
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);

}

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

init(){
  if(this.botaoAbrir && this.botaoFechar && this.containerModal)
  this.addModalEvent();
}
  
}
