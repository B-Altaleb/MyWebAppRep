document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Perform validation checks
    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
  
    // TODO: Send the user data to the server and handle account creation
    
    alert("Account created successfully!");
    document.getElementById("registration-form").reset(); // Reset form fields
  });
  