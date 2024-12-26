const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  const style = message.toLowerCase().includes("error") ? "error" : "notification";
  return (
    <div className={style}>
      {message}
    </div>
  )
}

export default Notification