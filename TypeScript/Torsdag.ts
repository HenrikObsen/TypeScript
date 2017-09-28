class Torsdag {
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
        const DHTML = ` <div class="table-responsive">
                <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Imager</th>
                        <th>Title </th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="${data.image}" class="img-responsive" /></td>
                        <td>${data.title}</td>
                        <td>${data.description}</td>
                    </tr>
                </tbody>
                </table>
            </div>`

        document.getElementById("myDiv").innerHTML += DHTML;
    }
}


// call it here... 
let app = new Torsdag()
let appData = app.hentData()
