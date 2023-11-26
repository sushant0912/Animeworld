document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    
    localStorage.setItem(username, password);
    alert('Registration successful!');
    this.reset();
    window.location.href = 'homepage.html';
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      alert('Login successful!');
      window.location.href ='mainmenu.html';
    } else {
      alert('Invalid username or password.');
    }
  });