        function validate (number){
    var inputList = document.getElementsByClassName("input");
    if (number == 0){
        //login
        if(inputList[0].value ==""|| inputList[1].value ==""){
            alert("Please fill data")
        }
        else{
             alert("Login successfull")
            }
            
    }else if(number == 1){
        if(inputList[0].value ==""|| inputList[1].value ==""){
            alert("Please fill data")
        }
        else{
             alert("Login successfull")
            }
}  

function changeForm(param){
    var divList =document.getElementsByClassName("forms");
    if (param == 0){
        //show login
        divList[0].classList.add('form-style');
        divList[0].classList.remove('hidden');
        //hide register
        divList[1].classList.remove('form-style');
        divList[1].classList.add('hidden');
    } else if (param == 1) {
        //show register
        divList[1].classList.add('form-style');
        divList[1].classList.remove('hidden');
        //hide login
        divList[0].classList.remove('form-style');
        divList[0].classList.add('hidden');

        
    }
}
