function arrContainsEl(arr, element) {
    let result;
    arr.forEach(el => {
        if (el === element) {
            result = el;
        }
    });
    return result;
}

module.exports = arrContainsEl;
