const form = document.querySelector('form');
const fullName = document.getElementById('name');
const userEmail = document.getElementById('email');
const menssage = document.getElementById('menssage'); 

function sendEmail() {
  const bodyMenssage = `Full Name: ${fullName.value} <br>
  User Email: ${userEmail.value} <br>
  Menssage: ${menssage.value}`

    Email.send({
      SecureToken : "2885ea7f-50d0-4d8d-b413-5c57caf33985",
      To : 'rafaneto090@gmail.com',
        From : "rafaneto090@gmail.com",
        Subject : "Interested customer",
        Body : bodyMenssage,
  }).then(
    alert("Mensagem enviada com sucesso!"),
  );
}
form.addEventListener("submit", (e) => {
  e.preventDefault;
  sendEmail();
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('menssage').value = "";
});