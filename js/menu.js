var menu = document.querySelector('#menu-section'); 
var navMenu = document.querySelector('#nav-menu');
var navClose = document.querySelector('#nav-close');
var newsletterButton = document.querySelector('#section5-see-button');

const HideElement = (element)=>{
  let target = document.querySelector(element);
  target.style = 'display:none; z-index:0;';
}

const ShowElement=(element)=>{
  let target = document.querySelector(element);
  target.style ='display:flex;z-index:100;';
}


//check if inputs are empty
const isInputsEmpty=()=>{
  let flag = false;
  let name = document.querySelector('#section5-content #name-input').value;
  let email = document.querySelector('#section5-content #email-input').value;
  let terms = document.querySelector('#section5-content #terms-input');
  if((name == '') || (email == '') ||(terms.checked == false)){
    flag = true;
  }
  return flag;
}

navMenu.addEventListener('click',()=>{
  HideElement('#top-nav');
  ShowElement('#menu-section');
  console.log('Menu has been opened');
});

navClose.addEventListener('click',()=>{
  HideElement('#menu-section');
  ShowElement('#top-nav');
  console.log('Menu has been closed');
});

newsletterButton.addEventListener('click',()=>{
  if(isInputsEmpty() == true){
    alert('please complete all the fields!');
  }
  else {
    alert('thank you for signing up to our newsletter.');
  }
})
