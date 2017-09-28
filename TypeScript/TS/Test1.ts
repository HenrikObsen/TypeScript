class Program {
    adresse: string = "https://couchdb.itacademy.dk/onsdag/2017"

    constructor() {
    }

    hentData(): string {
        let output: string
        
        fetch(this.adresse)

            .then(response => response.json())

            .then((data: any) => {
                
                data.products.forEach((item, index) => {
                    output = data.products[index]
                    this.showHTML(output)
                });

            })

        return output
    }

    showHTML(data: any) {
        console.log(data)
        let colorList = "<ul>"
        let starList =""
        let stars = data.stars
        let colors = data.colors

        colors.forEach((item, index) => {
            colorList += `<li>${item}</li>`

            //console.log(index); // 0, 1, 2
        });
        colorList += "</ul>"

        for (var i = 1; i <= stars; i++) {
            starList += `<i class="fa fa-star" aria-hidden="true"> </i>`
        }

        const html = `<table style="border:solid black 1px; width: 600px; padding: 10px 20px 10px 20px;"><tr><td>
				<h2>${data.title}</h2>
<p>${starList}</p>
				<p>${data.description}</p>
            <p><b>Colors:</b><br/> ${colorList}</p>
            <p><b>Price: ${data.price}</b></p>
		</td><td style="text-align: right;">
<img src="${data.image}" style="width:300px;" />
        </td></tr></table><br/>`

        document.getElementById("myDiv").innerHTML +=  html
    }
}

// call it here... 

let myApp = new Program()
let data = myApp.hentData()

