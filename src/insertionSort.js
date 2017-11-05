module.exports = insertionSort;

function insertionSort(data){
    var result = [];

    for(var i=0;i<data.length;i++)
        insertNumber(result,data[i]);

    return result;


    function insertNumber(arr,num){

        for(var i=arr.length;i>0;i--){
            if(num < arr[i-1])
                arr[i] = arr[i-1];
            else{
                arr[i] = num;
                return;
            }
        }

        arr[0] = num;
    }
}
