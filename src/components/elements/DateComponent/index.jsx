

const DateComponent = (user) => {
    return new Date(user.createdAt).toLocaleDateString('en-GB')
}

export default DateComponent