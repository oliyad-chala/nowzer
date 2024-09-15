
function sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    comment : document.getElementById("comment").value,
  }

  emailjs.send("service_b7h3i1u" , "template_o1euzmm",parms).than(alert("Email sent!!"))

}