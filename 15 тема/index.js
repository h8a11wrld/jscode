const movieForm = document.getElementById('movie-form');
const movieTableBody = document.querySelector('#movie-table tbody');
const deleteAllButton = document.getElementById('delete-all-button');

// Фильтрация
const filterTitle = document.getElementById('filter-title');
const filterGenre = document.getElementById('filter-genre');
const filterYear = document.getElementById('filter-year');
const filterWatched = document.getElementById('filter-watched');

let movies = JSON.parse(localStorage.getItem('movies')) || [];

// Обновить локальное хранилище
function updateLocalStorage() {
  localStorage.setItem('movies', JSON.stringify(movies));
}

// Рендер таблицы
function renderMovies() {
  movieTableBody.innerHTML = '';

  const filteredMovies = movies.filter(movie => {
    return (
      (filterTitle.value === '' || movie.name.includes(filterTitle.value)) &&
      (filterGenre.value === '' || movie.genre.includes(filterGenre.value)) &&
      (filterYear.value === '' || movie.year.toString() === filterYear.value) &&
      (filterWatched.value === 'all' ||
        (filterWatched.value === 'yes' && movie.watched) ||
        (filterWatched.value === 'no' && !movie.watched))
    );
  });

  filteredMovies.forEach((movie, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${movie.name}</td>
      <td>${movie.genre}</td>
      <td>${movie.year}</td>
      <td>${movie.watched ? 'Да' : 'Нет'}</td>
      <td><button onclick="deleteMovie(${index})">Удалить</button></td>
    `;
    movieTableBody.appendChild(row);
  });
}

// Добавление фильма
movieForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('movie-name').value.trim();
  const genre = document.getElementById('movie-genre').value.trim();
  const year = document.getElementById('movie-year').value.trim();
  const watched = document.getElementById('movie-watched').checked;

  if (!name || !genre || !year) {
    alert('Все поля должны быть заполнены!');
    return;
  }

  movies.push({ name, genre, year: Number(year), watched });
  updateLocalStorage();
  renderMovies();
  movieForm.reset();
});

// Удаление фильма
function deleteMovie(index) {
  movies.splice(index, 1);
  updateLocalStorage();
  renderMovies();
}

// Удаление всех фильмов
deleteAllButton.addEventListener('click', () => {
  if (confirm('Вы уверены, что хотите удалить все фильмы?')) {
    movies = [];
    updateLocalStorage();
    renderMovies();
  }
});

// Обновление таблицы при фильтрации
[filterTitle, filterGenre, filterYear, filterWatched].forEach(input => {
  input.addEventListener('input', renderMovies);
});

// Инициализация
document.addEventListener('DOMContentLoaded', renderMovies);
