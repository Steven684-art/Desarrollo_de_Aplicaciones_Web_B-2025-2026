const imageUrl = document.getElementById('imageUrl');
const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');
const gallery = document.getElementById('gallery');
let selectedImg = null;

addBtn.addEventListener('click', () => {
    const url = imageUrl.value.trim();
    if (!url) return;
    
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Imagen agregada';
    img.addEventListener('click', selectImage);
    gallery.appendChild(img);
    
    imageUrl.value = '';
});

imageUrl.addEventListener('input', () => {
    addBtn.disabled = !imageUrl.value.trim();
});
imageUrl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addBtn.click();
});

function selectImage(e) {
    if (selectedImg) selectedImg.classList.remove('selected');
    selectedImg = e.target;
    selectedImg.classList.add('selected');
    deleteBtn.disabled = false;
}

deleteBtn.addEventListener('click', () => {
    if (selectedImg) {
        gallery.removeChild(selectedImg);
        selectedImg = null;
        deleteBtn.disabled = true;
    }
});

