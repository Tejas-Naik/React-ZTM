import React from 'react';
import CardContainer from '../card-contaner/card-container.component';
import "./card-list.styles.css";

function CardList({ monsters }) {
    return (
        <div className='card-list'>
            {monsters.map(monster => {
                const { id, name, email } = monster;
                return (
                    <CardContainer id={id} name={name} email={email} />
                )
            })}
        </div>
    )
}

export default CardList;