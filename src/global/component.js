

export function Header() {
    return <div style={{
        backgroundColor: "black",
    }}>
        <butt>Home</butt>
        <butt>About</butt>
        <butt>Contact</butt>
    </div>
}

export function Button({
    type,
    callBack
}) {
    return <button
        onClick={callBack}
        style={{
            backgroundColor: type === "DANGER" ? "red" : "green",
            color: "white",
            // padding: 10,
            borderRadius: 5,
            border: "none",
            fontSize: 16
        }} >
        Click Me
    </button>
}

export function Input({
    placeholder,
    value,
    onchange
}) {
    return <input
        value={value}
        onChange={onchange}
        placeholder={placeholder} />
}