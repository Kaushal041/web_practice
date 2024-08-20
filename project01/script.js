let student = {
    id : 101,
    sname : "Kaushal",
    age:20,
    isWorking:false,
    img:"https://img.freepik.com/free-vector/anime-chibi-boy-wearing-cap-character_18591-82515.jpg"
}

let{id,sname,age,isWorking,img}=student

let info = `
        <h1>It's my portfolio</h1>
        <img src="${img}" alt="No image" height="100px" width="100px">
        <h2>ID:${id}</h2>
        <h2>Name:${sname}</h2>
        <h3>Age: ${age} yr old</h3>
        <h3>Working/Student : ${isWorking ? "Working Profession":"Student"}</h3>
`
document.write(info)