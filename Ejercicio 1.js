const A = [[1, 2], [3, 4]];

for(let i = 0; i < A.length; i++){
    console.log(`Arreglo ${i}`)

    for(let o = 0; o < A[i].length; o++){
        console.log(A[i][o]);
    }
    
}

//for of

for (const [index, fila] of A.entries()) {
    console.log(`Arreglo ${index}`);
    
    for (const elemento of fila) {
        console.log(elemento);
    }
}

//for in

for(const i in A){
    console.log(`Arreglo ${i}`)
    for(const o in A[i]){
        console.log(A[i][o]) 
    }
}

//for each //funcion flecha

A.forEach((fila, i) => {
    console.log(`Arreglo ${i}`);
    
    fila.forEach(elemento => {
        console.log(elemento);
    });
});

//while

let i = 0;
while (i < A.length) {
    console.log(`Arreglo ${i}`);
    
    let o = 0;
    while (o < A[i].length) {
        console.log(A[i][o]);
        o++;
    }
    
    i++;
}