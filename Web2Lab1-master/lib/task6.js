// task6
let Arr = [4,5,2,8,-1,5,57,-42];

function QuickSort(Arr)
{
    if (Arr.length === 0){
        return []}
    let a = [], b = [], p = Arr[0];
    for (let i = 1; i < Arr.length; i++)
    { if (Arr[ i ] < p) a[a.length] = Arr[ i ];
    else b[b.length] = Arr[ i ];
    }
    return QuickSort(a).concat( p,QuickSort(b) );
}

console.log(QuickSort(Arr));