class Train {
    kursi = ['Masinis',...new Array(10).fill(null)]
    

    enter(name){
        for (let i = 1 ; i < this.kursi.length ; i++){
            if (this.kursi[i] == undefined){
                this.kursi[i] = name
                return this.kursi
            }
        }
        this.kursi.push(name)
        return this.kursi
    }

    out(name){
        for (let i = 1 ; i <=this.kursi.length ; i++){
            if (this.kursi[i] == name){
                this.kursi[i] = undefined
                return this.kursi
            }
        }
    }

    getPas(){
        console.table(this.kursi)
    }


}

// max penumpang 10 + 1(masinis) 
// setiap naik dahulukan kursi depan
//  misal 4 orang naik ([1,2,3,4])
//  trus (2) turun ([1, ,3,4])
// klo ada yang naik isi dulu di 2 ([1,2,3,4])

const kereta =  new Train()
kereta.enter('Hani')
kereta.enter('Budi')
kereta.enter('Lala')
kereta.enter('Jojo')
kereta.out('Budi')
kereta.enter('abc')
kereta.getPas()


console.log(kereta)
