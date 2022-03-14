interface HW {
    str: string,
}
function print(arg: HW) {
    console.log(arg.str)
}

var hw = {str: 'Hello, world!'}
print(hw)