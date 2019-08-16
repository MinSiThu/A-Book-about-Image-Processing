let markdownpdf = require("markdown-pdf")
let fs = require("fs")
 
fs.readdir("./",(err,dirs)=>{
    let bookPath = "TheBookOfImage.pdf";
    let mdDocs = dirs.filter(dir=>{
        return dir.includes(".md");
    })
    
    markdownpdf().concat.from(mdDocs).to(bookPath, function () {
        console.log("Created", bookPath)
    })
})
 
  