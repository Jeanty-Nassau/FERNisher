var cartAmount = document.querySelector('#cart-amount');
var cartMatrix = JSON.parse(sessionStorage.getItem('cart-matrix'));

//update cart amount in nav bar
const UpdateCartAmount = ()=>{
  let tempString = "";
  let tempArray  = [];
  tempArray = cartMatrix;
  let sum =0;
  
  for (let i = 0; i < tempArray.length; i++) {
    sum += tempArray[i][1];  
  }
  tempString = '('+(sum).toString()+')';
  if(tempString != '0'){
    cartAmount.innerHTML = tempString;
  }
  else{
    cartAmount.innerHTML = '(0)';
  }

}

//filter catalogue according to main page
const SaveProductInfoMainPage = (i)=>{
  sessionStorage.setItem('catalogue-product-info',i.toString());
}


window.addEventListener('load',()=>{
UpdateCartAmount();
});

window.addEventListener('change',()=>{
  UpdateCartAmount();
});
