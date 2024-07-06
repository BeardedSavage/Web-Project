function userForm() {
    var email = document.getElementById ("email");
    var password = document.getElementById ("password");
    if (email.value==""){
        alert("Please enter an email");
        email.focus();
        return false;
    }
    if (password.value==""){
        alert("Please set a password");
        password.focus();
        return false;
    }
    return true;
}