// let count = 5;
// document.getElementById('count').textContent = count;
const counter = document.getElementById('count');
const btnAddPsg = document.getElementById('add--count');
const btnSavePsg = document.getElementById('save--count');
const savedData = document.getElementById('saved--data');

let count = 0;
function addCount(){
    count += 1;
    console.log(count);
}

btnAddPsg.onclick = () => {
    addCount();
    counter.textContent = count;
}
btnSavePsg.onclick = () => {
    let results = count;
   savedData.textContent += results + "-";
   count = 0;
   counter.textContent = count
}