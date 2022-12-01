import { apiClient } from "../apiClient"

export const getItems = async () => {
    const { data } = await apiClient.get('/users')
    try {
        return data
    }
    catch (error) {
        throw error
    }
}

export function getItem() {
    return apiClient.get('/product');
}

export function addItem(data) {
    return apiClient.post('/product', JSON.stringify(data));
}
