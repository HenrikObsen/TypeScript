interface bilType {
    
    title: string
    description: string
    image: string
    price: string
    colors: string[]
    stars : number
}
interface dataresponse {
    products : Array<bilType>
}

class Program2 {
    adresse: string = "https://couchdb.itacademy.dk/onsdag/2017"

    constructor() {
    }

    hentData2( cb ) : any{
        let output: bilType

        fetch(this.adresse)

            .then(response => response.json())

            .then((data: any) => {

                cb(data)

            })

        //return output
    }


    hentData() {
        let output: bilType

        fetch(this.adresse)

            .then(response => response.json())

            .then((data: any) => {

                data.products.forEach((item, index) => {
                    output = data.products[index]
                    this.showHTML(output)
                });

                //data.products.forEach((value, index, data) => {
                //    console.log(value)
                //    console.log(index)
                //    console.log(data)
                //});

            })

        //return output
    }

    showHTML(data: bilType) {
        console.log(data)
        let colorList = ""
        let starList = ""
        let stars = data.stars
        let colors = data.colors

        colors.forEach((item, index) => {
            colorList += `<div style="width: 10px; height: 10px; background-color:${item}; border: solid black 1px; display:inline-block;"></div> ${item}<br/>`

            //console.log(index); // 0, 1, 2
        });
        colorList += ""

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

        document.getElementById("myDiv").innerHTML += html
    }
}



let myApp2 = new Program2()
myApp2.hentData()

myApp2.hentData2((data: dataresponse) => myApp2.showHTML(data.products[0]));
