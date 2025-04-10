function checkUsername() {
    const uname = document.getElementById('username').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const users = JSON.parse(xhr.responseText);
        const exists = users.some(u => u.username === uname);
        document.getElementById('userMsg').innerText = exists ? 'Username already taken' : 'Username available';
      }
    };
    xhr.send();
  }
  
  function validatePassword() {
    const p1 = document.getElementById('password').value;
    const p2 = document.getElementById('repassword').value;
    document.getElementById('passMsg').innerText = p1 === p2 ? '' : 'Passwords do not match';
  }
  
  function suggestCollege() {
    const input = document.getElementById('college').value.toLowerCase();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'colleges.json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const colleges = JSON.parse(xhr.responseText);
        const suggestions = colleges.filter(c => c.toLowerCase().includes(input));
        document.getElementById('suggestions').innerText = suggestions.join(', ');
      }
    };
    xhr.send();
  }
  
  function registerUser(event) {
    event.preventDefault();
    const uname = document.getElementById('username').value;
    const p1 = document.getElementById('password').value;
    const p2 = document.getElementById('repassword').value;
  
    if (p1 !== p2) {
      document.getElementById('passMsg').innerText = 'Passwords do not match!';
      return false;
    }
  
    // Simulate registration success
    document.getElementById('resultMsg').innerText = "Successfully Registered";
    return false;
  }  