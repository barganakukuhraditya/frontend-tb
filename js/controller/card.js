import { urlAPI } from "../config/url.js";

function fetchDataFromEndpoint() {
  const url = urlAPI;
  
  // Debugging log
  console.log("Fetching data from URL:", url);

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
      // Debugging log
      console.log("Data received from API:", data);
      
      if (!Array.isArray(data)) {
        throw new Error("Data received is not an array");
      }
      updateProductCards(data);
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

function updateProductCards(data) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = ''; // Clear existing content

  data.forEach(product => {
    const randomImageUrl = getRandomImageUrl(imageUrls);
    const productCard = `
      <div class="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-b from-gray-700 to-gray-900 dark:border-gray-700 m-2">
          <a href="#">
              <img class="p-4 rounded-t-lg" src="${randomImageUrl}" alt="product image" />
          </a>
          <div class="px-4 pb-4">
              <a href="#">
                  <h5 id="nama_parfume" class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">${product.nama_parfume}</h5>
              </a>
              <div class="flex items-center mb-1">
                  <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  </div>
                  <p id="merk" class="text-sm font-semibold text-gray-400">${product.merk}</p>
                  <span id="ukuran" class="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">${product.ukuran}</span>
              </div>
              <p id="tipe_parfume" class="text-xs text-gray-500 ">${product.jenis_parfume}</p>
              <p id="deskripsi" class="text-xs text-white ">${product.deskripsi}</p>
              <div class="flex items-center justify-between">
                  <span id="harga" class="text-2xl font-bold text-gray-900 dark:text-white">$${product.harga},00</span>
                  <a id="stok" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">stock: ${product.stok}</a>
              </div>
          </div>
      </div>
    `;
    productContainer.innerHTML += productCard;
  });
}


fetchDataFromEndpoint();
