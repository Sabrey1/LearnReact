function Demo1(){

    const name = "sabrey"
    const address = "Cambodia"

    const a = 10


    const students = [
        "Sabrey",
        "Sara",
        "Sokha",
        "Sovanny",
        "Sovannary"
    ]

    return(
        <div>
            <p style={{color:"red",backgroundColor:"yellow", margin:"0" }}>Hello world</p>
            <p>Name: {name}</p>
            <p>Address: {address}</p>
            <p>{a ==10 && "a is 10"}</p>
            
            <ul>
                {students.map(function(value,index){
                    return <li key={index}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Demo1