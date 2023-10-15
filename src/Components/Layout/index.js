import React from 'react';
import List from '../List';
import exampleList from '../exampleList';

const Layout = () => {
    return (
        <div>
            <List list={exampleList} />
        </div>
    );
};

export default Layout;
