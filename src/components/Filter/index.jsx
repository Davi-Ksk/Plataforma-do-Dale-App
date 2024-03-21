import React, { useState } from "react";

import { Container } from "./styles";
import { MultiSelect } from 'primereact/multiselect';
        

export function Filter() {

    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }

    ];

        const [selectedCities2, setSelectedCities2] = useState(null);
        const cities2 = [
            { name2: 'New York', code: 'NY' },
            { name2: 'Rome', code: 'RM' },
            { name2: 'London', code: 'LDN' },
            { name2: 'Istanbul', code: 'IST' },
            { name2: 'Paris', code: 'PRS' }
    ];
    
    return (
        <Container>
            
            <div className="card flex justify-content-center">
                <   MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                    placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
            </div>

            <div className="card flex justify-content-center">
                <MultiSelect value={selectedCities2} onChange={(e) => setSelectedCities(e.value)} options={cities2} optionLabel="name2" 
                filter placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
        
        </Container>
    )

}