const test=document.getElementById('divId');
var colors=['red','green']
var i=0
function change()
{
    if(i===0) {
        test.style.color=colors[i]
        i=1
    }
    if(i===1){
        test.style.color = colors[i]
        i = 0
    }
}