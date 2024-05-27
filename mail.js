const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let ebody = `
          <h4>First Name: </h4>${fname.value}
          <br>
          <h4>Last Name: </h4>${lname.value}
          <br>
          <h4>Mail Id: </h4>${email.value}
          <br>
          <h4>Subject: </h4>${subject.value}
          <br>
          <h4>Message: </h4>${message.value}
        `;
  Email.send({
    SecureToken: "56c4d5b5-059d-419d-884a-f96d2fbe1a0c", // add your token here
    To: "bishalsarkar450up@gmail.com",
    From: "bishalsarkar450up@gmail.com",
    Subject: "This is the subject",
    Body: ebody,
  })
    .then((message) => {
      swal({
        title: "Successfully Submitted",
        text: "Saved",
        icon: "success",
      });
    })
    .catch((error) => {
      Swal({
        title: "Error!",
        text: "Something went wrong!",
        icon: "error",
      });
    });
});
