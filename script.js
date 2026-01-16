const form = document.getElementById('taskForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch('https://script.google.com/macros/s/AKfycbwaVNhmru9WXIyRIypgbB6yeWs_bW4dNJ6lp3cBHXwdi3QaRtp7LpS7VuBM_LxAggG8/exec', {
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
