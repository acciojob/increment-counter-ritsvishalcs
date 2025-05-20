document.addEventListener("DOMContentLoaded", () => {
  const counterElem = document.getElementById('counter');
  const btn = document.getElementById('incrementBtn');

  btn.addEventListener('click', () => {
    const currentCount = Number(counterElem.textContent);
    alert(currentCount);
    counterElem.textContent = currentCount + 1;
  });
});

