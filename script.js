const form = document.getElementById('taskForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch('https://script.google.com/macros/s/AKfycbzVVX1MAPfKa-RIpfSPEL466VQG7L0glOdkZZRr6BsHMoSKz_t2kslZtStOQNXW6COP/exec', {
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
