const form = document.getElementById('taskForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch('https://script.google.com/macros/s/AKfycbwjUcmNO6qIL76AUnCd8311N02TwIUlDTfCdHxG5E1_qtK6h34dZgI_Si17-AZPEggy/exec', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(() => {
    alert('Данные успешно отправлены');
    form.reset();
  })
  .catch(error => {
    console.error(error);
    alert('Ошибка при отправке данных');
  });
});
