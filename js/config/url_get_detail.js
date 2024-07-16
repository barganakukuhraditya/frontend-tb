const urlParams = new URLSearchParams(window.location.search);
const ParfumeId = urlParams.get('ParfumeId');

export let urlFetch = "https://tb-parfume2024-34a7b650de40.herokuapp.com/parfume/" + ParfumeId;