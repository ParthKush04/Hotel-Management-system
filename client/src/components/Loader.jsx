import React,{useState} from 'react'
import RingLoader from "react-spinners/RingLoader";
function Loader() {
  let [loading, setLoading] = useState(true);
    return (
        <div style = {{marginLeft : '50%'}}>
        <div className="sweet-loading text-center" >
        <RingLoader
          color={'#000'}
          loading={loading}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
      </div>  
    );
}

export default Loader
