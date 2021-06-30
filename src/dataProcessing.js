export function getDates(str){
    const regExpArray = [
        /\s[1-9]\/[1-9]\/\d\d\d\d/,
        /\s[0][1-9]\/[1-9]\/\d\d\d\d/,
        /\s[1-3][0-9]\/[1-9]\/\d\d\d\d/,
        /\s[1-9]\/[0][1-9]\/\d\d\d\d/,
        /\s[0][1-9]\/[0][1-9]\/\d\d\d\d/,
        /\s[1-3][0-9]\/0[1-9]\/\d\d\d\d/,
        /\s[1-9]\/[1][0-2]\/\d\d\d\d/,
        /\s[0][1-9]\/[1][0-2]\/\d\d\d\d/,
        /\s[1-3][0-9]\/[1][0-2]\/\d\d\d\d/
    ]

    let dates =[]
    let i = 0
    let result = regExpArray.reduce((prev, item) =>{
        return prev || str.match(item)
    }, null)
    while(result){
        dates.push(result)
        str = str.slice(result.index + result.length)
        result = regExpArray.reduce((prev, item) =>{
            return prev || str.match(item)
        }, null)
    }

    return dates.join(',')

}