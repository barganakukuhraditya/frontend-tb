const urlParams = new URLSearchParams(window.location.search);
const parfumeId = urlParams.get('_id');

export let urlPUT = "https://tb-parfume2024-34a7b650de40.herokuapp.com/parfume/update/" + parfumeId;

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}