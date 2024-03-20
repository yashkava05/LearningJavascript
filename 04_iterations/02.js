const myobj = {
    js:'javascript',
    py:'python',
    swift:"apple swift",
    cpp:'c++'
}

for (const key in myobj) {
    //console.log(key);
}

// const languages = ["java", "c++", "pyhton", "javascript"]

// languages.forEach(function (name){
//     console.log(name);
// })

const arraytwo = [
    {
        lang:"javascript",
        file_name:".js"
    },
    {
        lang:"python",
        file_name:".py"
    },
    {
        lang:"java",
        file_name:".java"
    }
]

arraytwo.forEach( (item) => {
    console.log(item.lang);
})