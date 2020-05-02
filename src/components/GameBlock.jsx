import React, { Component } from 'react'
import { addMove, decideWinner } from '../redux/game/game';
import { connect } from 'react-redux';

class GameBlock extends Component {

    componentDidUpdate(){
        this.props.decideWinner(this.props.noOfMoves % 2 === 1 ? 'xMoves' : 'oMoves', this.props.noOfMoves % 2 === 1 ? this.props.xMoves : this.props.oMoves);
    }

    onClickBlock = (event) => {
        if (![...this.props.xMoves, ...this.props.oMoves].includes(Number(event.currentTarget.dataset.block))) {
            this.props.addMove([this.props.noOfMoves % 2 === 0 ? 'xMoves' : 'oMoves'], [...(this.props.noOfMoves % 2 === 0 ? [...this.props.xMoves] : [...this.props.oMoves]), Number(event.currentTarget.dataset.block)]);
        }
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
        console.log(this.props)
        return (
            <div className="game m-auto bg-white" id="game" style={{ width: 300 }}>
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
    seriesWinner : state.game.seriesWinner
})

export default connect(mapStateToProps, { addMove, decideWinner })(GameBlock);
