import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

function pushData() {
    let merk = getValue("merk");
    let namaParfume = getValue("nama_parfume");
    let jenisParfume = getValue("jenis_parfume");
    let ukuran = getValue("ukuran");
    let deskripsi = getValue("deskripsi");
    let tahunPeluncuran = getValue("tahun_peluncuran");
    let stok = getValue("stok");
    let harga = getValue("harga");

    // Array to hold error messages
    let errors = [];

    // Validate inputs and add errors to the array
    if (!merk.trim()) {
        errors.push('Brand is required');
    }

    if (!namaParfume.trim()) {
        errors.push('Parfume Name is required');
    }

    const validJenisParfume = ["Eau de Parfum", "Eau de Toilette"];
    if (!validJenisParfume.includes(jenisParfume)) {
        errors.push('Fragrance Type invalid');
    }

    if (!tahunPeluncuran.trim() || isNaN(tahunPeluncuran) || tahunPeluncuran.length !== 4 || parseInt(tahunPeluncuran) <= 0) {
        errors.push('A valid Launch Year (4 digits and positive number) is required');
    }

    if (!ukuran.trim() || isNaN(ukuran) || parseInt(ukuran) < 5) {
        errors.push('Size should be a positive number (greater than or equal to 5)');
    }

    if (!harga.trim() || isNaN(harga) || parseInt(harga) <= 0) {
        errors.push('Price should be a positive number (greater than or equal to 0)');
    }

    if (!stok.trim() || isNaN(stok) || parseInt(stok) <= 0) {
        errors.push('Stock should be a positive number (greater than or equal to 0)');
    }

    if (!deskripsi.trim()) {
        errors.push('Description is required');
    }

    // Check if there are any errors
    if (errors.length > 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: errors.join('<br>') // Join errors with line breaks
        });
        return;
    }

    // Create data object
    let data = {
        "merk": merk,
        "nama_parfume": namaParfume,
        "jenis_parfume": jenisParfume,
        "ukuran": ukuran,
        "deskripsi": deskripsi,
        "tahun_peluncuran": parseInt(tahunPeluncuran),
        "stok": parseInt(stok),
        "harga": parseInt(harga)
    };

    // Post data
    postData(urlPOST, data, AmbilResponse)
        .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Product added successfully!'
            });
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to add product. Please try again.'
            });
        });
}

onClick("button", pushData);
