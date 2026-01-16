const form = document.getElementById('taskForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // защита от повторной отправки
  if (submitBtn.disabled) return;

  submitBtn.disabled = true;
  submitBtn.innerText = 'Отправка...';

  const data = Object.fromEntries(new FormData(form));

  fetch(
    'https://script.google.com/macros/s/AKfycbw2Bo-r71Zali1OKxqnVGjPEpfIGcqpIWcuvTeFT4tV2fgOZaiEOKPh7cKV8VHsumtG/exec',
    {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data)
    }
  );

  alert('Данные отправлены');
  form.reset();

  // возвращаем кнопку через 3 сек
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerText = 'Отправить';
  }, 3000);
});
