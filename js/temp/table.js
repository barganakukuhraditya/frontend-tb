export let isiTabel=
`
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            #MERK#
        </th>
        <td class="px-6 py-4">
            #NAMAPARFUM#
        </td>
        <td class="px-6 py-4">
            #JENIS#
        </td>
        <td class="px-6 py-4">
            #UKURAN#
        </td>
        <td class="px-6 py-4">
            #DESKRIPSI#
        </td>
        <td class="px-6 py-4">
            #TAHUN#
        </td>
        <td class="px-6 py-4">
            #STOK#
        </td>
        <td class="px-6 py-4">
            #HARGA#
        </td>
        <td class="px-6 py-4">
            <a type="button" href="editproduct.html?ParfumeId=#IDEDIT#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> | 
            <a type="button" id="del_button" onclick="confirmDelete('#IDHAPUS#')" href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Hapus</a>
        </td>
    </tr>

`