class Path {
    constructor() {
        // to be worked on
        console.log('')
    }
    resolve(/* arguments go here */) {
        let argstring = ''
        let argnum = 0
        Array.prototype.forEach.call(arguments, element => {
            argnum += 1
            let slash = ''
            let slash2 = '/'
            if (argnum == 1) {
                slash = '/'
            }
            if (argnum == arguments.length) {
                slash2 = ''
            }
            argstring += `${slash}${element}${slash2}`
        })
        return argstring
    }
}