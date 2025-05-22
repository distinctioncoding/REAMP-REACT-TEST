import React from 'react';
import { AgentData } from '../../types/Agent';

type Props = {
    agent: AgentData;
};

const AgentCard: React.FC<Props> = ({ agent }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4">
            <h2 className="text-lg font-semibold">{agent.firstName}</h2>
            <h2 className="text-lg font-semibold">{agent.lastName}</h2>
            <p className="text-gray-600">Email: {agent.companyName}</p>
            <p className="text-gray-600">Phone: {agent.phoneNumber}</p>
        </div>
    );
};

export default AgentCard;
