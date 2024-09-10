function get_data(table_name, primary_key){
    let headers = new Headers();
    headers.append('Origin', '*');
    fetch("https://oyq9jvb6p9.execute-api.us-east-1.amazonaws.com/techmark-dynamodb", {
      mode: 'cors',
      headers: headers,
      "method": "POST",
      "body": JSON.stringify({
        "method": "get",
        "table_name": table_name,
        "primary_key": primary_key
      })
    }).then(response => {
        if (!response.ok) {
          location = "auth-offline.html";
        }
        return response.json();
      })
      .then(data => {
        return data
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
            console.log(data)
        }
    }).catch(error => {
        location = "auth-offline.html";
    });
}