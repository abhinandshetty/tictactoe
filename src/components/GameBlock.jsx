import React, { Component } from 'react'
import { addMove, decideWinner } from '../redux/game/game';
import { connect } from 'react-redux';

class GameBlock extends Component {
    componentDidUpdate(prevProps){
        this.props.decideWinner(this.props.noOfMoves % 2 === 1 ? 'xMoves' : 'oMoves', this.props.noOfMoves % 2 === 1 ? this.props.xMoves : this.props.oMoves);
        // if(this.props!==prevProps)
        //     this.onAddMove([1,2,3,4,5,6,7,8,9].filter(o1 => [...this.props.xMoves,...this.props.oMoves].every(o2 => o1 === o2))[Math.ceil(Math.random()*[1,2,3,4,5,6,7,8,9].filter(o1 => [4,6,8].every(o2 => o1 !== o2)).length)])
    }

    onClickBlock = (event) => {
        if (![...this.props.xMoves, ...this.props.oMoves].includes(Number(event.currentTarget.dataset.block))) {
            this.onAddMove(Number(event.currentTarget.dataset.block));
        }
    }

    onAddMove = (blockNo) => {
        this.props.addMove([this.props.noOfMoves % 2 === 0 ? 'xMoves' : 'oMoves'], [...(this.props.noOfMoves % 2 === 0 ? [...this.props.xMoves] : [...this.props.oMoves]), blockNo]);
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
    seriesWinner : state.game.seriesWinner
})

export default connect(mapStateToProps, { addMove, decideWinner })(GameBlock);
