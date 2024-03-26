let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');

let toastBox = document.getElementById('toastBox');
let successMsg =   `<i class="fa-solid fa-check-to-slot"></i> Successfully added!`;
let errorMsg = `<i class="fa-solid fa-xmark"></i> Please fix the error!`;
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i>Invalid input!`;

function showToast(msg){
let toast = document.createElement('div');
toast.classList.add('toast');
toast.innerHTML= msg;
if(msg.includes('error')){
    toast.classList.add('error');
}
if(msg.includes('Invalid')){
    toast.classList.add('invalid');
}
toastBox.appendChild(toast);
setTimeout(()=> {
    toast.remove();
}, 3000);

}



button1.addEventListener('click',()=> showToast(successMsg));
button2.addEventListener('click' ,()=> showToast(errorMsg));
button3.addEventListener('click',()=> showToast(invalidMsg));
