import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useAdvice = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://api.adviceslip.com/advice');
            setData(response.data);
        } catch (error) {
            setError('Can\'t fetch advice');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
};

export default useAdvice;