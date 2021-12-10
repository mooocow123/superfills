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

const require = {
    get current() {
        return webrequire;
    },
    set current2(val) {
        webrequire = val;
    }
};
window.require = {
    get current() {
        return webrequire;
    },
    set current2(val) {
        webrequire = val;
    }
};

// DOESN'T WORK
// class requireModule {
//     id = null;
//     exports = {
//         get current() {
//             return requireroutes[this.id];
//         },
//         set current2(value) {
//             requireroutes[this.id] = value; // Just sneaking into this line :)
//         }
//     };
// }

// function preparedModule(mod, id=0) {
//     mod.id = id;
//     requireroutes[id] = null;
//     return mod;
// }

// const module = preparedModule(new requireModule(), 0);
// window.module = {
//     get current() {
//         return module;
//     },
//     set current2(val) {
//         module = val;
//     }
// };