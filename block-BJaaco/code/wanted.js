let wanted  =[false, undefined, '',  0, null]

function notwanted(input) {
    for (i=0 ; i< wanted.length  ;i++)  {
        if (input != wanted[i]) {
            return true
        }
    }
}


function clear(array)  {
    let final =[]
    for (i=0 ; i<array.length ;i++)  {
        if (notwanted(array[i])) {
            final.push(array[i])
        }
    }
    console.log(final)
}

clear([1, 2, 3, 4, '', 0, null, undefined]);