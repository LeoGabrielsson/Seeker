function LearnSpell(props) {
    return (
        <>
            <input id="newSpell" type="text" placeholder="Skriv in en sak att göra" />
            <button onClick={() => { props.addSpell(document.getElementById('newSpell').value) }}>Lägg till</button>
        </>
    )
}

export default LearnSpell