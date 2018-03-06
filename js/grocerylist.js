class GroceryList {
    constructor() {
        this.updateList = new GroceryUpdateList();
        this.inputItem = new GroceryInputItem();
        this.render();
    }

    loadData() {
        let listItems = [];
        const localData = localStorage.getItem("list");
        if (localData) {
            listItems = JSON.parse(localData);
        }
        return listItems.map(item => new GroceryItem(item));
    }

    saveToLocalStorage() {
        localStorage.setItem("list", JSON.stringify(this.items));
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();
        this.render();
    }

    remove(index) {
        this.items.splice(index, 1);
        this.saveToLocalStorage();
        this.render();
    }

    render() {
        this.items = this.loadData();
        $("#list-item").innerHTML = "";
        this.items.forEach(function (item, index) {
            $("#list-item").innerHTML += `<li id="_${index}"></li>`;
        });

        this.items.forEach(function(item, index) {
            item.render($(`#_${index}`));
        });
    }
}