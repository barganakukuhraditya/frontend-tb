export function isiData(results) {  
    const inputMapping = [
      { id: 'merk', path: 'merk' },
      { id: 'nama_parfume', path: 'nama_parfume' },
      { id: 'jenis_parfume', path: 'jenis_parfume' },
      { id: 'ukuran', path: 'ukuran' },
      { id: 'deskripsi', path: 'deskripsi' },
      { id: 'tahun_peluncuran', path: 'tahun_peluncuran' },
      { id: 'stok', path: 'stok' },
      { id: 'harga', path: 'harga' },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
}
  
function getNestedValue(obj, path, index, property) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
    // console.log(`Value at path ${path}:`, value);
  
    if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
      return value[index][property];
    }
  
    return value;
}