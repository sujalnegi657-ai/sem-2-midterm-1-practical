function generateTable() {
  let num = document.getElementById("number").value;
  let result = document.getElementById("result");

     

  num = Number(num);
  let output = "";

  for (let i = 1; i <= 10; i++) {
    output += num + " x " + i + " = " + (num * i) + "<br>";
  }

  result.innerHTML = output;
}
