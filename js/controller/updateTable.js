
  
export function updateTable(parfumes) {
    const tableBody = document.getElementById("iniId");
    tableBody.innerHTML = "";
  
    if (!Array.isArray(parfumes) || parfumes.length === 0) {
      tableBody.innerHTML = "<tr><td colspan='8'>No data available</td></tr>";
      return;
    }
  
    parfumes.forEach((parfume) => {
      const row = `<tr>
        <td class="px-6 py-4">${parfume.merk}</td>
        <td class="px-6 py-4">${parfume.nama_parfume}</td>
        <td class="px-6 py-4">${parfume.jenis_parfume}</td>
        <td class="px-6 py-4">${parfume.ukuran}</td>
        <td class="px-6 py-4">${parfume.deskripsi}</td>
        <td class="px-6 py-4">${parfume.stok}</td>
        <td class="px-6 py-4">${parfume.harga}</td>
        <td class="px-6 py-4">
          <div class="dropdown">
            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
              <i class="bx bx-dots-vertical-rounded"></i>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="javascript:void(0);" onclick="editTask('${parfume._id}')">
                <i class="bx bx-edit-alt me-1"></i> Edit
              </a>
              <a class="dropdown-item" href="javascript:void(0);" onclick="deleteTask('${parfume._id}')">
                <i class="bx bx-trash me-1"></i> Delete
              </a>
            </div>
          </div>
        </td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  }
  window.deleteTask = function (parfumeID) {
    const url = "https://tb-parfume2024-34a7b650de40.herokuapp.com/parfume/" + `delete/${parfumeID}`; // Sesuaikan dengan basis URL API Anda

    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Tugas ini akan dihapus secara permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus saja!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            { id: parfumeID }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok.");
            }
            return response.json();
          })
          .then(() => {
            Swal.fire("Dihapus!", "Tugas Anda telah dihapus.", "success").then(() => {
              window.location.reload(true);
            }
            );
            
            // window.location.reload(true);
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
            });
          });
      }
    });
  };


window.editTask = function (parfumeId) {
  localStorage.setItem("parfumeId", parfumeId);
  window.location.href = "editproduct.html";
};

