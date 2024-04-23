const loginForm = document.getElementById('login-form');
const statusMessage = document.createElement('div');
statusMessage.classList.add('status-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const data = { name, email, password };

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      // Successful login
      statusMessage.textContent = 'Login successful!';
      statusMessage.classList.add('success');
      loginForm.insertAdjacentElement('beforebegin', statusMessage);
      // Optional: Redirect to a different page or perform additional actions
    } else if (response.status === 401 || response.status === 403) {
      // Unauthorized or Forbidden
      statusMessage.textContent = 'Invalid credentials. Please try again.';
      statusMessage.classList.add('error');
      loginForm.insertAdjacentElement('beforebegin', statusMessage);
    } else {
      // Other error
      throw new Error('An error occurred during login. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    statusMessage.textContent = error.message;
    statusMessage.classList.add('error');
    loginForm.insertAdjacentElement('beforebegin', statusMessage);
  });
});