function IPv4Get() {
 const one = prompt("Введіть перший IPv4");
 const two = prompt("Введіть другий IPv4");
 const arr = IPv4Between(one, two);
 console.log(arr);
}
function IPv4Between(one, two) {
    one = one.split('.');
    return two.split('.').reduce(function(answer, x, i) {
      return (answer << 8) + Number(x) - Number(one[i]);
    }, 0);
}