var users = [
  { username: 'albertrobin', password: 'thala' },
  { username: 'arunesh', password: 'thala' },
  { username: 'balaji', password: 'thala' },
  { username: 'jeeva', password: 'thala' },
  { username: 'linga', password: 'thala' },
  { username: 'madhanagopal', password: 'thala' },
  { username: 'manoj', password: 'thala' },
  { username: 'naresh', password: 'thala' },
  { username: 'muthuram', password: 'thala' }
];



document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission action

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    

    
    for (let i = 0; i < users.length; i++) {
      if (username === users[i].username && password === users[i].password) {
      
           window.location.href = 'image.html'; // Redirect to image page
           
       
     } 
      if(username ===!users[i].username && password ===!users[i].password){
           alert('Invalid username or password');
        
    }
    
   }
});