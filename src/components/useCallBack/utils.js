const shuffle = (array) => {
    for(var i=0; i < array.length-1; i++ ) {
        var randomIndex = Math.floor(Math.random() * array.length-1) + 1
        var temp = array[i]
        array[i] = array[randomIndex]
        array[randomIndex] = temp
    }
    return array
}

export default shuffle