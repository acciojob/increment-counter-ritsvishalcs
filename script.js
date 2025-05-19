//your JS code here. If required.
const counterElem = document.getElementById('counter');
const btn = document.getElementById('incrementBtn');

btn.addEventListener('click', () => {
  // Get the current count as a number
  const currentCount = Number(counterElem.textContent);

  // Show alert with current un-incremented value
  alert(currentCount);

  // Increment counter and update paragraph
  counterElem.textContent = currentCount + 1;
});
