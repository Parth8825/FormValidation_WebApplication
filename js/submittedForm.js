window.onload = function(){
    saveData();
}


function saveData(){
    
    var name = localStorage.getItem('nameObject');
    var address = localStorage.getItem('addressObject'); 
    var city = localStorage.getItem('cityObject'); 
    var province = localStorage.getItem('provinceObject');
    var postalcode = localStorage.getItem('postalCodeObject');
    var phonenumber = localStorage.getItem('phoneNumberObject');
    var email = localStorage.getItem('emailObject');  
    var make = localStorage.getItem('makeObject');
    var model = localStorage.getItem('modelObject');
    var year = localStorage.getItem('yearObject'); 

    const userData = {
        name: name,
        address: address,
        city: city,
        province: province,
        postalcode: postalcode,
        phonenumber: phonenumber,
        email: email,
        make: make,
        model: model,
        year: year
    }

    localStorage.setItem('userDataObject', JSON.stringify(userData));


    // generating the link
    var link = "http://www.jdpower.com/cars/";
    link = link + year +"/" + make +"/" + model;

    document.getElementById('name').value = userData.name;
    document.getElementById('address').value = userData.address;
    document.getElementById('city').value = userData.city;
    document.getElementById('province').value = userData.province;
    document.getElementById('postalCode').value = userData.postalcode;
    document.getElementById('phoneNumber').value = userData.phonenumber;
    document.getElementById('email').value = userData.email;
    document.getElementById('make').value = userData.make;
    document.getElementById('model').value = userData.model;
    document.getElementById('year').value = userData.year;

    var findlink = document.getElementById("myLink");
    findlink.href = link;
    findlink.innerHTML = link;
}

