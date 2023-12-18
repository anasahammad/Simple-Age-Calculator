let btn = document.getElementById("btn");
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString();
const result = document.getElementById("result");

btn.addEventListener("click", function(){
    if(userInput.value == ""){
     result.innerHTML = "Please input your birthdate!";
  
    }else {
        ageCalculator(userInput.value)
        
    }
})

 function ageCalculator(){
    let birthdate = new Date(userInput.value);
    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth();
    let y1 = birthdate.getFullYear();
    
    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();
    
    let d3, m3, y3;
    y3 = y2 - y1;
    
    if(m2 >= m1){
        m3 = m2 - m1;
    } else {
       y3--;
       m3 = 12 + m2 - m1;
    }
    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = getDaysInMonths(y1, m1) + d2 - d1;
    }
    
   
    result.innerHTML = `You are <span> ${y3}</span> years , <span>${m3}</span> months and <span>${d3}</span> days old.`;
    
    
    
    function getDaysInMonths(year, month){
        return new Date(year, month, 0).getDate();
    }
    }


