import { urlAPI,  } from "../config/url.js";

document
  .getElementById("button")
  .addEventListener("click", async function (event) {
    event.preventDefault();
   
    const merk = document.getElementById("merk").value;
    const nama_parfume = document.getElementById("nama_parfume").value;
    const jenis_parfume = document.getElementById("jenis_parfume").value;
    const ukuran = document.getElementById("ukuran").value;
    const deskripsi = document.getElementById("deskripsi").value;
    const stok = document.getElementById("stok").value;
    const harga = document.getElementById("harga").value;


    try {
      await postData(
        merk,
        nama_parfume,
        jenis_parfume,
        ukuran,
        deskripsi,
        stok,
        harga
      );
    } catch (error) {
      console.error("Error updating parfume:", error);
      Swal.fire({
        icon: "error",
        title: "Error updating parfume",
        text: error.message,
      });
    }
  });

async function postData(
    merk,
    nama_parfume,
    jenis_parfume,
    ukuran,
    deskripsi,
    stok,
    harga
    
) {
    const apiUrl = "http://127.0.0.1:8080/update/";
  const parfumeID = localStorage.getItem("parfumeId");
  const url =  apiUrl + `${parfumeID}`;

  const newData = {
    merk: merk,
    nama_parfume: nama_parfume,
    jenis_parfume: jenis_parfume,
    ukuran: ukuran,
    deskripsi: deskripsi,
    stok: parseInt(stok),
    harga: parseInt(harga),

  };

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then(handleResponse) 
    .catch(handleError); 
}
function handleResponse(response) {
  if (!response.ok) {
    return response.json().then((data) => {
      throw new Error(data.message || "Network response was not ok");
    });
  }
  return response.json().then((data) => {
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Data berhasil ditambahkan",
      confirmButtonText: "Lihat Dashboard",
      showCancelButton: true,
      cancelButtonText: "Tetap di Halaman Ini",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "dashboard.html";
      }
    });
  });
}

function handleError(error) {
  console.error("Error:", error);
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: error.message,
  });
}