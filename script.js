// stampo dei numeri da 1 a 100
for(let numero = 1; numero <= 100; numero++ ) {
   
    // stampo fizzbuzz se sono divisibili sia per 3 sia per 5
    if (numero % 3 === 0 && numero % 5 === 0){
        console.log('fizzbuzz')

    }

    // stampo fizz se sono divisibili per 3
    else if (numero % 3 === 0 ){
        console.log('fizz');

    }
    // stampo buzz se sono divisibili per 5
    else if (numero % 5 === 0) {
        console.log('buzz');

    }
    
    else {console.log(numero);} 
    
}


















