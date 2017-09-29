//http://www.sochix.ru/how-to-integrate-webpack-into-visual-studio-2015/
//https://whatwebcando.today

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


enum NetStatus {
    Offline = 0,
    Online = 1
}

class OfflineSupport {

    constructor() {

    }
    netWorkStatus: NetStatus = NetStatus.Online

    hentDataFraLocalStorage()
    { }

    detectNetworkStatus(): NetStatus {
        return ( navigator.onLine ? NetStatus.Online : NetStatus.Offline)
    }
}

class Program2 extends OfflineSupport {
    adresse: string = "https://couchdb.itacademy.dk/onsdag/2017"

    constructor() {
        super()
        this.netWorkStatus = this.detectNetworkStatus()

        document.getElementById("status").innerHTML = (this.netWorkStatus == NetStatus.Online ? "Online" : "Offline");
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

        const html = `<div class="col-sm-6"><div class="row" style="padding: 10px 20px 10px 20px;"><div class="col-sm-6 text-left">
				<h2>${data.title}</h2>
<p>${starList}</p>
				<p>${data.description}</p>
            <p><b>Colors:</b><br/> ${colorList}</p>
            <p><b>Price: ${data.price}</b></p>
		</div><div class="col-sm-6">
<img src="${data.image}" class="img-responsive" />
        </div></div></div>`

        document.getElementById("myDiv").innerHTML += html
    }
}



let myApp2 = new Program2()
myApp2.hentData()

myApp2.hentData2((data: dataresponse) => myApp2.showHTML(data.products[0]));

//myApp2.hentData2((data: dataresponse) => { data.products.filter(data => data.stars >=2) });
//const orders = [
//    {
//        item: "Product1",
//        price: 10
//    },
//    {
//        item: "Product2",
//        price: 20
//    },
//    {
//        item: "Product3",
//        price: 30
//    }
//]

//const priceTotal = orders.map(data = > data.price).reduce()
