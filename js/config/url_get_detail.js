const urlParams = new URLSearchParams(window.location.search);
const parfumeId = urlParams.get('_id');

export let urlFetch = "https://tb-parfume2024-34a7b650de40.herokuapp.com/parfume/update/" + parfumeId;