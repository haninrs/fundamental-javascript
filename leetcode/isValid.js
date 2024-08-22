/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
        const openingBrackets = ['(', '[', '{'];
        const closingBrackets = [')', ']', '}'];
    
        for (let char of s) {
            if (openingBrackets.includes(char)) {
                // Jika karakter adalah tanda buka, tambahkan ke stack
                stack.push(char);
            } else if (closingBrackets.includes(char)) {
                // Jika karakter adalah tanda tutup
                const index = closingBrackets.indexOf(char);
                if (stack.length === 0 || stack.pop() !== openingBrackets[index]) {
                    // Jika stack kosong atau tanda tutup tidak sesuai dengan tanda buka yang paling atas di stack
                    return false;
                }
            }
        }
    
        // Stack harus kosong jika semua tanda buka telah ditutup
        return stack.length === 0;
        
    };