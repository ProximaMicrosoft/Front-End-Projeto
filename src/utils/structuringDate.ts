export function structuringDate(dateValue: Date) {
    function addZero(substringValue: number) {
        // eslint-disable-next-line
        return substringValue <= 9 && `0${substringValue}` || substringValue.toString()
    }

    return `${addZero(dateValue.getDate())}/${addZero(dateValue.getMonth() + 1)}/${dateValue.getFullYear()}`
}