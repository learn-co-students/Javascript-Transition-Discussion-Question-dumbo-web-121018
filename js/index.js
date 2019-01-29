// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
const lincoln = document.querySelector('#save_lincoln')
const foreground = document.querySelector('#foreground')
lincoln.addEventListener('click', saveLincoln('#interval'))

function saveLincoln(interval) {
  interval = parseInt(interval);
  if(isNaN(interval)) {
    interval = 10000
  }
  $('#foreground').fadeOut(interval);
}

let setInterval(function () {

}, interval);
