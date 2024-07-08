import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post.js";


function pushData(){
    let data = {
        "merk": getValue("merk"),
        "nama_parfume": getValue("nama_parfume"),
        "jenis_parfume": getValue("jenis_parfume"),
        "ukuran": getValue("ukuran"),
        "deskripsi": getValue("deskripsi"),
        "stok": getValue("stok"),
        "harga": getValue("harga")
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);