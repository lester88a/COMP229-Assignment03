function validateForm()
{
    var result = true;//assume the form is correct
    var form = document.getElementById("theForm");
    var values = "";
    //display each field element values
    for (var i = 1; i < form.elements.length; i++)
    {
        values += "Field[ " + i + " ] " + "= " + form.elements[i].value + "\n";
    }
    //output field values
    alert(values);
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //first name cannot be blank
    //var firstName = form.elements[0].value;
    //if (firstName == "" || firstName==null) {
    //    alert("First name cannot be empty!");
    //    result = false;
    //}
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //check each fields cannot be blank
    for (var i = 1; i < form.elements.length-2; i++)
    {
        if (form.elements[i].value == "" || form.elements[i].value == null)
        {
            alert("The field [ " + i + " ]: " + form.elements[i].id + " cannot be empty!");
            result = false;
        }
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //check postal code format
    var postalCode = document.getElementById("txtPostalCode");
    var postalCodeFormat = /^([A-Za-z][0-9][A-Za-z])\s*([0-9][A-Za-z][0-9])$/;
    if (postalCodeFormat.test(postalCode.value))
    {
        result = true;
    }
    else {
        alert("Error!!!\n Your Postal Code format is Incorrect!");
        result = false;
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //check age format
    var age = document.getElementById("txtAge");
    if (age.value < 18)
    {
        alert("Error!!!\n Your age must be grater than 18 years old.");
        result = false;
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //check email format
    var email = document.getElementById("txtEmail");
    var emailFormat = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (emailFormat.test(email.value))
    {
        result = true;
    }
    else
    {
        alert("Error!!!\n Your E-mail address format is Incorrect!")
        result = false;
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //check if password and confirm password match are not
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirmPassword");
    if (password.value != confirm.value)
    {
        alert("Error!\n Your confirm password not match the password.");
        result = false;
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //check the passwords must have at least 6 characters and must contain 
    //at least one digit and one upper-case character
    var passwordFormat = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
    if (passwordFormat.test(password.value)) {
        result = true;
    }
    else {
        alert("Error!!!\n Your password format is Incorrect! \n must have at least 6 characters and must contain at least one digit and one upper-case character.")
        result = false;
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    return result;
}

