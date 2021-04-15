function Strocks()
{
   let slovo = prompt("Введіть речення");
   let mas = slovo.replace(/[,."+=*'()?!-]/g, '');   
   slovo = mas.split(" ");
   let min = slovo[0].length;
   for(let i = 0; i < slovo.length; i++)
   {
       if(slovo[i].length < min)
       {
           min = slovo[i].length;
       }
   }
   alert("Мінеімальне реченя містить "+min+" слів");
}