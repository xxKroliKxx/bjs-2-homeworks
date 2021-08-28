function cachingDecoratorNew(func) {
    let cache = []
    function wrapper(...args) {
        let key = args.join(",")
        let e = cache.find(element => element.key === key)
        if (e != undefined) return "Из кэша: " + e.value


        let result = func(...args);
        if (cache.length === 5) {
            cache.splice(0, 1)
        }
        cache.push({"key": key, "value": result})
        return "Вычисляем: " + result
    }

    return wrapper
}


function debounceDecoratorNew(func, ms) {

    let timeout = null
    let repeatCall = false

    function wrapper(...args) {

        if (!repeatCall) {
            func.apply(this, ...args)
            repeatCall = true
            return
        }
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            repeatCall = false
            func.apply(this, ...args)
        }, ms)
    }

    return wrapper
}

function debounceDecorator2(func, ms) {
    let timeout = null
    let repeatCall = false
    let count = 0

    function wrapper(...args) {

        if (!repeatCall) {
            func.apply(this, ...args)
            repeatCall = true
            count = 1
            return
        }

        count += 1

        clearTimeout(timeout)
        timeout = setTimeout(() => {
            repeatCall = false
            func.apply(this, ...args)
            console.log(count)
        }, ms)
    }

    return wrapper
}
