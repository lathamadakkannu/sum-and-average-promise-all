let check1=new Promise((resolve,reject)=>{
    let prime=true
    //let prime=false
    if(prime){
        resolve(2)
    }
    else{
        reject()
    }
    })
    
    let check2 =new Promise((resolve,reject)=>{
        let prime=true
        if(prime){
            resolve(5)
        }
        else{
            reject()
        }
        })
    
        let check3=new Promise((resolve,reject)=>{
            let prime=true
            if(prime){
                resolve(4)
            }
            else{
                reject()
            }
            })
    let result=Promise.all([2,5,4]).then((msg)=>{
        let prime=true
    let num=0
    for (n of msg){
        num=num+n
    }
    document.write(`Sum of three numbers: ${num} <br><br>`)
    let result=num/3
    document.write(`Average: ${result}`)
})


