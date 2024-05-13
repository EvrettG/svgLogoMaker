
function shapes(data){
    const{title, titleColor, svgShape, shapeColor, backgroundColor } = data
    console.log(svgShape)
    if (svgShape == "circle"){
        return`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <rect width="100%" height="100%" fill="${backgroundColor}" />
   
     <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${titleColor}">${title}</text>
   
   </svg>`
    } else if (svgShape == "square"){
        return`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <rect width="100%" height="100%" fill="${backgroundColor}" />
   
     <rect x="90" y="45" width="125" height="125" fill="${shapeColor}" />
   
     <text x="150" y="120" font-size="60" text-anchor="middle" fill="${titleColor}">${title}</text>
   
   </svg>`
    } else if (svgShape == "triangle"){
        return`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <rect width="100%" height="100%" fill="${backgroundColor}" />
   
     <polygon points="150 40, 240 150, 60 150" fill="${shapeColor}" />
   
     <text x="150" y="120" font-size="60" text-anchor="middle" fill="${titleColor}">${title}</text>
   
   </svg>`
    } else {
        console.log("Error: no valid shape")
    }
}



// used to export shapes for use in other files
module.exports = shapes;