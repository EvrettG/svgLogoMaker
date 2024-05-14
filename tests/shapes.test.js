const {shapes, innerShape} = require(`../lib/shapes`)

describe('innerShapes', () => {
    describe(`triangle`, () =>{
        it(`This should create a triangle`,()=>{
            const svgShape = "triangle"

            expect(innerShape(svgShape)).toEqual('<polygon points="150, 18 244, 182 56, 182" ');
        })
    })
})

describe('shapes', () => {
    describe(`valid inputs`, () =>{
        it(`This should pruduce the .svg`,()=>{
            const data = {
                title: 'aaa',
                titleColor: 'red',
                svgShape: 'triangle',
                shapeColor: 'pink',
                backgroundColor: 'blue'
              }
            const expectedResult = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="100%" height="100%" fill="blue" />

 <polygon points="150, 18 244, 182 56, 182"  fill="pink" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">aaa</text>

</svg>`
            expect(shapes(data)).toEqual(expectedResult);
        })
    })
})

