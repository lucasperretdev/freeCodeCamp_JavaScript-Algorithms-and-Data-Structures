function convertToRoman(num) {
    const CONVERSION_TABLE = [[1,"I"],[2,"II"],[3,"III"],[4,"IV"],[5,"V"],[6,"VI"],[7,"VII"],[8,"VIII"],[9,"IX"],[10,"X"],[20,"XX"],[30,"XXX"],[40,"XL"],[50,"L"],[60,"LX"],[70,"LXX"],[80,"LXXX"],[90,"XC"],[100,"C"],[200,"CC"],[300,"CCC"],[400,"CD"],[500,"D"],[600,"DC"],[700,"DCC"],[800,"DCCC"], [900, "CM"],[1000,"M"]]

    let remainder = num
    let roman = ""

    for (let i=27; i>=0; i--){
        if (remainder>= CONVERSION_TABLE[i][0]) {
            remainder -= CONVERSION_TABLE[i][0]
            roman += CONVERSION_TABLE[i][1]
            i++
        }
    }
    return roman
   }

convertToRoman(36);