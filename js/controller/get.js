import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTableParfume(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#MERK#", value.merk)
            .replace("#NAMAPARFUM#", value.nama_parfume)
            .replace("#JENIS#", value.jenis_parfume)
            .replace("#UKURAN#", value.ukuran)
            .replace("#DESKRIPSI#", value.deskripsi)
            .replace("#STOK#", value.stok)
            .replace("#HARGA#", value.harga)
        addInner("iniTabel", content);
}