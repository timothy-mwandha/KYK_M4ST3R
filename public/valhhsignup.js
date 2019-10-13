/** This javascript file written by Timothy Mwandha validates the data entered into
 *  the House Helpers Sign Up form */

var valhhsignup = () =>{

  const hhfna = document.getElementById('hhfna');
  const hhlna = document.getElementById('hhlna');
  const hhdobd = document.getElementById('hhdobd');
  const hhdobm = document.getElementById('hhdobm');
  const hhdoby = document.getElementById('hhdoby');
  const hhgen = document.getElementById('hhgen');
  const hhnat = document.getElementById('hhnat');
  const hhnid = document.getElementById('hhnid');
  const hhmo1 = document.getElementById('hhmo1');
  const hhrel= document.getElementById('hhrel');
  const hhtri = document.getElementById('hhtri');
  const hhema = document.getElementById('hhema');
  const hhedu = document.getElementById('hhedu');
  const hhsal = document.getElementById('hhsal');
  const hhex = document.getElementById('hhex');
  const hhad3 = document.getElementById('hhad3');
  const hhad7 = document.getElementById('hhad7');
  const hhad8 = document.getElementById('hhad8');
  const hhla1 = document.getElementById('hhla1');
  const hhusenm = document.getElementById('hhusenm');
  const hhhopas = document.getElementById('hhhopas');
  const hh1pas = document.getElementById('hh1pas');
  let numerals = /^[0-9]+$/
  let alphanumeric = /^[A-Za-z0-9]+$/

  

/**   the conditional statements check IF the data entered by the user is valid
   * and gives the user feedback to enter the correct data. Else the program continues 
   * to execution - to send the house helpers particulars to the database. */

//validating the data entered into the customer ID element

if (hhfna.value.length == 0 || hhfna.value ==null) {
    alert("First Name cannot be blank.");
    hhfna.style.border = "2px solid blue";
    hhfna.focus();
    console.log("First name is false");
    }
  else {
    console.log("First Name is true");
    }

if (hhlna.value.length == 0 || hhfna.value ==null) {
    alert("Last Name cannot be blank.");
    hhlna.style.border = "2px solid blue";
    hhlna.focus();
    console.log("Last name is false");
    }
    else {
      console.log("Last name is true");
    } 

  if(hhdobd.value == "default"){
      alert('Select your date of birth from the list');
      hhdobd.style.border ="2px solid blue";
      hhdobd.focus();
      console.log("day is not selected");
      }
  else{
    console.log("day is true");
  }

  if(hhdobm.value == "default"){
    alert('Select your month of birth from the list');
    hhdobm.style.border ="2px solid blue";
    hhdobm.focus();
    console.log("month is not selected");
    }
  else{
  console.log("month is true");
  }

  if(hhdoby.value == "default"){
    alert('Select your year of birth from the list');
    hhdoby.style.border ="2px solid blue";
    hhdoby.focus();
    console.log("year is not selected");
    }
  else{
  console.log("year is true");
  }


  if(hhgen.value == "default"){
    alert('Select your gender from the list');
    hhgen.style.border ="2px solid blue";
    hhgen.focus();
    console.log("gender is not selected");
    }
  else{
  console.log("gender is true");
  }

  // comment out from here to test posting to database - twm 071019
  
  if(hhnat.value == "default"){
    alert('Select your nationality from the list');
    hhnat.style.border ="2px solid blue";
    hhnat.focus();
    console.log("nationality is not selected");
    }
  else{
  console.log("nationality is true");
  }

if(hhnid.value.match(alphanumeric)){
  console.log("national ID is alphanumeric");
}
else{
  alert('Nationality ID cannot be blank.');
  hhnid.style.border = "2px solid blue";
  hhnid.focus();

}

if(hhmo1.value.match(numerals) && hhmo1.value.length == 12){
  console.log ("telephone correct");
}
else{
  alert('Mobile should be 12 digits, starting with 2567.');
  hhmo1.style.border = "2px solid blue";
  hhmo1.focus();
}

if(hhrel.value == "default"){
  alert('Select your religion from the list');
  hhrel.style.border ="2px solid blue";
  hhrel.focus();
  console.log("religion is not selected");
  }
else{
console.log("religion is true");
}

if(hhtri.value == "default"){
  alert('Select your tribe from the list');
  hhtri.style.border ="2px solid blue";
  hhtri.focus();
  console.log("tribe is not selected");
  }
else{
console.log("tribe is true");
}

if(!hhema.value.includes('@') || !hhema.value.includes('.') ){
  alert ('EMAIL address format is not valid.');
  hhema.style.border="2px solid blue";
  hhema.focus();
  
  }
else{
  console.log("email is true");
}

if(hhedu.value == "default"){
  alert('Select your education level from the list');
  hhedu.style.border ="2px solid blue";
  hhedu.focus();
  console.log("education is not selected");
  }
else{
console.log("education is true");
}

if(hhsal.value == "default"){
  alert('Select your salary requirement from the list');
  hhsal.style.border ="2px solid blue";
  hhsal.focus();
  console.log("salary is not selected");
  }
else{
console.log("salary is true");
}

if(hhex.value == "default"){
  alert('Select your experience years from the list');
  hhex.style.border ="2px solid blue";
  hhex.focus();
  console.log("experience is not selected");
  }
else{
console.log("experience is true");
}

if (hhad3.value.length == 0 || hhfna.value ==null) {
  alert("Village Name cannot be blank.");
  hhad3.style.border = "2px solid blue";
  hhad3.focus();
  console.log("Village name is false");
  }
else {
  console.log("Village Name is true");
  }

if (hhad7.value.length == 0 || hhfna.value ==null) {
    alert("District Name cannot be blank.");
    hhad7.style.border = "2px solid blue";
    hhad7.focus();
    console.log("District name is false");
    }
else {
    console.log("District Name is true");
    }

if(hhad8.value == "default"){
      alert('Select your native Country from the list');
      hhad8.style.border ="2px solid blue";
      hhad8.focus();
      console.log("Country is not selected");
      }
else{
    console.log("Country is true");
    }

if(hhla1.value == "default"){
      alert('Select a language from the list');
      hhla1.style.border ="2px solid blue";
      hhla1.focus();
      console.log("Language is not selected");
      }
else{
    console.log("Language is true");
    }

let hhusenmlen = hhusenm.value.length;
if (hhusenmlen == 0 || hhusenmlen >= 12 || hhusenmlen < 5){
    alert('User name should have length of between 5 and 12.');
    hhusenm.style.border = "2px solid blue";
    hhusenm.focus();
}
else{
    console.log('username length is true');
}

let hhhopaslen = hhhopas.value.length;
if (hhhopaslen == 0 || hhhopaslen >= 12 || hhhopaslen < 5){
alert('Password cannot be empty. Use more than 5 and less than 12 characters');
hhhopas.style.border = "2px solid blue";
hhhopas.focus();
}
else{
  console.log('pass is true');
}

if(hhhopas.value !== hh1pas.value){
alert("Your passwords do not match");

}
else
{
  alerts('You have sucessfully signed up!');
  //return true;
}

}

