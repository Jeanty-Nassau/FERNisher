
const CatalogueMatrix=[
  //[Name, Company, image url, Price, Type, Description]
  //[0,       1,        2,        3,    4,      5]
  //stools
  ['BASIC','@Home','stool1_1.jpg',2000,'Stool',"Throne is a substantial yet delicate armchair. Made from powder-coated industrial readymades, it is carefully welded together to reveal its significant graphical shape and minimalistic construction. Referencing the classic Monobloc chair, round and angled shapes come together to form a harmonious whole. Viewed from different angles, Throne changes its shape. Its generous seating area can also be used as a storage area for books or as a side table. It will expose its qualities the best as a free-standing object in the living room or foyer."],
  ['MODERN','Africa Queen Studio','stool2_1.jpg',3000,'Stool',"When Carl Hansen & Søn put the CH20 Elbow Chair by Hans J. Wegner into production for the first time in 2005, it quickly established a position as a modern classic, winning the ICFF Editors’ Award in New York in the same year. The Elbow Chair’s characteristic steam-bent backrest, crafted from a single piece of solid wood, provides elbow and lower back support and enables a variety of sitting positions. The chair’s unique rail construction under the seat in form-pressed veneer adds optimal stability in combination with a light and floating expression."],
  ['LUXURY','coricraft','stool3_1.jpg',4000,'Stool',"The Ten Chair is built using sustainably sourced hardwoods, which are air-dried, hand-sealed, and carefully kiln-dried according to Sun at Six's own recipes. This piece is built without nails or screws, which is then finished with tung oil, pressed and made from raw tung tree nuts. The tenth iteration of this horned solid white oak chair features exposed joinery throughout and vegetable tanned leather cushions that will patina with age."],
  //couches
  ['BASIC','@Home','couch1_1.jpg',2000,'Couch',"Align Daybed respects the history of Scandinavian design while adding designer Anita Johansen’s own stamp of quiet sophistication. Made from classic Nordic materials, it consists of two parts: a simple ash frame and soft upholstered seat. We love Daybed for its purity and calm, a perfect welcome in the hallway or waiting room, or providing additional seating in the living room."],
  ['MODERN','Africa Queen Studio','couch2_1.jpg',3000,'Couch',"While the other members of the Covent family balance the elements; the Covent Lounge Chair and Covent Sofa present a universe of warmth. The soft organic top of the Covent Chair has been extended to the ground, the bold frame replaced with the soft touch of an upholstered base and generous seating cushion. Showcasing the expert detailing and craftsmanship that comes with a range produced solely in Denmark, this pair invites you to nestle within and feel the tenderness of each upholstered surface."],
  ['LUXURY','coricraft','couch3_1.jpg',4000,'Couch',"Designer Chris Martin saw a rack of freshly baked loaves in a bakery and found something instantly appealing about the risen bread against the metal wires. The idea became a sofa with thin steel tube side panels that enclose and lift the plump cushions. Mega offers superb comfort and sculptural expression to offices, hotels and homes."],
  //tables
  ['BASIC','@Home','table1_1.jpg',2000,'Table',"The Offset Coffee Table is a playful and irregular screw together furniture piece, which displays the beauty of solid oak in generous proportions. Each Offset leg attaches via an off-centre threaded connector, which enables the legs to locate themselves in an individualized and adjustable position. Solid, stable and hardwearing, this is a durable piece for everyday use."],
  ['MODERN','Africa Queen Studio','table2_1.jpg',3000,'Table',"The famous travel report by Marco Polo, entitled Il Milione, tells the story of Venice's meeting with the East, whose cultural influences had the highest expression in architecture, applied arts and manufacturing. In Venice, a link between two civilizations, fabrics, carpets, embroideries of exotic flavor appeared: a noble weave of warp and texture, evoked by a collection of essential containers, refined by doors composed of wooden strips alternated with brass details."],
  ['LUXURY','coricraft','table3_1.jpg',4000,'Table',"A nod to Joan Miro’s curved shapes, the hidden central lid transforms into a trivet when flipped, and reveals a storage compartment within that can store small accessories and tableware. The table is currently available in ash, white oak, or walnut – each with a wool trivet."]

];
var cartTopNumber = document.querySelector('#cart-top-number');
var cartMatrix = JSON.parse(sessionStorage.getItem('cart-matrix'));
var checkoutInfo = [];
var cartGrid = document.querySelector('#cart-grid');
var continuePaymentButton = document.querySelector('#continuePayment-button');
var returnShippingButton = document.querySelector('#returnShipping-button');
var payButton = document.querySelector('#payment-button');
var onCheckout;
var onPayment;


//capture user checkout info
const UpdatePersonalInfo = ()=>{
  let tempArray  = [];
  let contact = document.querySelector('#checkout-email').value;
  let address = document.querySelector('#address1').value + ", "+
                document.querySelector('#address2').value + ", "+
                document.querySelector('#address3').value + ", "+
                document.querySelector('#address4').value + ", "+
                document.querySelector('#address5').value + ", "+
                document.querySelector('#address6').value ; 
  let shippingMethod = '';
  let option = document.getElementsByName('shipping');
  for(let i=0; i < option.length; i++) {
    if(option[i].checked){
      let query = 'label[for=' + option[i].id + ']';
      let label = document.querySelector(query);
      shippingMethod = label.innerHTML;
      break;
    }
    
  }
  document.querySelector('#checkout2 #personal-info').innerHTML = 
    '<div class="personal-input">' +
      '<h2>CONTACT:</h2>'+
      '<h2>'+contact+'</h2>'+
    '</div>'+
    '<div class="personal-input">'+
      '<h2>SHIP TO:</h2>'+
      '<h2>'+address+'</h2>'+
    '</div>'+
    '<div class="personal-input">'+
      '<h2>METHOD:</h2>'+
      '<h2>'+shippingMethod+'</h2>'+
    ' </div>';
}


//display products added to cart
const DisplayCart = ()=> {
  let content ='';
  let tempArray = [];
  tempArray = cartMatrix;
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < CatalogueMatrix.length; j++) {
      if (j == tempArray[i][0]) {
        content +=
        '<div class="product-item" '+
        "style='background-image: url(Assets/images/"+CatalogueMatrix[j][2]+");'>"+
        '<h1>'+CatalogueMatrix[j][4]+'</h1>'+
        '<div class="product-item-bottom">'+
          '<h2>R'+(CatalogueMatrix[j][3]*parseInt(tempArray[i][1]))+'</h2>'+
          '<div class="product-item-bottom2">'+
           '<div class="product-item-quantity">'+
              '<h2>QTY / </h2>'+
              '<h2>'+tempArray[i][1]+'</h2>'+
            '</div>'+
            '<a href = "Cart.html"class="product-quantity-remove"'+
            "onclick='RemoveCartItem(" + j + ")'" +
            '>REMOVE</a>'+
          '</div>'+
        '</div>'+
      '</div>'
      }
      
    }
    
    
  }
  cartGrid.innerHTML = content;
}


const RemoveCartItem = (j)=>{
  let tempArray = [];
  let index = parseInt(j);
  tempArray = cartMatrix;
  if(tempArray.length > 1){
    for (let i = 0; i < tempArray.length; i++) {
      if(index == tempArray[i][0]){
        tempArray.splice(i,1);//remove from session storage
        sessionStorage.setItem('cart-matrix',JSON.stringify(tempArray));
      }
    }
  } 
  else{
    sessionStorage.removeItem('cart-matrix');
  } 
}


const GetAddress = ()=>{
  let address = '';
  address = document.querySelector('#address1').value + ', '+
  document.querySelector('#address2').value+ ', '+
  document.querySelector('#address3').value+ ', '+
  document.querySelector('#address4').value+ ', '+
  document.querySelector('#address5').value+ ', '+
  document.querySelector('#address6').value ;

  return address;
}

//get the selected method of shipping
const GetShippingMethod = ()=>{
    let option = document.getElementsByName('shipping');
    let shippingMethod; 
    for(let i = 0; i < option.length; i++) {
        if(option[i].checked)
        shippingMethod = option[i].value;
    }
    return shippingMethod;
}

//check if inputs are empty
const isEmpty=(element)=>{
  let query = '#'+element +' #personal-info input';
  console.log(query);
  let inputs = document.querySelectorAll(query);
  console.log('inputs : '+query);
  let flag = false;
  for (let i = 0; i < inputs.length; i++) {
    if(inputs[i].value == ''){
      flag= true;
    }
  }
  return flag;
}

//calculate the total amount of cart without shipping
const CalculateOrderSummary = ()=>{
  let sum = 0;
  let tempArray = [];
  tempArray = cartMatrix;
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < CatalogueMatrix.length; j++) {
      if (j == tempArray[i][0]) {
      sum += (parseInt(CatalogueMatrix[j][3]))* tempArray[i][1];
      }
    }
  }
  console.log('CalculateOrderSummary : executed');
  return sum;
}

//display the the amounts of cart
const UpdateOrderSummry = (shippingAmount)=>{
  let x = parseInt(shippingAmount);
  if((x != 200) && (x !=300) && (x !=400)){
    x = 200;
  }
  let sum = 0;
  let summaryTotal = CalculateOrderSummary();
  sum = x + summaryTotal;
  console.log('summaryTotal: '+summaryTotal+' sum is = '+sum);
  console.log('UpdateOrderSummary : executed');
  document.querySelector('#summary-total').innerHTML = 'R'+summaryTotal.toString();
  document.querySelector('#shipping-amount').innerHTML = 'R'+x;
  document.querySelector('#total-price').innerHTML = 'R'+sum.toString();

}


//get the amount of products in cart
const UpdateNumberOfProducts = ()=>{ 
  let sum=0;
  let tempString;
  let tempArray = [];
  let cartTopAmount = document.querySelector('#cart-top-number');
  
  tempArray =cartMatrix;
  for (let i = 0; i < tempArray.length; i++) {
    sum += tempArray[i][1];  
  }
  tempString = '<h1>'+(sum).toString()+' products<h1>';
  cartTopAmount.innerHTML = tempString;
}


const HideElements = (element)=>{
  let target = document.querySelector(element);
  target.style = 'display:none; z-index:0;';
}

const ShowElements=(element)=>{
  let target = document.querySelector(element);
  target.style ='display:flex;z-index:100;';
}

window.addEventListener('change',()=>{
  DisplayCart();
  UpdateNumberOfProducts();
  UpdateOrderSummry(GetShippingMethod());
});

window.addEventListener('load',()=>{
  DisplayCart();
  UpdateNumberOfProducts();
  UpdateOrderSummry(GetShippingMethod());

  if(onCheckout == true){
    HideElements('#checkout2');
    ShowElements('#checkout1');
  }
  else if(onPayment == true){
    HideElements('#checkout1');
    ShowElements('#checkout2');
    UpdatePersonalInfo();
  }
});

continuePaymentButton.addEventListener('click',()=>{
  if(isEmpty('checkout1')== true){
    alert('complete all fields!');
  }
  else{
    HideElements('#checkout1');
    ShowElements('#checkout2');
    UpdatePersonalInfo();
    onCheckout = false;
    onPayment = true;
  }
});

returnShippingButton.addEventListener('click',()=>{
  HideElements('#checkout2');
  ShowElements('#checkout1');
  onPayment = false;
  onCheckout = true;
});

payButton.addEventListener('click',()=>{
  if(isEmpty('checkout2') == true){
    alert('complete all fields!');
  }
  else{
    //remove cart-matrix from sessionStorage
    alert('thank you for shopping at FERNisher');
    sessionStorage.removeItem('cart-matrix');
    console.log('user has finished payment');
  }
});

