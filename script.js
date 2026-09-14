function addTask() {
    // Mengambil isi input
    let input = document.getElementById('taskInput');
    let task = input.value;

    // Mengecek apakah input kosong
    if (task === '') {
        alert('Masukkan tugas terlebih dahulu!');
        return;
    }

    // Membuat elemen <li>
    let li = document.createElement('li');

    // Membuat teks tugas
    let text = document.createElement('span');
    text.textContent = task;

    // Membuat tombol hapus
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.classList.add('delete');

    // Ketika tombol hapus diklik
    deleteButton.onclick = function () {
        li.remove();
    };

    // Memasukkan teks dan tombol ke dalam li
    li.appendChild(text);
    li.appendChild(deleteButton);

    // Memasukkan li ke dalam ul
    document.getElementById('taskList').appendChild(li);

    // Mengosongkan input
    input.value = '';
}
