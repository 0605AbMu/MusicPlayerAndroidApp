const { back } = require("androidjs");
const path = require("path");
const fs = require("fs");
const audio = require("audio");
audio({player:"play"}).play("F:\MY PORTFOLIO\music player\assets\musics\$ЖОНИМ$ $СЕНСИЗ$ ------------.mp3")
const audioType = ["mp3", "wav", "ogg"]
back.on("check", () => {
    back.send("checked", { status: "200", msg: "OK" });
    
})
const aud = new Audio();
back.on("getMusicList", (res) => {

    const files = fs.readdirSync(path.join(".",  "assets", "musics"))    
    let rt = [];
    audioType.forEach(x => {
        files.forEach(o=>{
            if (o.indexOf(x) != -1) rt.push({
                name: path.parse(o).name,
                filePath: path.join(__dirname, "assets", "musics", o)
            });
        })
    });
    console.log(rt);
    back.send("musicList", rt);

})
