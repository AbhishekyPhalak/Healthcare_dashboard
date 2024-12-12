const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "build");
const indexPath = path.join(buildDir, "index.html");

function encodeSVG(filePath) {
    let svg = fs.readFileSync(filePath, "utf8");
    svg = svg.replace(/"/g, "'"); 
    svg = svg.replace(/>\s+</g, "><"); 
    return "data:image/svg+xml;base64," + Buffer.from(svg).toString("base64");
}

function replaceSVGs() {
    let indexHTML = fs.readFileSync(indexPath, "utf8");

    indexHTML = indexHTML.replace(/<img\s+src="([^"]+\.svg)"\s*\/?>/g, (match, filePath) => {
        const fullPath = path.join(buildDir, filePath);
        if (fs.existsSync(fullPath)) {
            console.log(`Converting: ${filePath} to Base64`);
            return `<img src="${encodeSVG(fullPath)}" />`;
        }
    });

    fs.writeFileSync(indexPath, indexHTML, "utf8");
}

replaceSVGs();
