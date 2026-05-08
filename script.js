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

    const listbaru = document.createElement("li")
    const span = document.createElement("span")
    span.innerHTML = inputValue.value;

   listbaru.appendChild(span);
   daftarTugas.appendChild(listbaru)

   inputValue.value ="";
   inputValue.focus();
    








