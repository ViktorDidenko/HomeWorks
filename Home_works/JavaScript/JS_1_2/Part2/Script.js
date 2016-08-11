
var NameArr = [];

for(i=0; i<5; i++){
// alert("Proba");
var InpVariable = prompt("Input the name",'');
NameArr.push(InpVariable);

}

var UserName = prompt("Input User Name",'')

function Compare(NameArr, UserName){

  for(i=0; i<5; i++){
 
    if(NameArr[i]==UserName) {

	       var result = true;
	       return result;
                             }
    result = false;

                    }

    return result;
}

var comp = Compare(NameArr, UserName);

if(comp==true) alert( UserName + ',вы успешно вошли')
else{

	alert("Error");
}

//var x = prompt("x?", '');
//var n = prompt("n?", '');


