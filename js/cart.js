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

var cartMatrix = JSON.parse(sessionStorage.getItem('cart-matrix'));
var cartGrid = document.querySelector('#cart-grid');

//show items added to cart
const DisplayCart = ()=> {
  let content ='';
  let tempArray = [];
  tempArray = cartMatrix;
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < CatalogueMatrix.length; j++) {
      if (j == tempArray[i][0]) {
        content +=
        '<div class="product-item" id="product-item4"'+
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
            'onclick="RemoveCartItem(' + j + ')"' +
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
        console.log('cart item is removed');
      }
    }
  } 
  else{
    sessionStorage.removeItem('cart-matrix');
    console.log('cart-matrix is removed');
  } 
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

//change the amounts displayed on the page
const UpdateOrderSummry = (shippingAmount)=>{
  let x = parseInt(shippingAmount);
  let sum = 0;
  let summaryTotal = CalculateOrderSummary();
  sum = x + summaryTotal;
  console.log('summaryTotal: '+summaryTotal+' sum is = '+sum);
  console.log('UpdateOrderSummary : executed');
  document.querySelector('#summary-total').innerHTML = 'R'+summaryTotal.toString();
  document.querySelector('#shipping-amount').innerHTML = 'R'+x;
  document.querySelector('#total-price').innerHTML = 'R'+sum.toString();

}

//change the amount of products displayed 
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


window.addEventListener('load',()=>{
  DisplayCart();
  UpdateOrderSummry(200);
  UpdateNumberOfProducts();
});

window.addEventListener('change',()=>{
  DisplayCart();
  UpdateOrderSummry(200);
  UpdateNumberOfProducts();
});
