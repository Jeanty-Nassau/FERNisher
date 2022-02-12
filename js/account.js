

var goToLoginPage = document.querySelector('#login-button');
var goToRegisterPage = document.querySelector('#register-button');
var backToRegisterPage = document.querySelector('#login-form h2');
var backToLoginPage = document.querySelector('#register-form h2');
var defaultUser = ['Stuart','name@dummy.com','12345'];
var logoutButton = document.querySelector('#logout-button');
var registerButton = document.querySelector('#register-form #register-button');
var loginButton = document.querySelector('#login-form #login-button');

const HideElements = (element)=>{
  let target = document.querySelector(element);
  target.style = 'display:none; z-index:0;';
}

const ShowElements=(element)=>{
  let target = document.querySelector(element);
  target.style ='display:flex;z-index:100;';
}

//check if the user exists
const UserExists = (element1,element2) =>{
  var userEmail = document.querySelector(element1).value;
  var userPassword = document.querySelector(element2).value;
console.log(userEmail+ ' '+ userPassword);
  let flag = '' ;
  let tempArray = [];
  tempArray = JSON.parse(sessionStorage.getItem('user-matrix'));;
  if (tempArray == null) {
    flag =  'user does not exist';
    sessionStorage.setItem('user-matrix',JSON.stringify([defaultUser]));
    console.log('session storage update due to tempArray null');
  } 
  else{
    for (let i = 0; i < tempArray.length; i++) {//traverse loop
      if (tempArray[i][1] === userEmail && tempArray[i][2] === userPassword) { //check if combination exists
        flag = 'user exists';
        break;//if true then break
      }
      else if (tempArray[i][1] == userEmail){
        flag = 'incorrect username and password combination';//if not update partially
        break;
      }
      else{
        flag = 'user does not exist';
      }
    }
  }

    return flag;
}


const RegisterUser = ()=>{
  let userEmail = document.querySelector('#register-email').value;
  let userPassword = document.querySelector('#register-password').value;
  let userName = document.querySelector('#register-name').value;
  console.log(UserExists('#register-email','#register-password'));
  let tempArray1 = [];
  if(UserExists('#register-email','#register-password') == 'user does not exist'){
    tempArray1 = JSON.parse(sessionStorage.getItem('user-matrix'));
    tempArray1.unshift([userName,userEmail,userPassword]);
    sessionStorage.setItem('user-matrix',JSON.stringify(tempArray1));
    console.log('user registered');
    HideElements('#login-section');
    HideElements('#register-section');
    HideElements('#account-section1');
    ShowElements('#account-section2');
    document.querySelector('#account-section2 #account-form h1').innerHTML = 'Welcome '+userName;
    sessionStorage.setItem('login',username);
  }
                 
}


const LoginUser = ()=>{
  let userEmail = document.querySelector('#login-email').value;
  let userName;
  let tempString ='';
  let tempArray1 =[];
  tempArray1 = JSON.parse(sessionStorage.getItem('user-matrix'));
  tempString = UserExists('#login-email','#login-password');
  if(tempArray1.length == 1 ){
    tempString = 'user exists';
  }
  if( UserExists('#login-email','#login-password') != 'user exists' ){
    alert('incorrect email and password combination');
  }
  else{
    //get username
    tempArray1 = JSON.parse(sessionStorage.getItem('user-matrix'));
    for (let i = 0; i < tempArray1.length; i++){
      if(tempArray1[i][1] == userEmail){
        userName = tempArray1[i][0];
        break;
      }
    }
    HideElements('#login-section');
    HideElements('#register-section');
    HideElements('#account-section1');
    ShowElements('#account-section2');
    document.querySelector('#account-section2 #account-form h1').innerHTML = 'Welcome '+ userName;
    sessionStorage.setItem('login',userName);
  }
}

//check if inputs are empty
const isEmpty=(element)=>{
  let query = '#'+element +'-form input';
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


goToLoginPage.addEventListener('click',()=>{
  HideElements('#account-section1');
  HideElements('#account-section2');
  HideElements('#register-section');
  ShowElements('#login-section');
  console.log('button clicked');
});

goToRegisterPage.addEventListener('click',()=>{
  HideElements('#account-section1');
  HideElements('#login-section');
  HideElements('#account-section2');
  ShowElements('#register-section');
  console.log('button clicked');
});

//link on register page
backToLoginPage.addEventListener('click',()=>{
  HideElements('#account-section1');
  HideElements('#register-section');
  HideElements('#account-section2');
  ShowElements('#login-section');
  console.log('button clicked');
});

//link on login page
backToRegisterPage.addEventListener('click',()=>{
  HideElements('#account-section1');
  HideElements('#login-section');
  HideElements('#account-section2');
  ShowElements('#register-section');
  console.log('button clicked');
});

//button on register page
registerButton.addEventListener('click',()=>{
  if(isEmpty('register')== true){
    alert('complete all fields!');
  }else{
    RegisterUser();
  }
  
});

//button on login page
loginButton.addEventListener('click',()=>{
  if(isEmpty('login')== true){
    alert('complete all fields!');
  }
  else{
    LoginUser();
  }
  
});


logoutButton.addEventListener('click',()=>{
  HideElements('#account-section2');
  HideElements('#login-section');
  HideElements('#register-section');
  ShowElements('#account-section1');
  sessionStorage.removeItem('login');
});


window.addEventListener('load',()=>{
  let login = sessionStorage.getItem('login');
  if(login != null ){
    HideElements('#login-section');
    HideElements('#register-section');
    HideElements('#account-section1');
    ShowElements('#account-section2');
    document.querySelector('#account-section2 #account-form h1').innerHTML = 'Welcome '+ login;
  }
  else{
    HideElements('#account-section2');
    HideElements('#login-section');
    HideElements('#register-section');
    ShowElements('#account-section1');
  }
});