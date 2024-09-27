import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 0.5 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return <div id="preloader">
      <div className="lds-ripple"><div></div><div></div></div>
    </div>
  }else{ 
    return <></>
  }

}

export default Preloader;