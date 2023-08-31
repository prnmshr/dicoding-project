// Select the button and collapsible content
const button = document.querySelector('.collapse-button');
const content = document.querySelector('.collapse-content');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Toggle the visibility of the content
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});

// Ambil semua tombol collapse dan elemen konten
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
