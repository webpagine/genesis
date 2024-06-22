function initDoc() {

    let root = []

    let h1id = ""
    let h2id = ""

    for (let element of document.querySelector(".content").querySelectorAll("h1,h2,h3")) {
        let h1 = root[root.length-1]

        switch (element.tagName) {
            case "H1":
                element.id = element.innerText.toLowerCase().replaceAll(" ", "-")
                h1id = element.id

                root.push({id: element.id, text: element.innerText, h2: []})
                break
            case "H2":
                element.id = `${h1id}-${element.innerText.toLowerCase().replaceAll(" ", "-")}`
                h2id = element.id

                h1.h2.push({id: element.id, text: element.innerText, h3: []})
                break
            case "H3":
                element.id = `${h2id}-${element.innerText.toLowerCase().replaceAll(" ", "-")}`

                h1.h2[h1.h2.length-1].h3.push({id: element.id, text: element.innerText})
                break
        }
    }

    let sidenav = document.getElementById("sidenav")
    sidenav.innerHTML += "<ul>"
    for (let h1 of root) {
        sidenav.innerHTML += `<li><a href="#${h1.id}"></a></li><ul>`
        for (let h2 of h1.h2) {
            sidenav.innerHTML += `<li style="padding-left: 20px"><a href="#${h2.id}">${h2.text}</a></li><ul>`
            for (let h3 of h2.h3) {
                sidenav.innerHTML += `<li style="padding-left: 40px"><a href="#${h3.id}">${h3.text}</a></li>`
            }
            sidenav.innerHTML += "</ul>"
        }
        sidenav.innerHTML += "</ul>"
    }
    sidenav.innerHTML += "</ul>"
}
