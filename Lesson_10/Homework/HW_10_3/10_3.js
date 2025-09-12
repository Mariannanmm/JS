const someForm = document.forms.someForm;
const nameValue = someForm.name.value;
const surnameValue = someForm.surname.value;
const ageValue = someForm.age.value;

//const sendButton = someForm.sendButton;
//sendButton.addEventListener('click', ()=>{
//    const someForm = document.forms.someForm;
//    const nameValue = someForm.name.value;
//    const surnameValue = someForm.surname.value;
//    const ageValue = someForm.age.value;
//    let obj = {nameValue, surnameValue, ageValue, sendButton};
//    console.log(obj);
//});

//    someForm.onsubmit = function () {};
let terget = document.getElementById(target);

someForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = someForm.age.value;
    let obj = {nameValue, surnameValue, ageValue};
    console.log(obj);
    target.innerText = obj.nameValue+ ' ' + obj.surnameValue+' ' + obj.ageValue;
});





