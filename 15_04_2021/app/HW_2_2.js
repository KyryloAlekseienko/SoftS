function TwoNumbers()
{
    let mas = new Array;
    let kol = Number(prompt("Введіть довжину масиву"));
    while(kol < 2)
    {
        kol = Number(prompt("Введіть довжину масиву"));
    }

    for (let i = 0; i < kol; i++)
    {
        mas[i]=Number(prompt("Введіть "+i+"й елемент"));
    }
    let max1=mas[0];
    let max2=mas[0];
    for (let i = 0; i < kol; i++)
    {
       if(max1<mas[i])
       {
           max1=mas[i];
       }
    }

    for (let i = 0; i < kol; i++)
    {
       if(max2<mas[i] && mas[i]!=max1)
       {
           max2=mas[i];
       }
    }
    alert(max2+"||"+max1)
}