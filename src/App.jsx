import { useEffect, useState } from 'react'
import './App.css'

import SpellSlots from './components/SpellSlots'
import LearnSpell from './components/LearnSpell'

function App() {
  const [spells, setSpells] = useState(() => {
    return JSON.parse(localStorage.getItem('spells')) || []
  })

  useEffect(() => {
    localStorage.setItem('spells', JSON.stringify(spells))
  }, [spells])

  const addSpell = () => {
    const newSpell = document.getElementById('newSpell').value
    if (newSpell === '') return
    let spellCurriculum = [...spells, { spellKey: 0, label: newSpell, prepped: false }]
    if (spells.length > 0) {
      spellCurriculum = [...spells, { spellKey: spells[spells.length - 1].spellKey + 1, label: newSpell, prepped: false }]
    }
    setSpells(spellCurriculum)
  }

  const removeSpell = (spellKey) => {
    const updateSpells = spells.filter(spells => spells.spellKey !== spellKey)
    setSpells(updateSpells)
  }

  const togglePrepped = (spellKey) => {
    const spellCurriculum = spells.map(todo => todo.spellKey === spellKey ? { ...todo, prepped: !todo.prepped } : todo)
    setSpells(spellCurriculum)
    console.log(spellCurriculum)
  }

  return (
    <>
      <LearnSpell addSpell={addSpell} />
      {spells.map((todo, index) =>
        <>
          <div className="spell">
            <SpellSlots
              key={index}
              spellKey={todo.spellKey}
              label={todo.label}
              prepped={todo.prepped}
              togglePrepped={togglePrepped}
              removeSpell={removeSpell}
            />
          </div>
        </>
      )}
    </>
  )
}

export default App