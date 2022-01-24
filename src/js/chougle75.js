let bieres = 0
        let beersInBasket = localStorage.getItem("chougle75cl") ? parseInt(localStorage.getItem("chougle75cl")) : 0

        const boutonMoins = document.querySelector("#minus")
        const boutonPlus = document.querySelector("#plus")
        const inputVal = document.querySelector("input")
        const addToBasket = document.querySelector("#add-to-basket")
        const displayBeers = document.querySelector("#chougle75cl")

        displayBeers.textContent = beersInBasket
        inputVal.value = bieres

        const changeBeersQuantity = (quantity) => {
            bieres += quantity
            inputVal.value = bieres
        }

        boutonMoins.addEventListener("click", () => {
            if (bieres >= 1) {
                changeBeersQuantity(-1)
            }
        })
        boutonPlus.addEventListener("click", () => {
            changeBeersQuantity(1)
        })

        addToBasket.addEventListener("click", () => {
            beersInBasket += bieres
            localStorage.setItem("chougle75cl", beersInBasket)
            displayBeers.textContent = beersInBasket

        })