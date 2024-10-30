// app.js
const resultDiv = document.getElementById('result');
const userForm = document.getElementById('userForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  resultDiv.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
});