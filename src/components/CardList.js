import React from 'react';
import Card from './Card';

const CardList = ({peoples}) => {
    
    return(
        <div>
            {
                peoples.map(
                    (data, i) => {
                        return (
                            <Card 
                            key={i}
                            id={peoples[i].name}
                            name={peoples[i].name}
                            gender={peoples[i].gender}
                            height={peoples[i].height}
                            birth_year={peoples[i].birth_year}    
                            />
                        );
                    }
                )
            }
        </div>
    );

}

export default CardList;
