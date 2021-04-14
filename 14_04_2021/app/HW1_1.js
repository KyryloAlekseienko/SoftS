/*№1*/
function Zadanie1()
{
    let L
    let W
    let H
    let go = 0;
    while(go == 0)
    {
        L = prompt("Введіть Довжину");/*Ввод с экрана*/

        if(L<1000 && L>0)
        {
            go = 1;
        }
    }
    go = 0;
    while(go == 0)
    {
        W = prompt("Введіть Ширину");/*Ввод с экрана*/

        if(W<1000 && W>0)
        {
            go = 1;
        }
    }
    go = 0;
    while(go == 0)
    {
        H = prompt("Введіть Висоту");/*Ввод с экрана*/

        if(H<1000 && H>0)
        {
            go = 1;
        }
    }
    const Banka = 16;
    let sten1 = L * W;
    let sten2 = W * H;
    let all_sten = (sten1 + sten2) * 2;
    let otv = all_sten / Banka;
    alert("На цю кімнату потрібно " + otv + " Банок красок") 
}
