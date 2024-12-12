const fs = require('fs');
const path = require('path');

function imageToBase64(imagePath) {
    const ext = path.extname(imagePath).substring(1); 
    const data = fs.readFileSync(imagePath).toString('base64'); 
    return `data:image/${ext};base64,${data}`;
}

function replaceImageReferences(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const regex = /src=["']([^"']+\.(png|jpg|jpeg|gif|svg))["']/g;

    content = content.replace(regex, (match, imagePath) => {
        const absolutePath = path.join(__dirname, 'build', imagePath);
        if (fs.existsSync(absolutePath)) {
            console.log(`Converting: ${imagePath} to Base64`);
            return `src="${imageToBase64(absolutePath)}"`;
        }
        return match;
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
}

function replaceCssImages(cssFilePath) {
    let cssContent = fs.readFileSync(cssFilePath, 'utf8');
    const regex = /url\(["']?([^"')]+.(png|jpg|jpeg|gif|svg))["']?\)/g;

    cssContent = cssContent.replace(regex, (match, imagePath) => {
        const absolutePath = path.join(__dirname, 'build', imagePath);
        if (fs.existsSync(absolutePath)) {
            console.log(`Converting CSS image: ${imagePath} to Base64`);
            return `url("${imageToBase64(absolutePath)}")`;
        }
        return match;
    });

    fs.writeFileSync(cssFilePath, cssContent, 'utf8');
    console.log(`Updated CSS: ${cssFilePath}`);
}

function inlineImages() {
    const indexPath = path.join(__dirname, 'build', 'index.html');
    if (fs.existsSync(indexPath)) {
        replaceImageReferences(indexPath);
    }

    const cssDir = path.join(__dirname, 'build', 'static', 'css');
    if (fs.existsSync(cssDir)) {
        fs.readdirSync(cssDir).forEach(file => {
            if (file.endsWith('.css')) {
                replaceCssImages(path.join(cssDir, file));
            }
        });
    }
}

inlineImages();
