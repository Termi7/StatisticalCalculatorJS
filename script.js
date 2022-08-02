function performStatistics() {
    // Read array from textarea
    const arr =  document.getElementById('userInput').value.split(' ').map(Number);
  
    

    
    
    
    // using all the functions and showing output
     document.getElementById('max').value = findMax(arr).toFixed(2);
    document.getElementById('min').value  = findMin(arr).toFixed(2);
    document.getElementById('sum').value  = calcSum(arr).toFixed(2);
    document.getElementById('mean').value  = calcMean(arr).toFixed(2);
    document.getElementById('median').value  = calcMedian(arr).toFixed(2);
    document.getElementById('mode').value = calcMode(arr).join(' ');
    document.getElementById('variance').value  = calcVariance(arr).toFixed(2);
    document.getElementById('stdDev').value  = calcStandardDeviation(arr).toFixed(2);

    return false;
  }

  
  
  function findMin(arr) {
    var min = arr[0];
  
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  
    return min;
  }
  
  function findMax(arr) {
    var max = arr[0];
  
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
}



  function calcSum(arr) {
    var sum = 0;
  
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
  
    return sum;
  }

  function calcMean(arr) {
    var sum = calcSum(arr);
  
    return sum/arr.length;
  }

  function calcMedian(arr) {
  
    // sorting the array 
    arr.sort(); 
  
    var half = Math.floor(arr.length/2);
  
    if(arr.length % 2)
      return arr[half];
    else
      return (arr[half-1] + arr[half]) / 2.0;
  }

  function calcVariance(array) {
	var x = 0;
	var mean = calcMean(array);
    var size =  array.length;
	for (var i=0;i <size; i++) {
        x = x + (array[i] - mean) * (array[i] - mean); 
    }
    return x/size;
}

  function calcStandardDeviation(arr) {
    return Math.sqrt(calcVariance(arr));
  }


function calcMode(arr) {
    var modes = [];
    var count = [];
    var  i = 0;
    var number = 0;
    var maxIndex = 0;
    for (i = 0; i < arr.length; i += 1) {
      number = arr[i];
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxIndex) {
        maxIndex = count[number];
      }
    }
    for (i in count)  {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }
    return modes;
  }