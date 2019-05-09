/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {

    let temparry = [0]

    if(numArray.length > 0){
        if(typeof(numArray) === typeof(temparry) && typeof(numArray[0]) === typeof(temparry[0]) ){
            let temp = 0

            for(let i = 0; i < numArray.length; i++){
                for(let j = 0; j < numArray.length; j++){
                    if(numArray[i] < numArray[j] ){
                        temp = numArray[j]
                        numArray[j] = numArray[i]
                        numArray[i] = temp
                    }
                }
            }
        
            console.log(numArray)
          
        } else {
            console.log('Hey! These aren\'t numbers!')
        }
    }else{
        console.log('You didn\'t input an array of numbers!')
    }

   
}

let numArray = [2,5,64,22,34,124,53]

bubbleSort(numArray)