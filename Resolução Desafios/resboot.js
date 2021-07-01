// visitar feira

let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let X = A + B ; // Altere o valor da variável com o cálculo esperado
console.log(" X = " + X);

//Multiplicação simples

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let total = valor1 * valor2; // Altere o valor da variável com o cálculo esperado 
console.log("PROD = " + total);

//Folha de pagamento

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());
let salary = parseFloat(valor2 * valor3).toFixed(2); // Digite aqui o calculo do salário
console.log("NUMBER = " + valor1);

console.log("SALARY = U$ " + salary);

//Quantidade de números positivos

let total = 0;
let i = 0;
let valor;

while (i <= 5){

 valor = parseFloat(gets());

 if (valor > 0){

   total = total + 1;
   }
    i = i + 1;
}
print(total + " "+ " valores positivos");

//Exibindo Numeros pares

let num = 0;
num = gets();
for (let i =1 ; i <= num ; i++) {
  if (i % 2 === 0) {
          console.log(i);
      }
  };

//analisando os numeros

numero = Array(5);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();

pares = numero.filter(value => value %2 == 0 );
impares = numero.filter(value => value  %2 != 0);

positivos = numero.filter(value => value > 0);
negativos = numero.filter(value => value < 0);

print(pares.length + " valor(es) par(es)");
print(impares.length + " valor(es) impar(es)");

print(positivos.length + " valor(es) positivo(s)");
print(negativos.length + " valor(es) negativo(s)");
