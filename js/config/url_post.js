export let urlPOST = "https://tb-parfume2024-34a7b650de40.herokuapp.com/insert"
export let urlPOSTDATA = "http://127.0.0.1:8080/insert";

export function AmbilResponse(result) {
    console.log(result); 
    alert(result.message); 
    window.location.href="dashboard.html"; 
}