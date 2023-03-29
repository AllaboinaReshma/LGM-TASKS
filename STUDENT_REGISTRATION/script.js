function addStudent() {
  // Get the form values
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var photo = document.getElementById("photo").files[0];
  
  // Create a new row for the table
  var table = document.getElementById("studentTable");
  var row = table.insertRow(-1);
  
  // Add the data to the row
  var fullNameCell = row.insertCell(0);
  fullNameCell.innerHTML = fullName;
  var emailCell = row.insertCell(1);
  emailCell.innerHTML = email;
  var phoneNumberCell = row.insertCell(2);
  phoneNumberCell.innerHTML = phoneNumber;
  var photoCell = row.insertCell(3);
  if (photo) {
    var reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onloadend = function() {
     photoCell.innerHTML = '<img src="' + reader.result + '" width="100">';
    }
  } else {
    photoCell.innerHTML = 'No photo';
  }
  
  // Clear the form
  document.getElementById("registrationForm").reset();
  }
