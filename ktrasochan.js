const check =() =>{
     let a = +document.getElementById("variable1").value;
     let checkRusult = false;
     if (a % 2 == 0){
          checkRusult = true; 
     }
     
     const h3 = document.getElementById("result");
     if (checkRusult){
          alert(a+" là số chẵn");
     }
     else{
          alert(a+" là số lẻ");
     }
}
