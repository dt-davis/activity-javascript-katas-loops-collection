/** KATA 01 ⮕
***
*** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
***
**/

  console.log('%cKATA 1 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
  
  let counter = 1
  while (counter <= 20) {
    console.log(counter)
    counter += 1
  }

  for (let countera = 1; countera <= 20; countera++){
    console.log(countera + ' this is countera')
  }
/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/

  console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') // These console.logs are just to help make the console log better organized and more readable

counter = 1
while(counter <= 20){
  if ((counter % 2) === 0){
    console.log(counter)
  }
  counter += 1
}

for ( countera = 2; countera <= 20; countera += 2){
  console.log(countera + ' this is countera')
}

/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/

  console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
 
  counter = 1
while(counter <= 20){
  if ((counter % 2) !== 0){
    console.log(counter)
  }
  counter += 1
}

for ( countera = 1; countera <= 20; countera += 2){
  console.log(countera + ' this is countera')
}



/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/

  console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

  counter = 1
while(counter <= 100){
  if ((counter % 5) === 0){
    console.log(counter)
  }
  counter += 1
}

for ( countera = 5; countera <= 100; countera += 5){
  console.log(countera + ' this is countera')
}

/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/

  console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

  counter = 1
while(counter <= 100){
  let squareRoot = Math.sqrt(counter)
  if ((squareRoot % 1) === 0){
    console.log(counter)
  }
  counter += 1
}

for ( countera = 1; countera <= 100; countera++){
  let squareRoot = Math.sqrt(countera)
  if ((squareRoot % 1) === 0){
    console.log( squareRoot + ' this is countera')
  }
}

/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/

  console.log('%cKATA 06 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

  counter = 20
while(counter >= 1){
  console.log(counter)
  counter += - 1
}

for (countera = 20; countera > 0; countera--){
  console.log(countera + ' this is countera')
}




/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/

  console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

  counter = 20
while(counter >= 1){
  if ((counter % 2) === 0){
    console.log(counter)
  }
  counter += -1
}

for (countera = 20; countera > 0; countera-=2){
  console.log(countera + ' this is countera')
}

/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/

  console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

  counter = 20
  while(counter >= 1){
    if ((counter % 2) !== 0){
      console.log(counter)
    }
    counter += -1
  }

  for (countera = 19; countera > 0; countera-=2){
    console.log(countera + ' this is countera')
  }

/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/

  console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

  counter = 100
  while(counter >= 1){
    if ((counter % 5) === 0){
      console.log(counter)
    }
    counter -= 1
  }

  for (countera = 100; countera > 0; countera-=5){
    console.log(countera + ' this is countera')
  }

/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/

  console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

  counter = 100
  while(counter >= 1){
    if (((Math.sqrt(counter)) % 1) === 0){
      console.log(counter)
    }
    counter += -1
  }

  for (countera = 100; countera > 0; countera--){
    if (((Math.sqrt(countera)) % 1) === 0){
      console.log(countera)
    }
  }

  let s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'

  if( s.length <= 0 ){
    console.log('0/0')
  }else {
    let counterEnd = s.length
    let counter = 0
    let errorNum = 0
    let currentPos = s.charAt(0)
    while (counter <= counterEnd){
      currentPos = s.charAt(counter)
      console.log(currentPos)
      if (currentPos !== 'a'){
        errorNum += 1
      }
      counter ++
    }
  console.log(errorNum + '/' + s.length)
}




  