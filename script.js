const form = document.getElementById('taskForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch('ВАШ_WEB_APP_URL', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(() => {
    alert('Данные отправлены');
    form.reset();
  })
  .catch(() => alert('Ошибка отправки'));
});
