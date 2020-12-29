class Table {
    constructor(data) {
        this.selector = data.selector;
        this.account = data.account;
        this.months = data.months;

        this.DOM = document.querySelector(data.selector);

        this.init()
    }

    init() {
        this.render();
    }

    generateMonths() {
        let HTML = '';
        let count = 1;
        let expenses = 0;
        let income = 0;
        let balance = 0;

        for (let month of this.account) {
            if (!month.expense) {
                expenses = 0;
            } else {
                expenses = month.expense
            }
            if(!month.income) {
                income = 0;
            } else {
                income = month.income
            }
            balance += (income - expenses);
            
            HTML += `<div class="table-row">
            <div class="cell">${count++}</div>
            <div class="cell">${this.months[month.month - 1]}</div>
            <div class="cell">${income} Eur</div>
            <div class="cell">${expenses} Eur</div>
            <div class="cell">${balance} Eur</div>
        </div>`
        }
        return HTML
    }

    render() {
        this.DOM.innerHTML = this.generateMonths();
    }
}

export { Table }