function calculateAge() {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dob) {
    result.innerText = "Please select your date of birth";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  let monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || 
     (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  result.innerText = "Your Age is: " + age + " years";
}
