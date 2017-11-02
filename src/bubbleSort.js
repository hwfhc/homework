module.exports = bubbleSort;

function bubbleSort(data){
    for(var i=0;i<data.length;i++){
        for(var j=0;j<data.length;j++){

            var index = getBigger(data,j,j+1);

            if(index == j){
                exchangeTwoNumber(data,j,j+1);
            }

        }
    }

    return data;



    function getBigger(arr,i,j){
        if(arr.length <= i) return undefined;
        if(arr.length <= j) return undefined;

        if(arr[i] > arr[j]) return i;
        return j;

    }

    function exchangeTwoNumber(arr,i,j){
        var tem = arr[i];

        arr[i] = arr[j];
        arr[j] = tem;
    }
}
