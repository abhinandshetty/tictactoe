import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';

class GameBlock extends Component {
    state = {
        move: 0,
        xMoves: [],
        oMoves: []
    }

    onClickBlock = (event) => {
        if (![...this.state.xMoves, ...this.state.oMoves].includes(Number(event.currentTarget.dataset.block))) {
            this.onClickAddMark(event.currentTarget);
            const obj = {};
            obj[this.state.move % 2 === 0 ? 'xMoves' : 'oMoves'] = [...(this.state.move % 2 === 0 ? [...this.state.xMoves] : [...this.state.oMoves]), Number(event.currentTarget.dataset.block)];
            this.setState((prev) => {
                return { move: prev.move + 1, ...obj }
            });
        }
    }

    onClickAddMark = (target) => {
        const elem = document.createElement('div')
        elem.classList.add(`block-${this.state.move % 2 === 0 ? 'x' : 'o'}`)
        elem.innerHTML = `${this.state.move % 2 === 0 ? 'X' : 'O'}`;
        findDOMNode(target).appendChild(elem)
    }

    renderBlock = () =>{
        let elems = [];
        let rowBlock = [];
        for(let i = 1 ; i<=9 ; i++) {
            rowBlock.push(<div className="col border" data-block={i} onClick={this.onClickBlock}></div>)
            if(i%3 === 0) {
                elems.push(<div className="row block-row m-auto">{rowBlock}</div>);
                rowBlock = [];
            }
        }
        return elems;
    }

    render() {
        return (
            <div className="game m-auto bg-white" style={{ width: 300 }}>
                {this.renderBlock()}
            </div>
        )
    }
}

export default GameBlock
