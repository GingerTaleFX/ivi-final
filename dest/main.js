var
  brilliant = document.querySelector('.brilliant'),
  content   = brilliant.innerHTML;

brilliant.addEventListener('click', function() {
  count();
});

function count() {
  var i = 1,
      interval = setInterval(function() {
         if (i < 4) {
            brilliant.innerHTML = i++;
            } else {
            clearInterval(interval);
            brilliant.innerHTML = content;
            }           
        }, 500);
}

