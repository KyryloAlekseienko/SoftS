function check() {
  const example1 = [25, 25, 50];
  const example2 = [25, 100];
  const example3 = [25, 25, 50, 50, 100];
  const example4 = [25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100];

  console.log(`${example1} - ${getTickets(example1)}`);
  console.log(`${example2} - ${getTickets(example2)}`);
  console.log(`${example3} - ${getTickets(example3)}`);
  console.log(`${example4} - ${getTickets(example4)}`);
}

function getTickets(queue) {
    let [banknote25, banknote50] = [0, 0];
    const isSoldAll = queue.every(item => {
      switch (item) {
        case 25:
          banknote25++;
          break;
        case 50:
          banknote25--;
          banknote50++;
          break;
        case 100:
          banknote25--;
          (banknote50 > 0) ? banknote50-- : banknote25 -= 2;
      }
      return (banknote25 < 0 || banknote50 < 0) ? false : true;
    })
  
    return isSoldAll ? 'YES' : 'NO';
  }
