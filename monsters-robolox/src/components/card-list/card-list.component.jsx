import React, { Component } from 'react';
import CardContainer from '../card-contaner/card-container.component';
import "./card-list.styles.css";

class CardList extends Component {
    render() {
        console.log(this.props.monsters)            // when different props are passed the dom renders (and setState changes)
        console.log("render from CardList");
        const { monsters } = this.props;
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
}

export default CardList;