// Get a reference to the form so that we can set up an event handler
// for its submit event
var form = document.getElementById("frmTest");

// Now, set up a submit event handler for the form
form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();

});

function checkInputs(){
    var firstname = document.getElementById('firstname').value.trim();
    var lastname = document.getElementById('lastname').value.trim();
    var address = document.getElementById('address').value.trim();
    var city = document.getElementById('city').value.trim();
    var province = document.getElementById('province').value.trim();
    var postalCode = document.getElementById('postalCode').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var email = document.getElementById('email').value.trim();
    var make = document.getElementById('make').value.trim();
    var model = document.getElementById('model').value.trim();
    var year = document.getElementById('year').value.trim();
    var error = "";
    var name = firstname + " " + lastname;

    var postcoderegex = /^[A-Z][0-9][A-Z]\s[0-9][A-Z][0-9]$/;
    var phoneregex = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
    var emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(firstname ==='') {
        setErrorFor('sm', '* First name is required');
        error = "Name is required";
	} else {
        setErrorFor('sm', '');
	}
    if(lastname === '') {
        setErrorFor('sm0', '* Last name is required');
        error = "Name is required";
	} else {
        setErrorFor('sm0', '');
	}

    if(address === '')
    {
        setErrorFor('sm1', '* Address is required');
        error = "Address is required";
    }else{
        setErrorFor('sm1', '');
    }

    
    if(city === '')
    {
        setErrorFor('sm2', '* city is required');
        error = "city is required";
    }else{
        setErrorFor('sm2', '');
    }

    if(province === 'Select')
    {
        setErrorFor('sm3', '* province is required');
        error = "province is required";
    }else{
        setErrorFor('sm3', '');
    }

    if(postalCode === '')
    {
        setErrorFor('sm4', '* Postal Code is required');
        error = "Postal code is required";
    }else if(!postcoderegex.test(postalCode)){
        setErrorFor('sm4', '* Postal Code format X0X 0X0');
        error = "Postal code format";
    }else{
        setErrorFor('sm4', '');
    }

    if(phoneNumber === '')
    {
        setErrorFor('sm5', '* Phone Number is required');
        error = "Phone Number is required";
    }else if(!phoneregex.test(phoneNumber)){
        setErrorFor('sm5', '* Phone Number format 999-999-9999');
        error = "Phone Number format";
    }
    else{
        setErrorFor('sm5', '');
    }

    if(email === '')
    {
        setErrorFor('sm6', '* Email is required');
        error = "Email is required";
    }else if(!emailregex.test(email)){
        setErrorFor('sm6', '* Email is format myemail@email.com');
        error = "Email format";
    }
    else{
        setErrorFor('sm6', '');
    }

    if(make === '')
    {
        setErrorFor('sm7', '* Car Maker is required');
        error = "Car Maker is required";
    }else{
        setErrorFor('sm7', '');
    }

    if(model === '')
    {
        setErrorFor('sm8', '* Car Model is required');
        error = "Car Model is required";
    }else{
        setErrorFor('sm8', '');
    }

    if(year === '')
    {
        setErrorFor('sm9', '* Car year is required');
        error = "Car year is required";
    }else{
        setErrorFor('sm9', '');
    }

    if(error === ''){
        localStorage.setItem('nameObject', name);       
        localStorage.setItem('addressObject', address); 
        localStorage.setItem('cityObject', city); 
        localStorage.setItem('provinceObject', province);
        localStorage.setItem('postalCodeObject', postalCode);
        localStorage.setItem('phoneNumberObject', phoneNumber);
        localStorage.setItem('emailObject', email);  
        localStorage.setItem('makeObject', make); 
        localStorage.setItem('modelObject', model); 
        localStorage.setItem('yearObject', year); 
        var url = "../pages/submittedForm.html";
        window.location.href = url;
    }

}
function setErrorFor(inputID, message){
    document.getElementById(inputID).style.color = 'red';
    document.getElementById(inputID).innerHTML = message;
}