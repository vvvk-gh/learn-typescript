function addAndHandle(n1:number, n2:number, cb:(a: number)=> void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(9, 9, (result)=>{ console.log(result)})
