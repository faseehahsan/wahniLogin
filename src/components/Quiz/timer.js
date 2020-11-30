import React, { useState, useEffect } from 'react'

function Timer(props) {

    const [duration, setDuration] = useState(30);
    const [timeOver, setTimeOver] = useState(false);

    useEffect(() => {
       
            const interval = setInterval(() => {
                if (!timeOver) {
                    setDuration(duration => duration - 1);

                } else {
                    setDuration('TIME OUT')
                    props.setShowScore(true)
                }
    
              }, 1000);

              setTimeout(
                  () => {
                      setTimeOver(true)
                      console.log('timeout set')
                  }
                , 30000);
            return () => clearInterval(interval);
        
      }, [timeOver]);

    const [started, setStarted] = useState(false);

    


  return (
   
    <div>
        {duration}
    </div>

  );
}

export default Timer;
