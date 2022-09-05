function getAverage(a:number,b:number,c?:number):number {
    return (a+b+(c??0))/3
}

// console.log(getAverage(1,2,3) , getAverage(3,3))


const getAverageArr = (...a:number[]):number=>{
    let total = 0;
    a.forEach(element => {
        total += element
    });
    
    return total/a.length;
}
console.log(getAverageArr(1,2,34,55,5,67,8))

