import { SIGNUP } from "../actions"

export const signUp = (name) => {
    return {type: SIGNUP, payload:{
        name:name,
    }}
}