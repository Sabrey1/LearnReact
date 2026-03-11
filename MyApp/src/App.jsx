import { useState, useEffect} from "react";
import axios from "axios";


function MyApp(){
  const [customer,setCustomer] = useState([]);

  async function getCustomer(){
    const res = await axios.get("http://127.0.0.1:8000/api/customer")
    if(res.data){
      setCustomer(res.data)
    }
  }

  useEffect(() => {
    getCustomer();
    
  }, []);

  return(
    <div>
      <h2>Customer List</h2>
      {customer.map((c) => (
        <div key={c.id}>
          <div 
            style={{
              backgroundColor:"gray",
              padding:"10px",
              
              
            
            }}>
          <p>{c.name}</p>
          <p>{c.email}</p>
          </div>
          
        </div>
      ))}
      
    </div>
  )
}
export default MyApp