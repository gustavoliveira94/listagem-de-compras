class GroceryUpdateList {
    constructor() {
        this.el = $(".update");
        this.attachEvents();
    }

    attachEvents() {
        $(".save", this.el).addEventListener("click", this.onClickSave.bind(this));
        $(".back", this.el).addEventListener("click", this.onClickCancel.bind(this));
    }

    show() {
        this.el.classList.remove("hidden");
        $(".add").classList.add("hidden");
    }

    hide() {
        this.el.classList.add("hidden");
        $(".add").classList.remove("hidden");
    }

    onClickSave() {
        groceryList.saveToLocalStorage();
        groceryList.render();
        this.hide();
    }

    onClickCancel() {
        this.hide();
    }
}

