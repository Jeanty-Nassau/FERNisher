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

var catalogueGrid = document.querySelector('#catalogue-grid');
//catalogue-top-left-buttons
var stoolButton = document.querySelector('#stool');
var couchButton = document.querySelector('#couch');
var tableButton = document.querySelector('#table');
var allFurnitureButton = document.querySelector('#all-furniture');
//catalogue-top-right-buttons
var coricraftButton = document.querySelector('#coricraft');
var homeButton = document.querySelector('#home');
var studioButton = document.querySelector('#studio');

//capture product selected
const SaveProductInfo = (i)=>{
  sessionStorage.setItem('catalogue-product-info',i.toString());
}


const CatalogueCompanyFilter = (filter)=>{
  let content ="";
  for(let i=0; i < CatalogueMatrix.length; i++){

    if(CatalogueMatrix[i][1] == filter.toString()){
      content +=
    "<a href='Product.html' class='product-item' "+
    "onclick='SaveProductInfo(" + i + ")'" +
    "style='background-image: url(Assets/images/"+CatalogueMatrix[i][2]+");'>"+
      "<h1>"+CatalogueMatrix[i][4]+"</h1>"+
      "<div class='product-item-bottom'>"+
        "<h1>"+CatalogueMatrix[i][0]+"</h1>"+
        "<h2>R"+(CatalogueMatrix[i][3]).toString()+"</h2>"+
      "</div>"+
    "</a>";
    } 
  }
  catalogueGrid.innerHTML = content;
};

const CatalogueTypeFilter = (filter)=>{
  let content ="";

  if( filter === 'All furniture'){
    for(let i=0; i < CatalogueMatrix.length; i++){
      content +=
      "<a href='Product.html' class='product-item' "+
      "onclick='SaveProductInfo(" + i + ")'" +
      "style='background-image: url(Assets/images/"+CatalogueMatrix[i][2]+");'>"+
       "<h1>"+CatalogueMatrix[i][4]+"</h1>"+
       "<div class='product-item-bottom'>"+
         "<h1>"+CatalogueMatrix[i][0]+"</h1>"+
         "<h2>R"+(CatalogueMatrix[i][3]).toString()+"</h2>"+
       "</div>"+
     "</a>"; 
    }
  }
  else{
    for(let i=0; i < CatalogueMatrix.length; i++){
      if(CatalogueMatrix[i][4] == filter){
        content +=
        "<a href='Product.html' class='product-item' "+
        "onclick='SaveProductInfo(" + i + ")'" +
        "style='background-image: url(Assets/images/"+CatalogueMatrix[i][2]+");'>"+
        "<h1>"+CatalogueMatrix[i][4]+"</h1>"+
        "<div class='product-item-bottom'>"+
          "<h1>"+CatalogueMatrix[i][0]+"</h1>"+
          "<h2>R"+(CatalogueMatrix[i][3]).toString()+"</h2>"+
        "</div>"+
      "</a>";
      }
    }
  }
  catalogueGrid.innerHTML = content;
};

//change buttons according to what is selected
const SetButtonState = (button)=>{
  let targets1 = document.querySelectorAll('#catalogue-category-items h2');
  let targets2 = document.querySelectorAll('#catalogue-stores h2');
  for (let i = 0; i < targets1.length; i++) {
    targets1[i].style = 'color: #b9b9b9;'; 
  }
  for (let i = 0; i < targets2.length; i++) {
    targets2[i].style = 'color: #b9b9b9;';
  }
  button.style = 'color: #FFB540;'; 
};

//change heading according to filter
const UpdateHeading = (element)=>{
  document.querySelector('#catalogue-heading').innerHTML = element;
}


window.addEventListener('load',()=>{
  CatalogueTypeFilter('All furniture');
  SetButtonState(allFurnitureButton);
  UpdateHeading('ALL FURNITURE');
});

stoolButton.addEventListener('click',()=>{
  CatalogueTypeFilter('Stool');
  SetButtonState(stoolButton);
  UpdateHeading('STOOLS');
});

couchButton.addEventListener('click',()=>{
  CatalogueTypeFilter('Couch');
  SetButtonState(couchButton);
  UpdateHeading('COUCHES')
});

tableButton.addEventListener('click',()=>{
  CatalogueTypeFilter('Table');
  SetButtonState(tableButton);
  UpdateHeading('TABLES')
});

allFurnitureButton.addEventListener('click',()=>{
  CatalogueTypeFilter('All furniture');
  SetButtonState(allFurnitureButton);
  UpdateHeading('ALL FURNITURE');
});

coricraftButton.addEventListener('click',()=>{
  CatalogueCompanyFilter('coricraft');
  SetButtonState(coricraftButton);
  UpdateHeading('coricraft');
});

homeButton.addEventListener('click',()=>{
  CatalogueCompanyFilter('@Home');
  SetButtonState(homeButton);
  UpdateHeading('@Home');
});

studioButton.addEventListener('click',()=>{
  CatalogueCompanyFilter('Africa Queen Studio');
  SetButtonState(studioButton);
  UpdateHeading('Africa Queen Studio');
});