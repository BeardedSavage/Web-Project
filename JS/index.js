function getName() {
    var name = prompt("What is your name?");
    var email = prompt("What is your email?");

    window.alert("Hello, " + name.slice(0,1).toUpperCase() + name.slice(1, name.length).toLowerCase());
    window.alert("We will send you all your updates about the server to " + email);
    console.log("Name: " + name.slice(0,1).toUpperCase() + name.slice(1, name.length).toLowerCase() + " Email: " + email);
}

function warning() {
    window.alert(
        "You are being redirected to another website. Thank you for visiting Outer-Rim servers."
    );
    console.log("Visitor clicked a social link and is was redirected.")
}