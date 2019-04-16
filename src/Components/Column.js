import React, {Component} from 'react';
import styled from 'styled-components'
import Card from "./Card";

const Header = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.color}
`;

const Wrapper = styled.div`
  padding: 12.5px
  width: 200px;
`;

class Column extends Component {



    render() {
        const {index, column: {name, list, color}, callback, moveCard, removeCard, changeCard} = this.props;
        const listWrapper = list.map((e,i) => <Card key={i} columnIndex={index} cardIndex={i} text={e} moveCard={moveCard} removeCard={removeCard} changeCard={changeCard}/>);
        return (
            <Wrapper>
                <Header color={color}>
                    <h2>{name}</h2>
                </Header>
                {listWrapper}
                <h4 onClick={() => callback(index)}>+ Add a Card</h4>
            </Wrapper>
        );
    }
}

export default Column;