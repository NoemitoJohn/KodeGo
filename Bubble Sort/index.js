// let input = [ 2, 8, 5, 10, 3, 9, 4, 1]

let input = [ 2, 8, 12, 5, 10, 3, 11, 9, 4, 1 ]

function bubbleSort(arr)
{
    for (let i = 0; i < arr.length ; i++)
    {

        for (let j = 0; j < (arr.length - i - 1) ; j++) {
            
            if (arr[j] > arr[j+1]) 
            {
                let temp = arr[j];  
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
                
            }
        }   

    }
}


