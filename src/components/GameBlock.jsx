import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import { addMove, decideWinner } from '../redux/game/game';
import { connect } from 'react-redux';

class GameBlock extends Component {

    componentDidUpdate(prevProps, prevState){
        this.props.decideWinner(this.props.noOfMoves % 2 === 1 ? 'xMoves' : 'oMoves', this.props.noOfMoves % 2 === 1 ? this.props.xMoves : this.props.oMoves);
        
    }

    onClickBlock = (event) => {
        if (![...this.props.xMoves, ...this.props.oMoves].includes(Number(event.currentTarget.dataset.block))) {
            this.onClickAddMark(event.currentTarget);
            this.props.addMove([this.props.noOfMoves % 2 === 0 ? 'xMoves' : 'oMoves'], [...(this.props.noOfMoves % 2 === 0 ? [...this.props.xMoves] : [...this.props.oMoves]), Number(event.currentTarget.dataset.block)]);
        }
    }

    onClickAddMark = (target) => {
        const iconMark = document.createElement('div')
        iconMark.classList.add(`block-${this.props.noOfMoves % 2 === 0 ? 'x' : 'o'}`)
        iconMark.innerHTML = `${this.props.noOfMoves % 2 === 0 ? 'X' : 'O'}`;
        findDOMNode(target).appendChild(iconMark)
    }

    renderBlock = () => {
        let blockGroup = [];
        let rowBlock = [];
        for(let i = 1 ; i<=9 ; i++) {
            rowBlock.push(<div className="col border" data-block={i} onClick={this.onClickBlock}></div>)
            if(i%3 === 0) {
                blockGroup.push(<div className="row block-row m-auto">{rowBlock}</div>);
                rowBlock = [];
            }
        }
        return blockGroup;
    }

    render() {
        console.log(this.props);
        return (
            <div className="game m-auto bg-white" style={{ width: 300 }}>
                {this.renderBlock()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    noOfMoves : state.game.noOfMoves,
    xMoves : state.game.xMoves,
    oMoves : state.game.oMoves,
    winner : state.game.winner
})

export default connect(mapStateToProps, { addMove, decideWinner })(GameBlock);
