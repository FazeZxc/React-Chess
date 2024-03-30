import React, { useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react'

export const LoaderCirlce = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, []);
    return <>
        {loading ? <div className='bg-slate-600 flex justify-center items-center h-screen w-full'> <Loader active inline='centered' /></div>
            : children}
    </>



}

