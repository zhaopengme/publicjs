fetch('https://strack.hasoffer.com/lptrack/', {
  method: 'POST', 
  body:new URLSearchParams("lpurl="+location.href),
})
