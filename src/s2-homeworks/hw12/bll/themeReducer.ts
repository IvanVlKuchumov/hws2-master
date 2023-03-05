const initState = {
    themeId: 1,
}

export type StateType = {
    themeId: number
}
type ChangeThemeIdType = ReturnType<typeof changeThemeId>

type changeThemeIdACType = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return { themeId: action.id}
        default:
            return state
    }
}



export const changeThemeId = (id: number): changeThemeIdACType => ({type: 'SET_THEME_ID', id} as const) // fix any
