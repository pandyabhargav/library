let initState = {
    admins: [],
    admin: '',
};

const bookReducer = (state = initState, action) => {

    switch (action.type) {

        case 'ADD':
            let add = [...state.admins, action.payload];
            return {
                ...state,
                admins: add,
            }

        case 'GET':
            return {
                ...state,
                admins: action.payload,
                admin: ''
            }

        case 'SINGLE':
            return {
                ...state,
                admin: action.payload
            }

        case 'UPDATE':
            return {
                ...state,
            }

        case 'DELET':
            return {
                ...state,
            }

        default:
            return state

    }

}

export default bookReducer