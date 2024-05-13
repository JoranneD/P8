import React from 'react';
import '../Main/_main.scss';

function Main({children, className}) {
    return (
        <main className={`kasa-main ${className}`}>
            {children}
        </main>
    );
}

export default Main