document.getElementById('checkButton').addEventListener('click', function() {

   
    const age = document.getElementById('ageInput').value;
    const result = document.getElementById('result');
    const ageValue = parseInt(age);
    result.innerHTML="";
     if(isNaN(ageValue)|| ageValue < 0 || ageValue > 120){
        result.innerHTML ="<br>Please enter a valid age between 0 and 120.";
        return;
    }
    if(ageValue >= 18){
        result.innerHTML ="<br>You are eligible to vote.";
    }
    else{
        result.innerHTML ="<br>You are not eligible to vote.";
    }
    if(ageValue >=21){
        result.innerHTML += "<br>You are eligible to drink alcohol.";
    }
    else{
        result.innerHTML += "<br>You are not eligible to drink alcohol.";
    }
    if(ageValue >= 16){
        result.innerHTML += "<br>You are eligible to drive.";
    }
    else{
        result.innerHTML += "<br>You are not eligible to drive.";
    }
    
});