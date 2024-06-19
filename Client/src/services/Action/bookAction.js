import { api } from "../../api/api"

export const add = (data) => {

    return {
        type: 'ADD',
        payload: data
    }

}

export const get = (data) => {

    return {
        type: 'GET',
        payload: data
    }

}

export const single = (data) => {

    return {
        type: 'SINGLE',
        payload: data
    }

}

export const update = () => {

    return {
        type: 'UPDATE'
    }

}

export const delet = () => {

    return {
        type: 'DELET',
    }

}

export const addAsync = (data) => {

    return async dispatch => {

        await api.post('admins', data);

        dispatch(add(data));

    }

}

export const getAsync = () => {

    return async dispatch => {

        const res = await api.get('admins');

        dispatch(get(res.data));

    }

}

export const singleAsync = (id) => {

    return async dispatch => {

        const one = await api.get(`admins/${id}`);

        dispatch(single(one.data));

    }

}

export const updateAsync = (data) => {

    return async dispatch => {

        await api.put(`admins/${data.id}`, data)

        dispatch(getAsync());

        dispatch(update());

    }

}

export const deletAsync = (id) => {

    return async dispatch => {

        await api.delete(`admins/${id}`);

        dispatch(getAsync());

        dispatch(delet());

    }

}
