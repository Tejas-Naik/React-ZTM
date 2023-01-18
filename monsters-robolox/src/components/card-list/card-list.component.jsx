import React, { Component } from 'react';

class CardList extends Component {
    render() {
        console.log(this.props.monsters)        // when different props are passed the dom renders (and setState changes)
        console.log("render from CardList");
        const { monsters } = this.props;
        return (
            <div>
                {monsters.map(monster => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        )
    }
}

export default CardList;