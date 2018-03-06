class GroceryInputItem {
    constructor() {
        this.el = $(".add");
        this.attachEvents();
    }

    showAddItem() {
        if ($(".stock",).classList.contains("hidden")) {
            $(".stock").classList.remove("hidden");
        }
    }

    hideAddItem() {
        $(".stock").classList.add("hidden");
        $(".number").innerHTML = 1;
    }

    get() {
        return {
            name: $(".add input").value,
            minimunStock: parseInt($(".number").innerHTML),
            amountStock: 0
        };
    }

    onClickSave() {
        if(this.get().name.length == 0) {
            alert("Preencha o nome")
        }
        else {
            groceryList.add(this.get());
            $(".add input", this.el).value = "";
            this.hideAddItem();
        }
    }

    onClickMinus() {
        $(".number").innerHTML--;
        if($(".number").innerHTML == 0) {
            $(".number").innerHTML = 1;
        }
    }

    onClickPlus() {
       $(".number").innerHTML++;
    }

    attachEvents() {
        $(".add input").addEventListener("focus", this.showAddItem.bind(this));
        $("#minus-stock").addEventListener("click", this.onClickMinus);
        $("#plus-stock").addEventListener("click", this.onClickPlus);
        $("#set").addEventListener("click", this.onClickSave.bind(this));
    }
}
