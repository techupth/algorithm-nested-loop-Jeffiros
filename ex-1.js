// เริ่มเขียนโค้ดตรงนี้
function printPattern(n) {
  let finalResult = "";
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += j + "\t";
    }
    finalResult += result + "\n";
  }
  return finalResult;
}

console.log(printPattern(5));
