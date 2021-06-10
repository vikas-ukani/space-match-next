
export const getMediumImageUrl = path => {
    let pathArr = path.split('/')
    let lastName = pathArr[pathArr.length - 1]
    let joinedPath = pathArr.join('/')
    return joinedPath.replace(lastName, 'medium_' + lastName)
}
export const getSmallImageUrl = path => {
    let pathArr = path.split('/')
    let lastName = pathArr[pathArr.length - 1]
    let joinedPath = pathArr.join('/')
    return joinedPath.replace(lastName, 'small_' + lastName)
}