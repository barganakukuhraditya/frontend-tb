const urlParams = new URLSearchParams(window.location.search);
const ParfumeId = urlParams.get('ParfumeId');

export let urlPUT = "https://tb-parfume2024-34a7b650de40.herokuapp.com/parfume/update/" + ParfumeId;

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "dashboard.html"; //reload halaman setelah klik ok pada alert
}