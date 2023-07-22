export function generaterUrl(obj) {
    let query = '?'
    for (let a in obj) {
        query = query + `${a}=${obj[a]}&`
    } 

    return query
}

export function shuffleArr(arr) {
    if(!!arr.length){
        return [...arr].sort(() => Math.random() - 0.5)
    }
}

export const fetcher = (...args) => fetch(...args).then(res => res.json())