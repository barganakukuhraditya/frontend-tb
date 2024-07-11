export function postData(target_url,datajson,responseFunction){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(datajson);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(target_url, requestOptions)
    .then(response => response.json())
    .then(result => responseFunction(result))
    .catch(error => console.log('error', error));
}