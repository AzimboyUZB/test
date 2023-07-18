export function generaterUrl(obj) {
    let query = '?'
    for (let a in obj) {
        query = query + `${a}=${obj[a]}&`
    } 

    return query
}