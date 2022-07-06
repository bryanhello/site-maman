function sendEmail(){
    var tempParams = {
        from_name: document.getElementById("toName").value,
        from_surname: document.getElementById("toSurname").value,
        from_text: document.getElementById("toText").value,
        from_email: document.getElementById("toEmail").value,
        from_phone_number: document.getElementById("phoneNumber").value,
    };
    emailjs.send("email","template_t96z2iw", tempParams)
    .then(function(res){
        console.log('succes', res.status)
    })
}