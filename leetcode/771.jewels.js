var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let i = 0; i<jewels.length; i++){
        for (let j = 0 ; j <stones.length ; j++){
            if(jewels[i] === stones[j]){
                count++
            }
        }
    }
    return count
};


const numJewelsInStones = (J, S) => {
    const jewels = new Set(J)
    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
};