var logIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    if (email == "") {
        alert("Please enter an email!");
        email.focus();
        return false;
    }
    if (password == "") {
        alert("Please enter a password!");
        password.focus();
        return false;
    }
    else {
        console.log(email);
        console.log(password);
    }
    return true;
}