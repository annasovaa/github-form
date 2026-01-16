const form = document.getElementById('taskForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch(
    'https://script.google.com/macros/s/AKfycbw2Bo-r71Zali1OKxqnVGjPEpfIGcqpIWcuvTeFT4tV2fgOZaiEOKPh7cKV8VHsumtG/exec',
    {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  );

  alert('Данные отправлены');
  form.reset();
});
