function Input() {
  let num
  do{ 
    num = prompt("Введіть число")*1;  
  }while(num == "");
  console.log(num + " = ", findMax(num));
}
function findMax(num) {
    const partitions = getCombinations(num); // разбиение на слагаемые
    const [partsWithProduct, maxProduct] = getMax(partitions); // слагаемые с произведениями и max из произведений
  
    const partMaxProd = partsWithProduct.filter(item =>
       item[0] === maxProduct).map(item =>
         item[1]).reverse(); // итоговые комбинации слагаемых с max произведением по убыванию
    partMaxProd.push(maxProduct);
  
    return partMaxProd;
}
  
  //Рекурсивное разбиение числа на слагаемые без повторений
  function getCombinations(num, enough = num) {
    let item = [];
    for (let i = 1; i <= Math.min(num, enough); i++) {
      let prevItem = getCombinations(num - i, i);
      if (prevItem.length !== 0) {
        prevItem.forEach(el => item.push(Array.from([i, el]).flat(num)));
      } else {
        item.push([i]);
      }
    }
    return item;
}
  
  // Подсчет произведения для каждой комбинации слагаемых
function getMax(partitions) {
    let maxProduct = 0;
    partsWithProduct = partitions.map(el => {
      let curProduct = el.reduce((multi, cur) => multi * cur, 1);
      if (curProduct > maxProduct) {
        maxProduct = curProduct;
      }
      return Array.from([curProduct, el]);
    })
  
    return [partsWithProduct, maxProduct];
}
