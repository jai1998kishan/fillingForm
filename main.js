// const ul= document.querySelector('.items');

// ul.firstElementChild.textContent='HELLO';
// ul.firstElementChild.style.background='red';

// ul.children[1].innerText='Brad';
// ul.children[1].style.background='yellow';
// ul.lastElementChild.style.background='orange';
// ul.lastElementChild.innerHTML='<h1>Hiiiiiii</h1>';

// const btn=document.querySelector('.btn');

// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     console.log('click');
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello world</h1>';
// })

// btn.addEventListener('mouseover', (e) =>{
//     console.log('mouseover');
// })

// btn.addEventListener('mouseout', (e) =>{
//     console.log('mouseout');
// })

const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emialInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value==='' || emialInput.value===''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all field';

        setTimeout(() => msg.remove(), 3000);
    }else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`name : ${nameInput.value} : email : ${emialInput.value}`));

        //if we wamt to store the input of the user in local storage
        // localStorage.setItem('name',nameInput.value);
        // localStorage.setItem('Email',emialInput.value);

        

        let myObj = {
            name1:nameInput.value,
            email1:emialInput
        };

        var existingUserDataString=localStorage.getItem("user");

        if(existingUserDataString){
            var existingUserData=JSON.parse(existingUserDataString);
        }else{
            var existingUserData=[];
        }

        var myObj_ser=JSON.stringify(myObj);
        existingUserData.push(myObj);

        var updateUserDataString=JSON.stringify(existingUserData);

        localStorage.setItem("user",updateUserDataString);

        // let myObj_ser=JSON.stringify(myObj);
        // localStorage.setItem('myObj',myObj_ser);
        // let myObj_des=JSON.parse(localStorage.getItem('myObg'));
        // console.log(myObj_des);

        //Serialize and store myobj
        // var userString=JSON.stringify(myObj);
        

        //Retrieve and parse myobj
        // var userString=localStorage.getItem("myObj");
        // var user1=JSON.parse(userString);
        // var arrayString=user1;


        userList.appendChild(li);

        //Clear fields
        nameInput.value='';
        emialInput.value='';
    }

    // console.log(nameInput.value);
}





