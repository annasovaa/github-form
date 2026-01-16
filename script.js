const form = document.getElementById('taskForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch('https://script.google.com/macros/s/AKfycbx3GBYIphGE8hmTTq5awral363FM2X880yyGvCAg5BpZL3l6Ox_0xCVcIB9o21YlQk/exec', {
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
