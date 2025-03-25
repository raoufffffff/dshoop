import { proxy } from "valtio";

let state = proxy({
    items: [],
    user: {
        name: "",
        phone: "",
        position: null
    }
})

export default state