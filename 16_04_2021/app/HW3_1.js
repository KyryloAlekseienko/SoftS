function StringInput(){
    let array;
    do{
        array = prompt("Введіть речення");  
    }while(array == "");
    let array2 = array.replace(/[,.""''+=$%#@^&()?!-]/g, '');
    return array2;   
}
function SortString(){
let line = StringInput();
console.log(line);
let sorted = line.split(' ');
console.log(sorted);
line = sorted.filter(el => el.match(/\d+/) != 0);
line.sort((a,b) => a.match(/\d+/) - b.match(/\d+/));
line.join(' ');
console.log(line);
}