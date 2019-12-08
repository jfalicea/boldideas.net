const msg = `Personal Projects can be found at: `
const subdomains={ }
myMsg(msg,subdomains)

/*
*-------------------------------------------------
** Function: console.log subdomains
*-------------------------------------------------
*/
function myMsg(x,y){
    if(!Object.keys(y).length){
        console.log(x, `Nothing is hosted yet`)
    }

}

