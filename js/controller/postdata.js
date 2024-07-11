const button = document.getElementById("button");
button.addEventListener("click", () => {
    const brand = document.getElementById("merk").value;
    const nama_parfume = document.getElementById("nama_parfume").value;
    const harga = document.getElementById("harga").value;
    const jenis_parfume = document.getElementById("jenis_parfume").value;
    const size = document.getElementById("ukuran").value;
    const stok = document.getElementById("stok").value;
    const deskripsi = document.getElementById("deskripsi").value;

    const data = {
        merk: brand,
        nama_parfume: nama_parfume,
        harga: parseInt(harga),
        jenis_parfume: jenis_parfume,
        ukuran: size,
        stok: parseInt(stok),
        deskripsi: deskripsi,
    };

    const url = "http://127.0.0.1:8080/insert";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
});