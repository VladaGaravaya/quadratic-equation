module.exports = function solveEquation(equation) {
    var a,b,c='';
    var arr=[];
    arr=equation.split(' ');
    a=+arr[0];
    if(arr[3]=='-'){
        arr[4]='-'+arr[4];
    }
    if(arr[7]=='-'){
        arr[8]='-'+arr[8];
    }
    b=+arr[4];
    c=+arr[8];
    function compareNumbers(a, b) {
        return a - b;
    }
    return [Math.round((-b-Math.sqrt(b*b-4*a*c))/(2*a)),Math.round((-b+Math.sqrt(b*b-4*a*c))/(2*a))].sort(compareNumbers);
}
