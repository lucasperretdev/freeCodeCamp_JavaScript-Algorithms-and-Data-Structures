function rot13(str) {
    const LOOKUP_TABLE =[["A","N"],["B","O"],["C","P"],["D","Q"],["E","R"],['F',"S"],["G","T"],["H","U"],['I','V'],['J','W'],['K','X'], ['L', 'Y'], ['M','Z'],['N','A'],['O','B'],['P', 'C'],['Q','D'],['R','E'],['S','F'],['T', 'G'],['U','H'],['V','I'],['W','J'],['X','K'],['Y','L'],['Z','M']]
    let result = ""
    let lengthStr = str.length
    for (let i = 0;i<=lengthStr-1;i++){
        let a = result.length

        LOOKUP_TABLE.forEach(element => {
            if (element[0] == str.charAt(i)){
                result += element[1]
            } 

        });
        let b = result.length

        if (a==b){
            result+=str.charAt(i)
        }
    }
    return result;
  }
console.log(rot13("SERR PBQR PNZC"));