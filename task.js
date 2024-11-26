function PrintNumbers(n, m){
    if(n<m){
    for(let i=n; i<=m; i++){
      if(isPrime(i)){
        console.log(i)
      }
    }
  }
  else{
    console.log("error")
  }
  }
  
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  PrintNumbers(10,30)
  