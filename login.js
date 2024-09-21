document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
     const phoneNumber = document.getElementById('phn-number').value;
     const password = document.getElementById('pass').value;
     if(phoneNumber==='01700539292' && password ==='1234'){
        console.log('Congratulation you are logged in');
        window.location.href='home.html';

     }
     else{
        alert('please enter the correct number and password');
     }
})