import React from 'react';

interface ErrorMessageProps {
    error: string
}

const ErrorMessage = ({error}: ErrorMessageProps) => {
    return (
        <div>
            <p className='text-center text-red'>{error}</p>
        </div>
    );
};

export default ErrorMessage;