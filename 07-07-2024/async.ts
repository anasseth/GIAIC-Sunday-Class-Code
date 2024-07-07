

// console.log("add water")
// setTimeout(()=>{
//     console.log("add tea leaves")
// },5000)
// setTimeout(()=>{
//     console.log("add sugar")
// },2000)
// setTimeout(()=>{
//     console.log("tea is ready")
// },1000)

// function abc(){
//     console.log('hello world')
// }

// function printConsole(cb:()=>void){
//     cb()
// }

// printConsole(()=>{})

// function prepareTea(taskName: string, delay: number, cb: () => void) {
//     setTimeout(() => {
//         console.log(taskName)
//         cb()
//     }, 5000) // -> WebAPI
// }

// prepareTea("add water", 0, () => {
//     prepareTea("add tea leaves", 5000, () => {
//         prepareTea('add sugar', 2000, () => {
//             prepareTea("tea is ready", 1000, () => { })
//         })
//     })
// })


// function prepareTea(taskName:string, delay:number,cb:()=>void){
//     setTimeout(()=>{
//         console.log(taskName)
//         cb()
//     },delay)
// }

// preparesTea('add water',0,()=>{

// })




// preparesTea("add water", 0)
//     .then(() => preparesTea("add tea leaves", 5000))
//     .then(() => preparesTea("add sugar", 2000))
//     .then(() => preparesTea("tea is ready", 1000))
//     .catch(() => console.log('something went wrong'))
//     .finally(() => console.log("finally is running"))

// Recipe of Tea
// 1. add water
// 2. after 5 seconds add tea leaves
// 3. after 2 seconds add sugar
// 4. cook it for 1 second and after this tea is ready

function preparesTea(taskName: string, delay: number): Promise<void> {

    let promise: Promise<void> = new Promise((resolve, reject) => {
        let error = false;
        setTimeout(() => {
            if (error) {
                reject()
            } else {

                console.log(taskName)
                resolve()
            }

        }, delay)
    })

    return promise
}

async function runPromises(){
    try{
    await preparesTea("add water",0)
    await preparesTea("add tea leaves", 5000)
    throw new Error("erorr")
    await preparesTea(" add sugar", 2000)
    await preparesTea("tea is ready", 1000)
   }catch{
    console.log("something went wrong")
   }
}

runPromises()