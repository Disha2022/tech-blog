async function loginFormHandler (event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler (event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);

function showSignUp (event) {
  event.preventDefault();
  document.querySelector('#login-form').style.display = 'none';
  document.querySelector('#signup-form').style.display = 'block';
}
document.querySelector('#signup-a').addEventListener('click', showSignUp);

function showLogin (event) {
  event.preventDefault();
  document.querySelector('#signup-form').style.display = 'none';
  document.querySelector('#login-form').style.display = 'block';
}
document.querySelector('#login-a').addEventListener('click', showLogin);
