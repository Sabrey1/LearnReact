import { useState, useEffect} from "react";
import api from  "./services/api.js"

function MyApp(){
  const [customer,setCustomer] = useState([]);

  async function getCustomer(){
    const res = await api.get("customer")
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
              margin:"10px 10px",
              borderRadius:"10px"
            }}>
          <p>{c.name}</p>
          <p>{c.gender}</p>
          <p>{c.email}</p>
          <p>{c.phone}</p>
          <p>{c.address}</p>
          <p>{c.note}</p>
          </div>
          
        </div>
      ))}
      
    </div>
  )
}
export default MyApp