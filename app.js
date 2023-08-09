let div = document.querySelector('.divContainer')

let selectLabel = document.createElement('select')
div.appendChild(selectLabel)
let o = document.createElement('option')
selectLabel.appendChild(o)
o.innerHTML = "Please select"
let unordered = document.createElement('ul')
div.appendChild(unordered)
let arr = []
let url = "https://pokeapi.co/api/v2/pokemon/"
function passMyfunc(url) {
    fetch(url)
        .then(response => response.json())
        .then((response) => {
            let obj = response['results']
            obj.map((value) => {
                let opt = document.createElement('option')
                opt.innerHTML = value['name']
                selectLabel.appendChild(opt)
                function callback(v1, v2) {
                    let cap = {
                        name: v1,
                        url: v2,
                    }
                    arr.push(cap)
                }
                callback(value['name'], value['url'])
            })
            //     let obj1 = response['abilities']
            //     obj1.map((val) => {
            //         let opt = document.createElement('option')
            //         selectLabel.appendChild(opt)
            //         opt.innerHTML = val['ability']['name']
            //     })
            //     let obj2 = response['forms']
            //     obj2.map((val) => {
            //         let opt = document.createElement('option')
            //         selectLabel.appendChild(opt)
            //         opt.innerHTML = val['name']
            //     })
            //     let obj3 = response['game_indices']
            //     obj3.map((val) => {
            //         let opt = document.createElement('option')
            //         selectLabel.appendChild(opt)
            //         opt.innerHTML = val['version']['name']
            //     })
            //     let obj4 = response['held_items']
            //     obj4.map((val) => {
            //         let opt = document.createElement('option')
            //         selectLabel.appendChild(opt)
            //         opt.innerHTML = val['item']['name']
            //     })
            //     let opt = document.createElement('option')
            //     selectLabel.appendChild(opt)
            //     opt.innerHTML = response['species']['name']
            //     let obj5 = response['stats']
            //     obj5.map((val) => {
            //         let opt = document.createElement('option')
            //         selectLabel.appendChild(opt)
            //         opt.innerHTML = val['stat']['name']
            //     })
            //     let opt2 = document.createElement('option')
            //     selectLabel.appendChild(opt2)

            //     opt2.innerHTML = response['types'][0].type['name']
            passingArray(arr)
        })
}
passMyfunc(url)

function passingArray(arr) {
    arr.map((val) => {
        selectLabel.addEventListener('change', function (event) {
            unordered.innerText = ""
            if (event.target.value.match(val['name'])) {
                fetch(val['url'])
                    .then(response => response.json())
                    .then(response => {
                        let obj = { isTrue: true }
                        let promiseMethod = new Promise((resolve, reject) => {
                            (obj['isTrue'] === true) ? resolve(response) : reject(response)
                        })
                        promiseMethod.then((response) => {
                            let store = response['stats']
                            for (let out in store) {
                                let capture = store[out]['stat']['name']

                                let content = document.createElement('li')
                                content.setAttribute('class', 'innerContent')
                                unordered.appendChild(content)
                                content.innerText = capture
                            }
                        })
                        promiseMethod.catch((err) => {
                            console.log(err)
                        })
                    })
            }

        })
    })
}
// function handleApi(url) {
//     fetch(url)
//         .then((response) => response.json())
//         .then((response) => {
//             console.log(response)
//         })
//         .catch((err) => {
//             // alert(err.message)
//         })
// }
// handleApi(url)

// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         alert(data)
//     } catch (err) {
//         alert(err)
//     }
// }
// fetchData(url)

// const store = new Promise((resolve, reject) => {
//     fetch(url).then((response) => response.json())
//         .then((response) => {
//             setTimeout(() => {
//                 resolve(response)
//             }, 2000)
//         })
//         .catch((response) => {
//             setTimeout(() => {
//                 reject(response)
//             }, 2000)
//         })
// })
// store.then(() => {
//     alert("success")
// })

// store.catch((error) => {
//     alert(error);
// })