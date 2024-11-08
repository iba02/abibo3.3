// This script will be injected into the Salesforce login page
(function() {
  // Function to fill in the login form
  function fillLoginForm(username, password) {
    // Find the username and password input fields
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const loginButton = document.getElementById('Login'); // Adjust if the button ID is different

    // Check if the fields exist
    if (usernameField && passwordField && loginButton) {
      // Fill in the username and password
      usernameField.value = username;
      passwordField.value = password;

      // Click the login button
      loginButton.click();
    } else {
      console.error("Login fields not found.");
    }
  }

  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fillLoginForm") {
      fillLoginForm(request.username, request.password);
      sendResponse({ status: "success" });
    }
  });
})();
