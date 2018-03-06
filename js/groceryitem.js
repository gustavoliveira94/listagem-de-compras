class GroceryItem {
    constructor(item) {
        this.name = item.name;
        this.minimunStock = item.minimunStock;
        this.amountStock = item.amountStock;
    }

    hasToBuy() {
        return this.amountStock < this.minimunStock;
    }

    render(el) {
        this.el = el;
        const cssClass = this.hasToBuy() ? "hasToBuy" : "";
        el.innerHTML = $("template").innerHTML
        .replace(/{{cssClass}}/g, cssClass)
        .replace(/{{name}}/g, this.name)
        .replace(/{{minimunStock}}/g, this.minimunStock)
        .replace(/{{amountStock}}/g, this.amountStock);
        this.attachEvents();
    }

    onClickDescription(event) {
        const actions = event.currentTarget.nextElementSibling;
        actions.classList.toggle("hidden");
        groceryList.inputItem.hideAddItem();
    }

    onClickDelete() {
        const id = this.el.getAttribute("id").replace("_", "");
        groceryList.remove(parseInt(id));
        this.el.remove();
    }

    onClickMinus() {
        const amount = $("#amount-stock", this.el);
        if(amount.innerHTML > 0) {
            amount.innerHTML--;
        }
        this.amountStock = parseInt(amount.innerHTML);
        groceryList.updateList.show();
    }

    onClickPlus() {
        const amount = $("#amount-stock", this.el);
        amount.innerHTML++;
        this.amountStock = parseInt(amount.innerHTML);
        groceryList.updateList.show();
    }

    attachEvents() {
        $("#minus-item", this.el).addEventListener("click", this.onClickMinus.bind(this));
        $("#plus-item", this.el).addEventListener("click", this.onClickPlus.bind(this));
        $(".description", this.el).addEventListener("click", this.onClickDescription.bind(this));
        $("#delete-item", this.el).addEventListener("click", this.onClickDelete.bind(this));
    }

}