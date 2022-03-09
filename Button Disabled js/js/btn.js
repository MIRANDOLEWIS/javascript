     
//Button Bisabled Method 

    formid.addEventListener('input',function(){

       	if (firstnum.value.length > 0 &&
         	secnum.value.length > 0){

       		subbtn.removeAttribute('disabled')
       	}
       	else{
       		subbtn.setAttribute('disabled')
       	}


       })