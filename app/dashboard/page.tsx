import React from 'react';
import { MdHeight } from 'react-icons/md';

interface Props {
    // Define your component props here
}

const Dashboard: React.FC<Props> = () => {
    return (
        <div style={{ height: '90vh' }}>
            <h3>dashboard</h3>
            <h3>dashboard1</h3>
            <h3>dashboard2</h3>
            <h3>dashboard3</h3>
            <h3>dashboard4</h3>
        </div>
    );
};

export default Dashboard;