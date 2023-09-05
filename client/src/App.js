import './App.css';
import { useState } from 'react';
import { Header } from './components/header/Header'
import { Score } from './components/score/Score'
import { Choice } from './components/choice/Choice'
import { pickList, cpuRandomPick, getWinner } from './game/logic';
import { Pick } from './components/pick/Pick'
import './components/pick/Pick.css'
import { Users } from './components/users/users';
import { userInput } from './components/input/UserInput';
import './components/input/UserInput.css'


function App() {
  let text = "Your score: ";
  let text2 = "Cpu score: ";
  const [count, setCount] = useState(4);
  const [cpuCount, setCpuCount] = useState(0)
  const [playerChoice, setPlayerChoice] = useState(null)
  const [cpuChoice, setCpuChoice] = useState(null)
  const [winner, setWinner] = useState(null)

  function onPlayerChoice(pick) {
    setPlayerChoice(pick)

    const cpuPick = cpuRandomPick();
    setCpuChoice(cpuPick)
    const whoWon = getWinner(pick, cpuPick);
    setWinner(whoWon)
    if (whoWon == 'player') {
      setCount(count + 1)
    }
    else if (whoWon == 'cpu') {
      setCpuCount(cpuCount + 1)
    }
  }

  return (
    <div>
      <Header />
      <userInput className='input-Box'/>
      <Score text={text} count={count} />
      <Score text={text2} count={cpuCount} />
      <div className='choice-box'>
        {pickList.map(pick =>
          <Choice choice={pick} handleClick={() => {
            onPlayerChoice(pick)
          }} />
        )}
      </div>

      <div className='pick-container'>
        <div className='pick-box'>
          <Pick text={'Your pick'} playerChoice={playerChoice} />
        </div>

        <div className='pick-box'>
          <Pick text={'Cpu pick'} playerChoice={cpuChoice} />
        </div>
      </div>
      <Users />
    </div>
  );
}

export default App;
