

var Questions = ["Вопрос № 1", "Вопрос № 2", "Вопрос № 3"]; // Array for questions (input in "") 
var Answers =[
                ["Вариант ответа № 1", "Вариант ответа № 2", "Вариант ответа № 3"], 
                ["Вариант ответа № 1", "Вариант ответа № 2", "Вариант ответа № 3"],
                ["Вариант ответа № 1", "Вариант ответа № 2", "Вариант ответа № 3"]
             ];  // Array for answers (input in "")




function create_test() {

var elemBody = document.body;
var mainForm = document.createElement('form');
elemBody.appendChild(mainForm);
mainForm.action =  '#';      //this.action;
mainForm.method = 'get' ;   //this.method;


//header

var mainHeader = document.createElement('h1');
mainHeader.classList.add('main-header');
mainHeader.innerHTML = "Тест по программированию"; //mainForm.headerText;
mainForm.appendChild(mainHeader);



//ol 

var ol = document.createElement('ol');
mainForm.appendChild(ol);


// //ol (li + ul + li)

for (question = 1; question <= 3; question++) {
	var li = document.createElement('li');
	li.innerHTML = Questions[(question-1)];  // Question       
	ol.appendChild(li);
	var ul = document.createElement('ul');
	li.appendChild(ul);
	
	

for (answer = 1; answer <= 3; answer++) {    
    var innerLi = document.createElement('li'); 	
	ul.appendChild(innerLi);
	var label = document.createElement('label');
    innerLi.appendChild(label);
	var checkBox = document.createElement('input');
    checkBox.type = "checkbox";    
    checkBox.name = "quest" + question + "-answ" + answer;
    label.appendChild(checkBox); 
    innerLi.style.listStyle = 'none'; 
    var span = document.createElement('span');
    span.innerHTML = Answers[(question-1)][(answer-1)];  //Answer [quest-1][answer-1];
    label.appendChild(span);
} 
} 

//submit
 
 
 var checkResults = document.createElement('input');
 
 checkResults.type = "submit";
 checkResults.value = "Проверить мои результаты"; //this.buttonText;
 mainForm.appendChild(checkResults);
 checkResults.style.border = '2px solid black';
 checkResults.style.background = 'lightblue';
 checkResults.style.padding = '10px 40px';
 checkResults.style.margin = '20px 0 60px 207px';
}

create_test();








/* var mUL = document.createElement('ol');
mUL.className = "spisok";
var parentElem = document.body;
parentElem.insertBefore(mUL, parentElem.children[1]);

var mLi = document.createElement('li');
mLi.innerHTML = "Текст 1";
mUL.appendChild(mLi);  */


/*

var Head1 = document.createElement('div');
Head1.className = "alert-success";
Head1.innerHTML = "<span> Тест по программированию </span>";
Head1.style.backgroundColor = 'white';
Head1.style.padding = '0px';
Head1.style.border = '2px solid #d6e9c6';
Head1.style.borderRadius ='4px';
Head1.style.color = 'black';
Head1.style.textAlign = 'center';
Head1.style.fontStyle = 'Arial';
Head1.style.fontSize = '24px';
Head1.style.fontWeight = 'bold';


document.body.insertBefore(Head1, document.body.firstChild);



var List1 = document.createElement('div');
List1.className = "Spisok1";
List1.innerHTML = " <ol> <li> Вопрос1 </li> </ol>";




Head1.parentNode.insertBefore(List1, Head1.nextSibling); */
