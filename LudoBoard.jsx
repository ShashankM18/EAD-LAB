import {useState} from 'react';
export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,green:0,red:0,yellow:0});

    let updateBlue=()=>{
        moves.blue+=1;
        console.log(`moves.blue=${moves.blue}`);
        setMoves({...moves});
    }
    let updateGreen=()=>{
        moves.green+=1;
        console.log(`moves.green=${moves.green}`);
        setMoves({...moves});
    }
    let updateYellow=()=>{
        moves.yellow+=1;
        console.log(`moves.yellow=${moves.yellow}`);
        setMoves({...moves});
    }
    let updateRed=()=>{
        moves.red+=1;
        console.log(`moves.red=${moves.red}`);
        setMoves({...moves});
    }

    return(
        <div>
            <p>Game Begins!</p>
            <div className="chessboard">
                <p>Blue moves={moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
                <p>Red moves={moves.red}</p>
                <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
                <p>Green moves={moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
                <p>Yellow moves={moves.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>+1</button>

            </div>
        </div>
    )
}