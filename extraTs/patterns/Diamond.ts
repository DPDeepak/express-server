export default function diamond(n: number): void {
    let space = '', star = ''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; i + j < n; j++) {
            space += ' '
        }
        for (let k = 0; k < i; k++) {
            star += '* '
        }
        console.log(space + star) 
        space = '', star = ''
    }
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            space += ' '
        }
        for (let k = 0; k < n - i; k++) {
            star += '* '
        }
        console.log(space + star)
        space = '', star = ''
    }

}

