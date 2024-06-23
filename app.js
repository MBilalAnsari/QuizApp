
var formContainer = document.getElementById("formContainer")
var startContainer = document.getElementById("startContainer")

var formContainer = document.getElementById("formContainer")
function submitHandler() {
   var userName = document.getElementById("userName")
   var userEmail = document.getElementById("userEmail")
   var nameError = document.getElementById("nameError")
   var emailError = document.getElementById("emailError")
   var quizHead = document.getElementsByClassName("heading")[0]
   var bgbody = document.getElementById("bgbody")
   nameError.className = "hide"
   emailError.className = "hide"

   if (!userName.value) {
      nameError.className = "show"
      nameError.style.color = "red"
      return
   }

   if (!userEmail.value) {
      emailError.className = "show"
      emailError.style.color = "red"
      return
   }

   localStorage.setItem("userName" , userName.value)
   localStorage.setItem("userEmail" , userEmail.value)
   quizHead.className = "hide"
   formContainer.className = "hide"
   bgbody.style.backgroundImage = "none"
   startContainer.className = "show !important"
   bgbody.className = "quizStartcolor"
   

   //  console.log(userName.value , userEmail.value)

}