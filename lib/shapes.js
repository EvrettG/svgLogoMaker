
function innerShape(svgShape){
    if(svgShape == "circle"){
        return `<circle cx="150" cy="100" r="80" `
    } else if (svgShape == "square"){
        return `<rect x="90" y="45" width="125" height="125" `
    } else if (svgShape == "triangle"){
        return `<polygon points="150, 18 244, 182 56, 182" `
    } else console.error(`No valid inner shape detected`);
}

function shapes(data){
    console.log(data)
    const{title, titleColor, svgShape, shapeColor, backgroundColor } = data
    console.log(svgShape)
    return`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="100%" height="100%" fill="${backgroundColor}" />

 ${innerShape(svgShape)} fill="${shapeColor}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${titleColor}">${title}</text>

</svg>`
}



// used to export shapes for use in other files
module.exports = {
    shapes,
    innerShape,
};