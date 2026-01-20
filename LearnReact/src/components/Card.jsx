import './Card.css'
const Card = ({Product:{img,brand,Desc,price}}) =>{
    return <article>
        <img src={img} />
        <h3>{brand}</h3>
        <p>{Desc}</p>
        <span>{price}</span>
    </article>
}

export default Card