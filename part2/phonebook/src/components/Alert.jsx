const Alert = ({ message }) => {
    return (
        <div className={message.type}>{message.text}</div>
    )
}

export default Alert