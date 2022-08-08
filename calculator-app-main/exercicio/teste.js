const amigo = {
    nome: 'jose',
    idade: 14,
    altura:1.70,
    sexo: 'masculino',
    crescer(c=0){
        console.log('cresceu')
        this.altura += c 
    }
    
}
amigo.crescer(0.70)
console.log(amigo)
