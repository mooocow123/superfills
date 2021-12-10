class Fs1 {
    readFileSync(name, func=(stat, res) => {}) {
        let result = null;
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", name, false);
        xmlhttp.send();
        if (xmlhttp.status==200 || xmlhttp.status==304) {
          result = xmlhttp.responseText;
          func(null, result);
        }
        return result;
    }
    promises = {
        readFile(name, func=(stat, res) => {}) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()
                xhr.open('get', name, true)
                xhr.onload = () => {
                    const status = xhr.status
                    if (status == 200 || status == 304) {
                        func(null, xhr.response)
                        resolve(xhr.response)
                    } else {
                        func({text: xhr.statusText, code: xhr.status}, null)
                        reject(status)
                    }
                }
                xhr.send()
            })
        }
    }
    constructor() {
        for (let key in this.promises) {
            eval('this.' + key + ' = this.promises["' + key + '"];');
        }
    }
}