function SpellSlots(props) {
    let { spellKey, prepped, label } = props

    return (
        <>
            <label>{label}</label>
            <input
                checked={prepped}
                onChange={() => {
                    props.togglePrepped(spellKey)
                }}
                type="checkbox" />
            <button onClick={() => { props.removeSpell(spellKey); }}>Rip card</button>
        </>
    )
}

export default SpellSlots

