//David Molina Challenge 3
function generatePassword() {
    var length = parseInt(prompt("How long do you want your password to be (between 8 and 128 characters)?"));
  
    
    if (isNaN(length) || length < 8 || length > 128) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return;
    }
  
    var useLowercase = confirm("Do you want to include lowercase letters?");
    var useUppercase = confirm("Do you want to include uppercase letters?");
    var useNumbers = confirm("Do you want to include numbers?");
    var useSpecialChars = confirm("Do you want to include special characters?");
  
    if (!useLowercase && !useUppercase && !useNumbers && !useSpecialChars) {
        alert("You must select at least one type of character.");
        return;
    }
  
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    var allowedChars = "";
    if (useLowercase) allowedChars += lowercaseChars;
    if (useUppercase) allowedChars += uppercaseChars;
    if (useNumbers) allowedChars += numericChars;
    if (useSpecialChars) allowedChars += specialChars;
  
    var password = "";
  
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars.charAt(randomIndex);
    }
  
    return password;
  }
  
  document.getElementById("generate").addEventListener("click", function () {
    var password = generatePassword();
    if (password) {
        alert("Your Password: " + password);
    }
  });
  //trouble having it display on the actual site 
  //will fix later
  