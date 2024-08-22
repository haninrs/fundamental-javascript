function myFunc(str){
    const kataBuruk = [
        {kata: "anjing", pengganti: "a*****g"},
        {kata: "babi", pengganti: "b**i"},
        {kata: "monyet", pengganti: "m****t"} 
    ];

    // Mengganti kata-kata buruk dengan penggantinya
    let hasil = str;
    kataBuruk.forEach(({kata, pengganti}) => {
        while (hasil.includes(kata)) {
            hasil = hasil.replace(kata, pengganti);
        }
        // for (let i = 0; i < kataBuruk.length; i++) {
        //     const {kata, pengganti} = kataBuruk[i];
        //     hasil = hasil.replace(new RegExp(kata, 'g'), pengganti);
        // }
    });

    return hasil;
}

console.log(myFunc('anjing Main sama babi dan monyet sedang makan pisang'))