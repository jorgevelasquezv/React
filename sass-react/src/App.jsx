import React from 'react';
import Button from './components/Button';

const App = () => {
    return (
        <div>
            <h1 className="title">Sass</h1>
            <hr />
            <ul>
                <li>
                    <a href="#">Google</a>
                </li>
                <li>
                    <a href="#">Facebook</a>
                </li>
                <li>
                    <a href="#">Instagram</a>
                </li>
            </ul>
            <hr />
            <h2>Counter: 0</h2>
            <Button type="btn btn-primary" text="+1" />
            <Button type="btn btn-secondary" text="-1" />
        </div>
    );
};

export default App;
