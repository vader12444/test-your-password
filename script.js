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
