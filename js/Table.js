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

    generateFooter() {
        let HTML = '';
        let expenses = 0;
        let income = 0;
        let allIncome = 0;
        let allExpenses = 0;
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
            allIncome += income;
            allExpenses += expenses;
        }
        HTML = `<div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">${allIncome} Eur</div>
        <div class="cell">${allExpenses} Eur</div>
        <div class="cell">${allIncome - allExpenses} Eur</div`
        
        return HTML
    }

    render() {
        let HTML = ``;
        HTML = `<div class="table-head">
                        <div class="cell">#</div>
                        <div class="cell">Mėnuo</div>
                        <div class="cell">Įplaukos</div>
                        <div class="cell">Išlaidos</div>
                        <div class="cell">Balansas</div>
                    </div>
                    <div class="table-content">
                        ${this.generateMonths()}
                    </div>
                    <div class="table-footer">
                        ${this.generateFooter()}>
                    </div>`;

        this.DOM.innerHTML = HTML;
    }
}

export { Table }