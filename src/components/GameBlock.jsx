import React, { Component } from 'react'
import { addMove, decideWinner } from '../redux/game/game';
import { connect } from 'react-redux';

const blockValueList = [1,2,3,4,5,6,7,8,9];

class GameBlock extends Component {
    componentDidMount(){
        this.performBotMove();
    }
    componentDidUpdate(){
        this.props.decideWinner(this.props.noOfMoves % 2 === 1 ? 'xMoves' : 'oMoves', this.props.noOfMoves % 2 === 1 ? this.props.xMoves : this.props.oMoves, this.props.noOfMoves);
        this.performBotMove();
    }

    performBotMove = () => {
        if(this.props.mode==='SINGLE' && this.props.turn) {
            let exclusionList = blockValueList.filter(value1 => [...this.props.xMoves,...this.props.oMoves].every(value2 => value1 !== value2));           
            this.onAddMove(exclusionList[Math.ceil(Math.random()*exclusionList.length-1)])
        }
    }

    onClickBlock = (event) => {
        if (![...this.props.xMoves, ...this.props.oMoves].includes(Number(event.currentTarget.dataset.block))) {
            this.onAddMove(Number(event.currentTarget.dataset.block));
        }
    }

    onAddMove = (blockNo) => {
        this.props.addMove([this.props.noOfMoves % 2 === 0 ? 'xMoves' : 'oMoves'], [...(this.props.noOfMoves % 2 === 0 ? [...this.props.xMoves] : [...this.props.oMoves]), blockNo]);
    }

    onBotMove = () => {

    }

    renderBlock = () => {
        let blockGroup = [];
        let rowBlock = [];
        for(let i = 1 ; i<=9 ; i++) {
            rowBlock.push(<div className={`col border ${this.props.xMoves.includes(i) ? "block-x" : this.props.oMoves.includes(i) ? "block-o" : ""}`} data-block={i} onClick={this.onClickBlock}></div>)
            if(i%3 === 0) {
                blockGroup.push(<div className="row block-row m-auto">{rowBlock}</div>);
                rowBlock = [];
            }
        }
        return blockGroup;
    }

    render() {
        return (
            <div className="game mx-auto bg-white" id="game" style={{ width: 300 }}>
                {this.renderBlock()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    noOfMoves : state.game.noOfMoves,
    xMoves : state.game.xMoves,
    oMoves : state.game.oMoves,
    winner : state.game.winner,
    seriesWinner : state.game.seriesWinner,
    mode : state.game.mode,
    turn : state.game.turn
})

export default connect(mapStateToProps, { addMove, decideWinner })(GameBlock);
