 // Select the elements
 const incrementBtn = document.getElementById('increment');
 const decrementBtn = document.getElementById('decrement');
 const counterSpan = document.getElementById('counter');

 let counterValue = 0;

 // Event listener for increment button
 incrementBtn.addEventListener('click', function() {
   counterValue++;
   counterSpan.textContent = counterValue; // Update the counter value displayed
 });

 // Event listener for decrement button
 decrementBtn.addEventListener('click', function() {
   counterValue--;
   counterSpan.textContent = counterValue; // Update the counter value displayed
 });