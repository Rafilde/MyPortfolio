const form = document.querySelector('form');
const fullName = document.getElementById('name');
const userEmail = document.getElementById('email');
const menssage = document.getElementById('menssage'); 

async function getEmailConfig() {
  const response = await fetch('config.json');
  return await response.json();
}

async function sendEmail() {
  const emailConfig = await getEmailConfig();

  const bodyMenssage = `Full Name: ${fullName.value} <br>
  User Email: ${userEmail.value} <br>
  Menssage: ${menssage.value}`;
  
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : emailConfig.email,
    Password : emailConfig.senha,
    To : emailConfig.email, 
    From : emailConfig.email,
    Subject : "Interested customer",
    Body : bodyMenssage,
  }).then(() => {
    alert("Mensagem enviada com sucesso!");
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault(); 
  await sendEmail(); 
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('menssage').value = "";
});
