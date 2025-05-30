const form = document.getElementById('movie-form');
const movieNameInput = document.getElementById('movie-name');
const movieGenreInput = document.getElementById('movie-genre');
const movieYearInput = document.getElementById('movie-year');
const movieWatchedInput = document.getElementById('movie-watched');
const addButton = document.getElementById('add-button');
const updateButton = document.getElementById('update-button');
const cancelEditButton = document.getElementById('cancel-edit-button');
const movieTableBody = document.querySelector('#movie-table tbody');
const sortSelect = document.getElementById('sort-select');

let movies = JSON.parse(localStorage.getItem('movies')) || [];
let editingIndex = null;

// Обновить локальное хранилище
function updateLocalStorage() {
  localStorage.setItem('movies', JSON.stringify(movies));
}

// Рендер таблицы
function renderMovies() {
  movieTableBody.innerHTML = '';
  movies.forEach((movie, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${movie.name}</td>
      <td>${movie.genre}</td>
      <td>${movie.year}</td>
      <td>${movie.watched ? 'Да' : 'Нет'}</td>
      <td>
        <button onclick="editMovie(${index})">Редактировать</button>
        <button onclick="deleteMovie(${index})">Удалить</button>
      </td>
    `;
    movieTableBody.appendChild(row);
  });
}

// Добавление фильма
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = movieNameInput.value.trim();
  const genre = movieGenreInput.value.trim();
  const year = movieYearInput.value.trim();
  const watched = movieWatchedInput.checked;

  if (!name || !genre || !year) {
    alert('Все поля должны быть заполнены!');
    return;
  }

  if (editingIndex === null) {
    movies.push({ name, genre, year, watched });
  } else {
    movies[editingIndex] = { name, genre, year, watched };
    editingIndex = null;
    addButton.classList.remove('hidden');
    updateButton.classList.add('hidden');
    cancelEditButton.classList.add('hidden');
  }

  updateLocalStorage();
  renderMovies();
  form.reset();
});

// Удаление фильма
function deleteMovie(index) {
  movies.splice(index, 1);
  updateLocalStorage();
  renderMovies();
}

// Редактирование фильма
function editMovie(index) {
  const movie = movies[index];
  movieNameInput.value = movie.name;
  movieGenreInput.value = movie.genre;
  movieYearInput.value = movie.year;
  movieWatchedInput.checked = movie.watched;

  editingIndex = index;
  addButton.classList.add('hidden');
  updateButton.classList.remove('hidden');
  cancelEditButton.classList.remove('hidden');
}

// Отмена редактирования
cancelEditButton.addEventListener('click', () => {
  editingIndex = null;
  form.reset();
  addButton.classList.remove('hidden');
  updateButton.classList.add('hidden');
  cancelEditButton.classList.add('hidden');
});

// Сортировка фильмов
sortSelect.addEventListener('change', () => {
  const sortBy = sortSelect.value;
  movies.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) return 1;
    if (a[sortBy] < b[sortBy]) return -1;
    return 0;
  });
  renderMovies();
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  renderMovies();
});
