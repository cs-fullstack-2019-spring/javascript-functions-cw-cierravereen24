
var password = prompt ("Please enter password")
var password2 = prompt ("please enter 2nd password")

function checkPassword(password, password2) {

    if (password === password2)
    {
        return true;
    }
    else
    {
        return false;
    }
}


console.log (checkPassword(password, password2))