const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const overlay = document.getElementById('modalOverlay');

// Ochish
openBtn.addEventListener('click', () => {
  overlay.classList.add('show');
});

// Yopish (X tugmasi)
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('show');
});

// Fonga bosilganda yopish
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('show');
  }
});
