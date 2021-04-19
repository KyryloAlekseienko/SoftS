var player = 1;
let matrix = CreateMatrix();
function CreateMatrix(){
    let matrix =  [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    return matrix;
}
function TicTacToe(btn,position){
    if (player % 2 != 0) {
        document.getElementById(btn).value = "X";
        document.getElementById(btn).disabled = "disabled";
        switch(position){
            case 1:{matrix[0][0] = 1; break};
            case 2:{matrix[0][1] = 1; break};
            case 3:{matrix[0][2] = 1; break};
            case 4:{matrix[1][0] = 1; break};
            case 5:{matrix[1][1] = 1; break};
            case 6:{matrix[1][2] = 1; break};
            case 7:{matrix[2][0] = 1; break};
            case 8:{matrix[2][1] = 1; break};
            case 9:{matrix[2][2] = 1; break};
        }
    }
    else{
        document.getElementById(btn).value = "O";
        document.getElementById(btn).disabled = "disabled";
        switch(position){
            case 1:{matrix[0][0] = 2; break};
            case 2:{matrix[0][1] = 2; break};
            case 3:{matrix[0][2] = 2; break};
            case 4:{matrix[1][0] = 2; break};
            case 5:{matrix[1][1] = 2; break};
            case 6:{matrix[1][2] = 2; break};
            case 7:{matrix[2][0] = 2; break};
            case 8:{matrix[2][1] = 2; break};
            case 9:{matrix[2][2] = 2; break};
        }
    }
    player += 1;
    if (FindAChairCheck(matrix) == 1) {
        alert("Перемога Х!");
        ResetValue();
        matrix = CreateMatrix();
    }
    if (FindAChairCheck(matrix) == 2) {
        alert("Перемога O!");
        ResetValue();
        matrix = CreateMatrix();
    }
    if (FindAChairCheck(matrix) == 0) {
        alert("Нічія!");
        ResetValue();
        matrix = CreateMatrix();
    }
}
function FindAChairCheck(matrix){
    for(let i = 0; i < 3; i++){
        if(matrix[i][0] == 1 && matrix[i][1] == 1 && matrix[i][2] == 1) return 1;
        if(matrix[i][0] == 2 && matrix[i][1] == 2 && matrix[i][2] == 2) return 2;
    }
    for(let i = 0; i < 3; i++){
        if(matrix[0][i] == 1 && matrix[1][i] == 1 && matrix[2][i] == 1) return 1;
        if(matrix[0][i] == 2 && matrix[1][i] == 2 && matrix[2][i] == 2) return 2;
    }

    if(matrix[0][0] == 1 && matrix[1][1] == 1 && matrix[2][2] == 1) return 1;

    if(matrix[0][0] == 2 && matrix[1][1] == 2 && matrix[2][2] == 2) return 2;

    if(matrix[2][0] == 1 && matrix[1][1] == 1 && matrix[0][2] == 1) return 1;

    if(matrix[2][0] == 2 && matrix[1][1] == 2 && matrix[0][2] == 2) return 2;

    if(matrix[0][0] == 0 || matrix[0][1] == 0 || matrix[0][2] == 0 ||
        matrix[1][0] == 0 || matrix[1][1] == 0 || matrix[1][2] == 0 ||
        matrix[2][0] == 0 || matrix[2][1] == 0 || matrix[2][2] == 0 ) return -1;  

    return 0;
}
function ResetValue(){
document.getElementById("button1").value = "";
document.getElementById("button2").value = "";
document.getElementById("button3").value = "";
document.getElementById("button4").value = "";
document.getElementById("button5").value = "";
document.getElementById("button6").value = "";
document.getElementById("button7").value = "";
document.getElementById("button8").value = "";
document.getElementById("button9").value = "";
document.getElementById("button1").disabled = "";
document.getElementById("button2").disabled = "";
document.getElementById("button3").disabled = "";
document.getElementById("button4").disabled = "";
document.getElementById("button5").disabled = "";
document.getElementById("button6").disabled = "";
document.getElementById("button7").disabled = "";
document.getElementById("button8").disabled = "";
document.getElementById("button9").disabled = "";
}