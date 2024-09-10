var payload;
function sendOTP(){
    var content = "Dear "+ payload["fullname"] +",\n\nYour OTP is "+ payload["code"] +"\nDo not share it with anyone by any means.\nCode is only valid for 5 minutes\n\nRegards,\nTechMark Team"
    fetch('https://5v7v92mmsd.execute-api.us-east-1.amazonaws.com/techmark-notifications',
    {
        method: "POST",
        body: JSON.stringify({
            "name": payload["fullname"],
            "to": payload["email"],
            "subject": "Verify your Email for TechMark",
            "content": content
        })
    }).then(response => {
        alert("OTP sent on "+ payload["email"])
    }).catch(error => {
        //handle error
        location = "auth-offline.html";
    });
}

function resendOTP(){
    payload["code"] = generateOTP();
    var content = "Dear "+ payload["fullname"] +",\n\nYour OTP is "+ payload["code"] +"\nDo not share it with anyone by any means.\nCode is only valid for 5 minutes\n\nRegards,\nTechMark Team"
    fetch('https://5v7v92mmsd.execute-api.us-east-1.amazonaws.com/techmark-notifications',
    {
        method: "POST",
        body: JSON.stringify({
            "name": payload["fullname"],
            "to": payload["email"],
            "subject": "Verify your Email for TechMark",
            "content": content
        })
    }).then(response => {
        alert("OTP resent on "+ payload["email"])
    }).catch(error => {
        //handle error
        location = "auth-offline.html";
    });
}

function generateOTP() { 
    // Declare a string variable  
    // which stores all string 
    var string = '0123456789'; 
    let OTP = ''; 
    // Find the length of string 
    var len = string.length; 
    for (let i = 0; i < 4; i++ ) { 
        OTP += string[Math.floor(Math.random() * len)]; 
    } 
    return OTP; 
  }

function signup(){
    payload = {
        "email": document.getElementById("email").value,
        "fullname": document.getElementById("fullname").value,
        "password": document.getElementById("password").value,
        "code": generateOTP()
    };
    document.getElementById("verification-email").innerHTML = payload["email"];
    var myModal = new bootstrap.Modal(document.querySelector('.bs-example-modal-center'), {
        backdrop: 'static', // Disable closing by clicking outside the modal
        keyboard: false     // Disable closing with the Esc key
    });
    myModal.show();
    sendOTP();
}

if(sessionStorage.getItem("code") != null){
    location = "index.html";
}

function login(){
    let headers = new Headers();
    headers.append('Origin', '*');
    fetch("https://oyq9jvb6p9.execute-api.us-east-1.amazonaws.com/techmark-dynamodb", {
      mode: 'cors',
      headers: headers,
      "method": "POST",
      "body": JSON.stringify({
        "method": "get",
        "table_name": "techmark-solutions",
        "primary_key": {
            "email": document.getElementById("email").value
        }
      })
    }).then(response => {
        if (!response.ok) {
          location = "auth-offline.html";
        }
        return response.json();
      })
      .then(data => {
        if(JSON.parse(data["body"])["error"] == "true"){
            location = "auth-500.html";
        }else{
            if(JSON.parse(data["body"])["data"] == null){
                document.getElementById("alert").innerHTML = "User Not Found";
            }else{
                if(atob(JSON.parse(data["body"])["data"]["userdata"]["password"]) == document.getElementById("password").value){
                    document.getElementById("alert").innerHTML = "Login Successfully";
                    sessionStorage.setItem("code", btoa(JSON.stringify(JSON.parse(data["body"])["data"])));
                    location = `index.html`;
                }else{
                    document.getElementById("alert").innerHTML = "Incorrect Password";
                }
            }
        }
      }).catch(error => {
        location = "auth-offline.html";
    });
}

function put_data(table_name, items){
    let headers = new Headers();
    headers.append('Origin', '*');
    fetch("https://oyq9jvb6p9.execute-api.us-east-1.amazonaws.com/techmark-dynamodb", {
      mode: 'cors',
      headers: headers,
      "method": "POST",
      "body": JSON.stringify({
        "method": "put",
        "table_name": table_name,
        "items": items
      })
    }).then(response => {
        if (!response.ok) {
          location = "auth-offline.html";
        }
        return response.json()
    }).then(data => {
        if(JSON.parse(data["body"])["error"] == "true"){
            location = "auth-500.html";
        }else{
            location = "auth-success.html";
        }
    }).catch(error => {
        location = "auth-offline.html";
    });
}

function verify(code){
    if(code==payload["code"]){
        const data = {
            "email": payload["email"],
            "userdata": {
                "fullname": payload["fullname"],
                "password": btoa(payload["password"]),
                "created": datetime()
            }
        }
        put_data("techmark-solutions", data);
    }else{
        console.log("failed")
        document.getElementById("alert").innerHTML = "Incorrect OTP";
    }
}

function datetime(){
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}