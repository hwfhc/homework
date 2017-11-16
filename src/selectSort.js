module.exports = selectSort;

function selectSort(data){
    for(var i=0;i<data.length;i++){
        var result = getSmallest(data,i);

        exchangeTwoNumber(data,result.index,i);
    }

    return data;



    function getSmallest(arr,startIndex){
        var min = arr[startIndex];
        var index = startIndex;

        for(var i=startIndex;i<arr.length;i++){
            if(arr[i] < min){
                index = i;
                min = arr[i];
            }
        }

        return {
            value: min,
            index : index
        };
    }

    function exchangeTwoNumber(arr,i,j){
        var tem = arr[i];

        arr[i] = arr[j];
        arr[j] = tem;
    }

}
