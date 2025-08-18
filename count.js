let counter = 0;
function count(){
    counter++;
         document.querySelector('h2').innerHTML = counter;
        if(counter % 10 ===0){
            alert(`The count is now ${counter}`);
        }
        if (document.querySelector('h1').innerHTML === 'HELLO!'){
            document.querySelector('h1').innerHTML = 'GOODBYE!';
    }else{
        document.querySelector('h1').innerHTML = 'HELLO!';
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').onclick = count;
})