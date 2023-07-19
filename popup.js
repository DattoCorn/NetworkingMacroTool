// Initialize Firebase with your project's configuration
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    // Add more Firebase config properties here
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firebase Authentication service
  var auth = firebase.auth();
  
  // Function to handle user login
  function loginUser(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        // User logged in successfully
        var user = userCredential.user;
        document.getElementById("userEmail").textContent = "Logged in as: " + user.email;
        showLoggedInUI();
      })
      .catch(function (error) {
        // Handle login error
        console.error("Login error:", error);
      });
  }
  
  // Function to handle user sign up
  function signUpUser(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        // User signed up successfully
        var user = userCredential.user;
        document.getElementById("userEmail").textContent = "Logged in as: " + user.email;
        showLoggedInUI();
      })
      .catch(function (error) {
        // Handle sign up error
        console.error("Sign up error:", error);
      });
  }
  
  // Function to handle user log out
  function logoutUser() {
    auth.signOut()
      .then(function () {
        // User logged out successfully
        showAuthUI();
      })
      .catch(function (error) {
        // Handle log out error
        console.error("Logout error:", error);
      });
  }
  
  // Function to show the login/signup UI
  function showAuthUI() {
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("signupContainer").style.display = "block";
    document.getElementById("loggedInContainer").style.display = "none";
  }
  
  // Function to show the logged in UI
  function showLoggedInUI() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("loggedInContainer").style.display = "block";
  }
  
  // Add event listener for the login button
  document.getElementById("loginBtn").addEventListener("click", function () {
    var email = document.getElementById("emailInput").value.trim();
    var password = document.getElementById("passwordInput").value;
    if (email !== "" && password !== "") {
      loginUser(email, password);
    }
  });
  
  // Add event listener for the signup button
  document.getElementById("signupBtn").addEventListener("click", function () {
    var email = document.getElementById("signupEmailInput").value.trim();
    var password = document.getElementById("signupPasswordInput").value;
    if (email !== "" && password !== "") {
      signUpUser(email, password);
    }
  });
  
  // Add event listener for the logout button
  document.getElementById("logoutBtn").addEventListener("click", function () {
    logoutUser();
  });
  
  // Check if a user is already logged in
  auth.onAuthStateChanged(function (user) {
    if (user) {
      // User is logged in
      document.getElementById("userEmail").textContent = "Logged in as: " + user.email;
      showLoggedInUI();
    } else {
      // User is not logged in
      showAuthUI();
    }
  });
  