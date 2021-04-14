/*№3*/
function Zadanie3()
{
    let Bilet = prompt("Введіть номер квитку з 6-ти циф");
    while(Bilet.length < 6 || Bilet.length > 6 || Bilet < 0)
    {
        Bilet = prompt("Введіть номер квитку з 6-ти цифр");
    }
    let mas = Bilet + "";
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < 3; i++)
    {
        sum1 += mas[i];
    }
    for(let i = 3; i < 6; i++)
    {
        sum2 += mas[i];
    }
    if(sum1 == sum2)
    {
        alert("YES")
    }
    else
    {
        alert("NO")
    }
}