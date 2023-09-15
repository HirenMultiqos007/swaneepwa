export default function swDev(params) {
    let swUrl=`/sw.js`
    navigator.serviceWorker.register(swUrl).then((res)=>{
        console.log(res,"res")
    }).catch((err)=>{
        console.log(err)
    })
}