// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
document.getElementById('save_lincoln').addEventListener('click', () => {
  saveLincoln(parseInt(document.getElementById('interval').value))
})

function saveLincoln (interval) {
  if (isNaN(interval)) {
    interval = 10000
  }
  const foreground = document.getElementById('foreground')
  const fadeEffect = setInterval(() => {
    if (!foreground.style.opacity) {
      foreground.style.opacity = 1
    }
    if (foreground.style.opacity > 0) {
      foreground.style.opacity -= 0.1
    } else {
      clearInterval(fadeEffect)
    }
  }, interval)
}
