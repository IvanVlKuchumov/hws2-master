import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const compareFunctionUp = (a:UserType, b:UserType) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            }
            const compareFunctionDown = (a:UserType, b:UserType) => {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            }
            const compareFunction = action.payload === 'up' ? compareFunctionUp : compareFunctionDown
            return [...state].sort(compareFunction) // need to fix
        }
        case 'check': {
            return state.filter(f => f.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
