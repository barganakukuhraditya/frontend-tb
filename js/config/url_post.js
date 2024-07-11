export let urlPOST = "https://tb-parfume2024-34a7b650de40.herokuapp.com/insert"
export let urlPOSTDATA = "http://127.0.0.1:8080/insert";

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.reload(); //reload halaman setelah klik ok pada alert
}