function mergeSortedArrays(tab1, tab2) {
    let res;
    if (!Array.isArray(tab1) || !Array.isArray(tab2)) return "One or both parameter must be array"
    else {
        res = []
        let i1 = 0
        let i2 = 0

        while (i1 < tab1.length && i2 < tab2.length) {
            res.push(tab1[i1] <= tab2[i2] ? tab1[i1] : tab2[i2])
            tab1[i1] <= tab2[i2] ? i1++ : i2++
        }

        if (i1 === tab1.length) {
            for (let j = i2; j < tab2.length; j++) {
                res.push(tab2[j])
            }
        } else if (i2 === tab2.length) {
            for (let j = i1; j < tab1.length; j++) {
                res.push(tab1[j])
            }
        }
    }
    return res
}

module.exports = mergeSortedArrays
