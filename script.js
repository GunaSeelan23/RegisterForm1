

function one() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;


    var formstatus = true;
    if (fname == "") {
        formstatus = false;
        document.getElementById("fname").style.borderColor = "red";
    }
    else {
        document.getElementById("fname").style.borderColor = "green";
    }

    if (lname == "") {
        formstatus = false;
        document.getElementById("lname").style.borderColor = "red";
    }
    else {
        document.getElementById("lname").style.borderColor = "green";
    }


    var mpattern = /^[6-9]\d{9}$/;
    if (!mpattern.test(number)) {
        formstatus = false;
        document.getElementById("number").style.borderColor = "red";
    }
    else {
        document.getElementById("number").style.borderColor = "green";
    }


    var epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!epattern.test(email)) {
        formstatus = false;
        document.getElementById("email").style.borderColor = "red";
    } else {
        document.getElementById("email").style.borderColor = "green";
    }

    if (pass == "" || pass.length < 6 || pass != pass) {
        formstatus = false;
        document.getElementById("pass").style.borderColor = "red";
    }
    else {
        document.getElementById("pass").style.borderColor = "green";
    }


    if (cpass == "" || cpass.length < 6 || cpass != cpass) {
        formstatus = false;
        document.getElementById("cpass").style.borderColor = "red";
    }
    else {
        document.getElementById("cpass").style.borderColor = "green";
    }


    if (formstatus == false) {
        document.getElementById("errormsg").innerText = "";
    }
    else {
        document.getElementById("errormsg").innerText = "";
    }
}