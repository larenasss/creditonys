document.addEventListener('DOMContentLoaded', function(){

  let formLoader = document.querySelectorAll('.loader');
  let formContent = document.querySelectorAll('.form__content');
  let formOverlay = document.querySelectorAll('.form__overlay');
  let buttonForm = document.querySelectorAll('.btn--bg-transparent');
  let buttonFormMobileShow = document.querySelector('.credit__mailing-btn');
  let contentFormMobileShow = document.querySelector('.credit__mailing-form');

  for (let i = 0; i < buttonForm.length; i++) {
    buttonForm[i].addEventListener('click', function(e){
      e.preventDefault();
      buttonForm[i].classList.add('active');

      for (let i = 0; i < formLoader.length; i++) {
        formLoader[i].classList.add('active');

        for (let i = 0; i < formOverlay.length; i++) {

          for (let o = 0; o < formContent.length; o++) {
            setTimeout(() => {
              formLoader[i].classList.remove('active');
              formContent[i].classList.add('active');
              formOverlay[i].classList.add('active');
            }, 1000);
          } 
        }
      }
    })
  
    buttonFormMobileShow.addEventListener('click', function(){
      buttonFormMobileShow.classList.add('active');
      contentFormMobileShow.classList.add('active');
    })
    
  }




})