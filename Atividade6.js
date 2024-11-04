let idades = [ 16, 48, 23, 22, 45, 8, 12]

let filtro = idades.filter((idades)=> {
    return idades >= 18;
})


idades.forEach((idades) => {
    console.log(`Sua idade é: ${idades}`)
    
});

console.log(`Pessoas +18: ${filtro}`);
