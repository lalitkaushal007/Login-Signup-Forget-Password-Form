// Initialize the login box as active
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    document.getElementById('loginBox').classList.add('active');
  }, 100);
});

// Switch between forms
function switchToLogin() {
  const currentBox = document.querySelector('.box.active');
  const loginBox = document.getElementById('loginBox');
  
  if (currentBox && currentBox !== loginBox) {
    currentBox.classList.remove('active');
    currentBox.classList.add('switching-out');
    
    setTimeout(() => {
      currentBox.style.display = 'none';
      currentBox.classList.remove('switching-out');
      loginBox.style.display = 'flex';
      loginBox.classList.add('switching-in');
      
      setTimeout(() => {
        loginBox.classList.add('active');
        loginBox.classList.remove('switching-in');
      }, 50);
    }, 400);
  }
}

function switchToSignup() {
  const currentBox = document.querySelector('.box.active');
  const signupBox = document.getElementById('signupBox');
  
  if (currentBox && currentBox !== signupBox) {
    currentBox.classList.remove('active');
    currentBox.classList.add('switching-out');
    
    setTimeout(() => {
      currentBox.style.display = 'none';
      currentBox.classList.remove('switching-out');
      signupBox.style.display = 'flex';
      signupBox.classList.add('switching-in');
      
      setTimeout(() => {
        signupBox.classList.add('active');
        signupBox.classList.remove('switching-in');
      }, 50);
    }, 400);
  }
}

function switchToForgotPassword() {
  const currentBox = document.querySelector('.box.active');
  const forgotBox = document.getElementById('forgotPasswordBox');
  
  if (currentBox && currentBox !== forgotBox) {
    currentBox.classList.remove('active');
    currentBox.classList.add('switching-out');
    
    setTimeout(() => {
      currentBox.style.display = 'none';
      currentBox.classList.remove('switching-out');
      forgotBox.style.display = 'flex';
      forgotBox.classList.add('switching-in');
      
      setTimeout(() => {
        forgotBox.classList.add('active');
        forgotBox.classList.remove('switching-in');
      }, 50);
    }, 400);
  }
}

// Handle form submissions
function handleLogin() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  
  if (!username || !password) {
    showPopup('Login Failed', 'Please fill in all fields');
    return;
  }
  
  showPopup('Login Successful', `Welcome back, ${username}! 😊`);
  
  // Reset form
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
}

function handleSignup() {
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  
  if (!username || !email || !password) {
    showPopup('Signup Failed', 'Please fill in all fields');
    return;
  }
  
  if (password.length < 6) {
    showPopup('Signup Failed', 'Password must be at least 6 characters');
    return;
  }
  
  showPopup('Account Created!', `Welcome ${username}! 🎉`);
  
  // Reset form
  document.getElementById('signupUsername').value = '';
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPassword').value = '';
}

function handleResetPassword() {
  const email = document.getElementById('resetEmail').value;
  
  if (!email) {
    showPopup('Reset Failed', 'Please enter your email address');
    return;
  }
  
  if (!isValidEmail(email)) {
    showPopup('Reset Failed', 'Please enter a valid email address');
    return;
  }
  
  showPopup('Reset Link Sent', `Check ${email} for reset instructions 📧`);
  
  // Reset form
  document.getElementById('resetEmail').value = '';
}

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show success popup
function showPopup(title, message) {
  const popup = document.getElementById('successPopup');
  const popupTitle = document.getElementById('popupTitle');
  const popupMessage = document.getElementById('popupMessage');
  
  popupTitle.textContent = title;
  popupMessage.textContent = message;
  
  popup.classList.add('show');
  
  // Change emoji based on success/failure
  const emoji = document.querySelector('.emoji');
  if (title.includes('Successful') || title.includes('Created') || title.includes('Sent')) {
    emoji.textContent = '😊';
  } else {
    emoji.textContent = '😕';
  }
}

// Close popup
function closePopup() {
  const popup = document.getElementById('successPopup');
  popup.classList.remove('show');
}

// Close popup on ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closePopup();
  }
});

// Close popup when clicking outside
document.getElementById('successPopup').addEventListener('click', function(e) {
  if (e.target === this) {
    closePopup();
  }
});


