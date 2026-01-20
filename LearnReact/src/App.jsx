
function App(){
   return (
    <>
        <form  >
            <input type="text" />
            <button onClick={(e)=> {
                e.preventDefault()
                console.log("clicked")}}  type="submit">Click me</button>
        </form>
        
    </>
   );

}
export default App