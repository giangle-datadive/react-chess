import React, { Component } from 'react'
import './App.scss'

const arr = [...Array(8)]

const ROCK = 'R'
const BISHOP = 'B'
const QUEEN = 'Q'
const KING = 'K'
const KNIGHT = 'N'
const PAWN = 'P'

const BLACK = 'BLACK'
const WHITE = 'WHITE'

const images = {
  [ROCK]: {
    [BLACK]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png',
    [WHITE]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png',
  },
  [BISHOP]: {
    [BLACK]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png',
    [WHITE]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png',
  },
  [QUEEN]: {
    [BLACK]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png',
    [WHITE]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png',
  },
  [KING]: {
    [BLACK]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png',
    [WHITE]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png',
  },
  [KNIGHT]: {
    [BLACK]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png',
    [WHITE]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png',
  },
  [PAWN]: {
    [BLACK]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png',
    [WHITE]: 'http://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png',
  },
}

class App extends Component {

  state = {
    items: [
      {
        type: ROCK,
        position: '00',
        side: BLACK,
      },
      {
        type: ROCK,
        position: '07',
        side: BLACK,
      },
      {
        type: ROCK,
        position: '70',
        side: WHITE,
      },
      {
        type: ROCK,
        position: '77',
        side: WHITE,
      },

      {
        type: QUEEN,
        position: '03',
        side: BLACK,
      },
      {
        type: QUEEN,
        position: '73',
        side: WHITE,
      },

      {
        type: KING,
        position: '04',
        side: BLACK,
      },
      {
        type: KING,
        position: '74',
        side: WHITE,
      },

      {
        type: BISHOP,
        position: '02',
        side: BLACK,
      },
      {
        type: BISHOP,
        position: '05',
        side: BLACK,
      },
      {
        type: BISHOP,
        position: '72',
        side: WHITE,
      },
      {
        type: BISHOP,
        position: '75',
        side: WHITE,
      },

      {
        type: KNIGHT,
        position: '01',
        side: BLACK,
      },
      {
        type: KNIGHT,
        position: '06',
        side: BLACK,
      },
      {
        type: KNIGHT,
        position: '71',
        side: WHITE,
      },
      {
        type: KNIGHT,
        position: '76',
        side: WHITE,
      },

      {
        type: PAWN,
        position: '10',
        side: BLACK,
      },
      {
        type: PAWN,
        position: '11',
        side: BLACK,
      },
      {
        type: PAWN,
        position: '12',
        side: BLACK,
      },
      {
        type: PAWN,
        position: '13',
        side: BLACK,
      },
      {
        type: PAWN,
        position: '14',
        side: BLACK,
      },
      {
        type: PAWN,
        position: '15',
        side: BLACK,
      },
      {
        type: PAWN,
        position: '16',
        side: BLACK,
      },
      {
        id: 23,
        type: PAWN,
        position: '17',
        side: BLACK,
      },

      {
        type: PAWN,
        position: '60',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '61',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '62',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '63',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '64',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '65',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '66',
        side: WHITE,
      },
      {
        type: PAWN,
        position: '67',
        side: WHITE,
      },
    ],
    selectedIndex: null,
  }

  isBlack = (rowIndex, columnIndex) => {
    return (rowIndex + columnIndex) % 2 === 1
  }

  renderItem = (pos) => {
    const { items } = this.state
    const item = items.find(it => it.position === pos)

    return item && <img style={{ width: 70 }} src={images[item.type][item.side]} alt={item.type} />
  }

  indexOfPos = (pos) => {
    const { items } = this.state
    return items.findIndex(item => item.position === pos)
  }

  onDragStart = (e, pos) => {
    const index = this.indexOfPos(pos)
    this.setState({
      selectedIndex: index,
    })
  }

  onDragOver = (e) => {
    e.preventDefault()
  }

  onDrop = (e, pos) => {
    const { selectedIndex, items } = this.state
    this.setState({
      items: items.map((item, i) => {
        if (i === selectedIndex) {
          return {
            ...item,
            position: pos,
          }
        }

        return item
      }),
      selectedIndex: null,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="chess">
          {arr.map((item, index) => (
            <div key={index} className="row">
              {arr.map((it, i) => {
                const pos = `${index}${i}`
                return (
                  <div
                    draggable="true"
                    onDragStart={e => this.onDragStart(e, pos)}
                    onDragOver={e => this.onDragOver(e, pos)}
                    onDrop={e => this.onDrop(e, pos)}
                    onDrag={this.onDrag} key={i}
                    className={`box ${this.isBlack(index, i) ? 'black' : ''}`}
                  >
                    {this.renderItem(pos)}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
