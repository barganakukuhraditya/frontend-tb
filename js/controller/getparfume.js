import { urlAPI } from "../config/url.js";
document.addEventListener("DOMContentLoaded", async () => {
    try {
      const parfume = await getparfumeById(); 
      if (parfume) {
        document.getElementById("merk").value = parfume.merk;
        document.getElementById("nama_parfume").value = parfume.nama_parfume;
        document.getElementById("jenis_parfume").value = parfume.jenis_parfume;
        document.getElementById("ukuran").value = parfume.ukuran;
        document.getElementById("deskripsi").value = parfume.deskripsi;
        document.getElementById("stok").value = parfume.stok;
        document.getElementById("harga").value = parfume.harga;

      }
    } catch (error) {
      console.error("Error loading task data:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  });

  async function getparfumeById() {
    const parfumeID = localStorage.getItem("parfumeId");
    if (!parfumeID) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No parfume ID found.",
      });
      return;
    }
  
    const url = urlAPI + `/${parfumeID}`;
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return data; // Return the task data
    } catch (error) {
      console.error("Error fetching PERFUME data:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to fetch task",
        text: error.message,
      });
    }
  }
  