function SpellSlots(props) {
    let { id, completed, label } = props

    return (
        <div className="todo-item">
            <label>{label}</label>
            <input
                checked={completed}
                onChange={() => {
                    props.togglePrepped(id)
                }}
                type="checkbox" />
            <button onClick={() => { props.removeSpell(id); }}>Rip card</button>
        </div>
    )
}

export default SpellSlots