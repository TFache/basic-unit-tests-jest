function computeAge(birthday, currentDate) {
    if (birthday instanceof Date && currentDate instanceof Date) {
        if (birthday.getFullYear() > currentDate.getFullYear()) {
            return "birthday in the future compared to currentDate."
        } else if (birthday.getFullYear() === currentDate.getFullYear()
            && birthday.getMonth() > currentDate.getMonth()) {
            return "birthday in the future compared to currentDate."
        } else if (birthday.getFullYear() === currentDate.getFullYear()
            && birthday.getMonth() === currentDate.getMonth()
            && birthday.getDate() > currentDate.getDate()) {
            return "birthday in the future compared to currentDate."
        } else {
            if (birthday.getMonth() < currentDate.getMonth()) {
                return currentDate.getFullYear() - birthday.getFullYear()
            } else if (birthday.getMonth() === currentDate.getMonth()
                && birthday.getDate() <= currentDate.getDate()) {
                return currentDate.getFullYear() - birthday.getFullYear()
            } else return currentDate.getFullYear() - birthday.getFullYear() - 1

        }
    } else return "One or both parameters are not dates."
}

module.exports = computeAge
