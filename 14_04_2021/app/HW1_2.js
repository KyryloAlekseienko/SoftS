/*№2*/
function Zadanie2()
{
    let mas_cina = new Array
    let mas_kg = new Array

    for(let i = 0; i <= 2; i++)
    {
        mas_cina[i] = prompt("Введите цену "+ i +"")
        while( mas_cina[i] > 100 || mas_cina[i] < 0)
        {
            mas_cina[i] = prompt("Введите цену "+ i +"")
        }
    }
    for(let i = 0; i < 3;i++)
    {
        mas_kg[i] = prompt("Введите емкость "+ i +"")
        while( mas_kg[i] > 100 || mas_kg[i] < 0)
        {
            mas_kg[i] = prompt("Введите емкость "+ i +"")
        }
    }
    for (let i = 0; i <3; i++)
    {
    for (let j = 0; j <= 2-i; j++)
    {
        if (mas_cina[j] < mas_cina[j+1]) 
        {
            let max = mas_cina[j];
            mas_cina[j] = mas_cina[j+1];
            mas_cina[j+1] = max;
        }
    }  
    }
    for (let i = 0; i <3; i++) 
    {
        for (let j = 0; j <= 2-i; j++) 
        {
        if ( mas_kg[j] < mas_kg[j+1])
            {
            let max =  mas_kg[j];
            mas_kg[j] =  mas_kg[j+1];
            mas_kg[j+1] = max;
            }
        }  
    }
    let otv = 0;
    for(let i=0;i<3;i++)
    {
        otv += mas_cina[i] * mas_kg[i];
    }
    alert("Прибуток = "+otv)
}

