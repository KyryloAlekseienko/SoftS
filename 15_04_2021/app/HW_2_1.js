function Create2DMas(rows)
{
    let mas = [];
    for (var i=0;i<rows;i++) 
    {
        mas[i] = [];
    }
    return mas;
}
function Vvod2DMas(rows1,length1)
{ 
    let rows = rows1;
    let length = length1;
    let mas = Create2DMas(rows);

    for (let i = 0; i < rows; i++)
    {
        for (let j = 0; j < length; j++)
        {
            mas[i][j] =Number(prompt("Введіть число"+i+"й рядкок "+j+"й стовбць"));
        }  
    } 
    return mas;
}
function sumMin()
{
    let rows = prompt("Введіть кількість рядків 2D масиву");/*Ввод с экрана*/
    while(rows < 1)
    {
        rows = prompt("Введіть кількість рядків 2D масиву");/*Ввод с экрана*/
    }
    let length = prompt("Введіть кількість стовбців 2D масиву");/*Ввод с экрана*/
    while(rows < 1)
    {
        length = prompt("Введіть кількість стовбців 2D масиву");/*Ввод с экрана*/
    }

    let mas = Vvod2DMas(rows,length);

    let sumMin = 0;
    let min=mas[0][0];
    for (let i = 0; i < rows; i++)
    {
        min = mas[i][0];
        for (let j = 0; j < length; j++)
        {
            if (min > mas[i][j]) 
            {
                min = mas[i][j];
            }
        } 
        sumMin+=min;
    } 
    alert("Сума мінімальних = "+ sumMin);
}