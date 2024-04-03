function onButton(e){
    let btn=e.target || e.srcElement;
    let res=document.querySelector('#res')
    let actions=document.getElementById(btn.id).innerHTML;
    console.log('this is id',actions)
    switch (actions) {
         case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/':
            res.innerHTML+=actions
        break;
        case 'C':
            res.innerHTML=''
            break;

        case '=':
            let expr=res.innerHTML;
            let nums=/(\d+)/g;
             // Replace all base 2 nums with base 10 equivs
            expr = expr.replace(nums, function(match) {
                return parseInt(match, 2);
            })
            // eval in base 10 and convert to base 2
            res.innerHTML = eval(expr).toString(2);
            break;
    
        default:
            break;
    }
}


var buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.onclick = onButton;
}
