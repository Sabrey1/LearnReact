import React, {useState} from 'react'


const Demo1 = () => {

    const [text,setText] = useState("Null");
    const [student, setStudent] = useState();

    const handleClick = () =>{
        setText("Hello World");
    }

    const displayStudent = () => {
        setStudent({
            "id":1,
            "name":"Sabrey",
            "age":20,
            "gender":"Male"
        })
    }
  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
        <p>{text}</p>

        <button onClick={displayStudent}>Display Data:</button>
        {
            student && <ul>
                <li>
                    student id: {student.id}
                </li>
                <li>
                    student name: {student.name}
                </li>
                <li>
                    student age: {student.age}
                </li>
                <li>
                    student gender: {student.gender}
                </li>
            </ul>
        }
    </div>
  )
}

export default Demo1
