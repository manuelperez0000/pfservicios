const TimeComponent = (user) => {
    return new Date(user.createdAt).toLocaleTimeString('en-GB')
}
export default TimeComponent;