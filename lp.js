fetch('https://strack.hasoffer.com/lptrack/', {
  method: 'POST', 
  body:new URLSearchParams("lpurl="+encodeURIComponent(window.top.location.href)),
})
