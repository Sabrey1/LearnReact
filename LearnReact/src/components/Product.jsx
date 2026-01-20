import Card from "./Card"

const Product = () => {
    const shoes = [
        {id: 1,img:"https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",brand:"Nike",Desc:"Nike Air Force 1",price:"$100", 
        brand:"Adidas",
        Desc:"Nike Air Force 1",
        price:"$200",},
        {id: 2,img:"https://images.pexels.com/photos/11737179/pexels-photo-11737179.jpeg",brand:"Nike",Desc:"Nike Air Force 1",price:"$100", 
        brand:"Nike",
        Desc:"Nike Air Force 1",
        price:"$10",},
        {id: 3,img:"https://images.pexels.com/photos/19090/pexels-photo.jpg",brand:"Nike",Desc:"Nike Air Force 1",price:"$100", 
        brand:"Adidas",
        Desc:"Nike Air Force 1",
        price:"$1000",},   
    ]
    return <div>
        {shoes.map((p) => {
            return <Card Product={p} key={p.id} />
        })}
    </div>
}
export default Product