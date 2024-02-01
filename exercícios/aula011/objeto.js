let amigo = {nome: 'Lucas',
sexo: 'm',
peso: 75.0,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)