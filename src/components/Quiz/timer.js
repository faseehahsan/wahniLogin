import React, { useState, useEffect } from 'react'

function Timer(props) {

    const [duration, setDuration] = useState(30);

    const { timeOver, setTimeOver } = props;

    useEffect(() => {
       
            const interval = setInterval(() => {
                if (!timeOver) {
                    setDuration(duration => duration - 1);
                }
    
              }, 1000);

              setTimeout(
                  () => {
                      setTimeOver(true)
                      setDuration('TIME OUT')
                        }
                , 30000);

            return () => clearInterval(interval);
        
      }, [timeOver]);


  return (
   
    <div>
        {duration}
    </div>

  );
}

export default Timer;
