import Demo from "./Basic/demo1.jsx"
import Demo2 from "./Basic/demo2.jsx"
import Demo3 from "./Basic/demo3.jsx"
import Demo4 from "./Basic/demo4.jsx"
import Demo5 from "./Basic/demo5.jsx"
import Demo6 from "./Basic/demo6.jsx"
// import {student} from "./data/student.js"

import DemoEv1 from "./event/Demo1.jsx"

import SDemo1 from "./state/demo1.jsx"

import SDemo2 from "./state/Demo2.jsx"

import SDemo3 from "./state/Demo3.jsx"

function App(){

   
  return(
    <div>
      {/* <Demo/> */}
      {/* <Demo2 name="sabrey"/>
      <Demo2 name="Sara"/> */}

      {/* <Demo3 name="sabrey" gender="male"/>
      <Demo3 name="sara" gender="female"/> */}

      {/* <Demo4 data={
        {"id":1,"name":"sabrey","gender":"male"}
      }/> */}

      {/* <Demo5 data={
        [
          {
            "id":1,
            "name":"Sabrey",
            "age":20,
            "gender":"Male"
          },
          {
            "id":2,
            "name":"Sara",
            "age":19,
            "gender":"Female"
          }
        ]
      }/> */}

      {/* <Demo6 data={student} /> */}
      
      {/* <DemoEv1 /> */}

      {/* <SDemo1 /> */}

      {/* <SDemo2 /> */}
      
      <SDemo3 />

    </div>
  )
}
export default App