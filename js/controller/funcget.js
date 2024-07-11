import { urlAPI,  } from "../config/url.js";
import { updateTable } from "./updateTable.js";
 function fetchDataFromEndpoint() {
    const url = urlAPI;
  
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("Data received is not an array");
        }
        updateTable(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        Swal.fire({
          icon: "warning",
          title: "Perhatian!",
          text: error.message,
        });
      });
  }

  fetchDataFromEndpoint();