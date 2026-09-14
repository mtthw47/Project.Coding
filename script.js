function addTask() {
    // Mengambil input
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    // Jika input kosong
    if (task === "") {
        alert("Masukkan tugas terlebih dahulu!");
        return;
    }

    // Membuat elemen li
    let li = document.createElement("li");

    // Membuat teks tugas
    let text = document.createElement("span");
    text.textContent = task;

    // Membuat tombol hapus
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.classList.add("delete");

    // Fungsi tombol hapus
    deleteButton.onclick = function () {
        li.remove();
        updateTaskCount();
    };

    // Memasukkan teks dan tombol ke li
    li.appendChild(text);
    li.appendChild(deleteButton);

    // Memasukkan li ke dalam daftar
    document.getElementById("taskList").appendChild(li);

    // Mengosongkan input
    input.value = "";

    // Memperbarui jumlah tugas
    updateTaskCount();
}


// Menghitung jumlah tugas
function updateTaskCount() {
    let taskList = document.getElementById("taskList");
    let taskCount = taskList.children.length;

    document.getElementById("taskCount").textContent = taskCount;
}
