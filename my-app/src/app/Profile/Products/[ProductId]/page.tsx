export default function productdetails({params} : {
    params : {ProductId : string}
}){
    return <h1>Each rpoduct {params.ProductId}</h1>
}