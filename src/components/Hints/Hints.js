import React, {useEffect, useState} from 'react';
import './Hints.css'
const Hints = () => {
    const [showHints, setShowHints] = useState(false);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowHints(true);
    //     }, 5000)
    // }, []);
    return (
        
        <div className='hints'>
            {false &&
                <div className="hint">
                    <div>Press <span>Enter</span> <br/>to make ToDo</div>
                </div>
            }
            
        </div>
    );
};

export default Hints;