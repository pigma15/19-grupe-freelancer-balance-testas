import { account } from "./data.js"
import { menesiai } from "./monthData.js"
import { Table } from "./Table.js"



new Table({
    selector: ".table-content",
    account: account,
    months: menesiai,
})