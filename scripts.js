function setTime() {
  $('.time').text(Date())
}

setInterval(setTime, 5000)