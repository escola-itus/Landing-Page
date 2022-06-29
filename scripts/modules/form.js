var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Obrigado por preencher o fomulário! Entraremos em contato em breve.";
      form.reset()
    } else {
      response.json().then(data => {
        status.innerHTML = "Oops! Tivemos um problema ao enviar o seu formulário. Confira se todos os campos foram preenchidos corretamente.";
        status.classList.add('error');
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! Tivemos um problema ao enviar o seu formulário. Confira se todos os campos foram preenchidos corretamente."
    status.classList.add('error');
  });
}
form.addEventListener("submit", handleSubmit);
