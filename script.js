const inputValue = document.getElementById("inputTask");
const inputDate = document.getElementById("inputDate");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function(){
    const taskText = inputValue.value;
    const taskDate = inputDate.value;

    if (taskText === "" || taskDate === "") {
        alert("Tugas dan Tanggal tidak boleh kosong!");
        return;
    }

    tambahTugasKeDOM(taskText, taskDate, "Progress");

    // Reset input
    inputValue.value = "";
    inputDate.value = "";
    inputValue.focus();
});

function tambahTugasKeDOM(teks, tanggal, status) {
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="task-info">
            <span class="task-text"><strong>${teks}</strong></span>
            <small>Deadline: ${tanggal}</small>
            <span class="status-badge ${status.toLowerCase()}">${status}</span>
        </div>
        <div class="actions">
            <button onclick="ubahStatus(this)" style="background: #eab308; color: white;">Status</button>
            <button onclick="editTugas(this)" style="background: #3b82f6; color: white;">Edit</button>
            <button onclick="hapusTugas(this)" style="background: #ef4444; color: white;">Hapus</button>
        </div>
    `;

    daftarTugas.appendChild(li);
}

    const listbaru = document.createElement("li")
    const span = document.createElement("span")
    span.innerHTML = inputValue.value;

   listbaru.appendChild(span);
   daftarTugas.appendChild(listbaru)

   inputValue.value ="";
   inputValue.focus();
    








