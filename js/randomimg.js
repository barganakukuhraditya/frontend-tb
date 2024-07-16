const imageUrls = [
    "https://www.minedot.com/cdn/shop/products/ethereal2catalog_800x.jpg?v=1705548885",
    "https://down-id.img.susercontent.com/file/bcc4b45664c45c0bbed4b4e04cabb193",
    "https://down-id.img.susercontent.com/file/b9aa1f89fd4fcabffb0cd610caf663a5",
    "https://down-id.img.susercontent.com/file/f5e356dc1f333f47e83b485471a63628",
    "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/116/MTA-159686936/no-brand_no-brand_full01.jpg",
    // Tambahkan URL gambar lain di sini
  ];

  let lastRandomIndex = -1; // Variabel untuk menyimpan index gambar terakhir

  function getRandomImageUrl(imageArray) {
    let randomIndex = Math.floor(Math.random() * imageArray.length);
    
    // Pastikan randomIndex tidak sama dengan lastRandomIndex
    while (randomIndex === lastRandomIndex) {
      randomIndex = Math.floor(Math.random() * imageArray.length);
    }
    
    // Simpan randomIndex sebagai lastRandomIndex untuk penggunaan selanjutnya
    lastRandomIndex = randomIndex;
  
    return imageArray[randomIndex];
  }
  
  function displayRandomImage() {
    const imageUrl = getRandomImageUrl(imageUrls);
    const imageElement = document.getElementById("randomImage");
  
    if (imageElement) {
      imageElement.src = imageUrl;
    }
  }
  
  // Panggil fungsi untuk menampilkan gambar secara acak saat halaman dimuat
  document.addEventListener("DOMContentLoaded", displayRandomImage);
  