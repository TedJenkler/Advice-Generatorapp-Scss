import React from 'react';
import decoration from '../assets/decoration.png';
import dice from '../assets/dice.png';
import useAdvice from '../hooks/useAdvice';

function Generator() {
    const { data, loading, error, refetch } = useAdvice();
    
    const handleGet = () => {
        refetch();
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className='generator'>
            <h1>ADVICE #{loading ? "loading..." : data?.slip?.id}</h1>
            <p>{loading ? "loading..." : data?.slip?.advice}</p>
            <img id='deco' src={decoration} alt='decoration' />
            <img 
                onClick={handleGet} 
                id='dice' 
                src={dice} 
                alt='dice'
            />
        </div>
    )
}

export default Generator;
