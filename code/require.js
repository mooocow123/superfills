// if we want modules to actually work, we'll have to import them here.

let requireroutes = {
    "@node": {
        "fs": new Fs1()
    }
};

function webrequire(name) {
    for (let key in requireroutes) {
        let isjson = requireroutes[key].constructor === ({}).constructor
        let slashsplit = name.split('/')
        let nomain = requireroutes[key]['main'] === undefined;
        let hasdat = requireroutes.hasOwnProperty(slashsplit[0]) && requireroutes[slashsplit[0]].hasOwnProperty(slashsplit[1]);
        if (key === name && !isjson) {
            return requireroutes[key];
        }
        else if (isjson && key === name && nomain) {
            return requireroutes[key];
        }
        else if (isjson && key === name && !nomain) {
            return requireroutes[key]['main'];
        }
        else if (hasdat) {
            return requireroutes[slashsplit[0]][slashsplit[1]];
        }
    }
}

const require = webrequire;
window.require = webrequire;