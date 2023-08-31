// function untuk Collapse pada konten
// Pilih button dan konten yang akan di-collapse
const button = document.querySelector('.collapse-button');
const content = document.querySelector('.collapse-content');

// Tambahkan event listener untuk setiap tombol collapse
button.addEventListener('click', function() {
    // Visibilitas dari Toggle konten
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});


// function untuk Collapse pada aside 
// Pilih button dan konten yang akan di-collapse
const collapseButtons = document.querySelectorAll('.collapse-button-hmsi');
const collapseContents = document.querySelectorAll('.collapse-content-hmsi');

// Tambahkan event listener untuk setiap tombol collapse
collapseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Periksa apakah konten sudah tersembunyi atau tampil
        const content = collapseContents[index];
        if (content.style.display === 'none' || content.style.display === '') {
            // Jika tersembunyi, tampilkan konten
            content.style.display = 'block';
        } else {
            // Jika tampil, sembunyikan konten
            content.style.display = 'none';
        }
    });
});
