import {env} from "process"

export const config = {
    rounds:10,
    port: env.PORT || 4000
}

