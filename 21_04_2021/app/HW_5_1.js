function QuipurInput(){
    let string;
    do{ 
        string = prompt("Введіть речення");  
    }while(string == "");

    console.log("string = "+ string); 
    console.log(QuipuCalculator(string));
}

function QuipuCalculator(string){
    const mathExpr = string.replace(/[^\+|\-|\*|\|\(|\)/]+/g, string =>
     decryptQuipu(string));
    console.log("mathExpr = "+mathExpr);
    const calcMathExpr = eval(mathExpr).toString();
    console.log("calcMathExpr = "+calcMathExpr);
  
    return ResultQuipu(calcMathExpr);
}
  
function decryptQuipu(string){
    const decrypt = string.replace(/~{2,}/g, string =>
         `~${'0'.repeat(string.length - 1)}`).replace(/@+/g, string =>
             string.length).replace(/~/g, '');
             
    console.log("decrypt = "+ +decrypt);
    return +decrypt;
}
  
function ResultQuipu(string){
    const result = string.replace(/\d/g, string =>
         `${'@'.repeat(+string)}~`).replace(/@~$/, '@');

    console.log("result = "+ result);
    return result;
}

// @~@@*@@
// @~@@+@@~~
// @~~~~@+@~@@
// @~~-@@
//@~~*@@/@@@@-@@
//(@~@@+@~@@@)*@~~~~
