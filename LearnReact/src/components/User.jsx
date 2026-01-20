const names = ["Sabrey" , "Kaka", "LaLa" ,"Heng Navy"]

const userNames = names.map(function(n){
    return <h3>{n}</h3>
})
const User = () => {
    return <div>
        {names.map(n=> <h3>{n}</h3>)}
    </div>
}

export default User