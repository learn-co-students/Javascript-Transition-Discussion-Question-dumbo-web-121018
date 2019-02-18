// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const lincolnButton = document.querySelector('#save_lincoln')
const foreground = document.querySelector('#foreground')

function fadeOut (interval) {
  const newInterval = interval / 100
  setInterval(function () {
    if (!foreground.style.opacity) {
      foreground.style.opacity = 1
    }
    if (foreground.style.opacity > 0) {
      foreground.style.opacity -= 0.01
    }
  }, newInterval)
}

function saveLincoln (interval) {
  if (isNaN(interval)) {
    interval = 10000
  }
  fadeOut(interval)
}

lincolnButton.addEventListener('click', () => {
  const intervalInput = parseInt(document.querySelector('#interval').value)
  saveLincoln(intervalInput)
})
