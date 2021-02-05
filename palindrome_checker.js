function palindrome(str) {
    const entry = str.trim().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').split(" ").join("").toLowerCase()
    const length = entry.length
    if(length%2 != 0) {
      const numbBeforeMid = Math.floor(length/2)

    let firstHalf = entry.substring(0, numbBeforeMid)
    let secondHalf = entry.substring((numbBeforeMid +1), (length+1))

    const reversestr = secondHalfarr => {
      let a = secondHalfarr.split("")
      let b = a.reverse()    
      return b.join("")
    }
    
    let reverseSecondHalf = reversestr(secondHalf)
    
    if(firstHalf === reverseSecondHalf){
    return true;
    } else {
      return false
    }
    
    } else {
      const numbBeforeMid =length/2
    
    let firstHalf = entry.substring(0, numbBeforeMid)
    let secondHalf = entry.substring((numbBeforeMid ), (length+1))
    
    const reversestr = secondHalfarr => {
      let a = secondHalfarr.split("")
      let b = a.reverse()
      return b.join("")
    
    }
    
    let reverseSecondHalf = reversestr(secondHalf)
    if(firstHalf === reverseSecondHalf){
    
    return true;
    } else {  
      return false
    }
    }
    }
palindrome("eye");