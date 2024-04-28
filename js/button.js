var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://community.trustcloud.ai/kbuPFACeFReXReB/uploads/2023/07/Strong-Password-Meme.png";
        document.getElementById("demo").appendChild(img);
    }
}