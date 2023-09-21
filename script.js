AOS.init();
var emailInput = document.querySelector('input[name="email"]');
var span = document.querySelector('#em')
span.textContent = emailInput.value;
document.getElementById('subscribe-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

  
    var emailInput = document.querySelector('input[name="email"]');
    var email = emailInput.value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      document.querySelector(".parent-container-success").style.display="flex"
      document.querySelector(".parent-container").style.display="none"
      // You can perform additional actions here, such as sending the form data to a server
    } else {
      document.querySelector("form").classList.add("err")
    }
  });
  emailInput.onkeydown = function(){
    document.querySelector("form").classList.remove("err")

  }
  document.querySelector(".parent-container-success button").onclick = function(){
    document.querySelector(".parent-container-success").style.display="none"
    document.querySelector(".parent-container").style.display="flex"
  }
