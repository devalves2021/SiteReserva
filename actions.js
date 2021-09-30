export function addReserveRequest(id) {
    return {
        type: 'Add_Reserve_Request',
        id,
    }
}

export function addReserveSuccess(trip) {
    return {
        type: 'Add_Reserve_Success',
        trip,
    }
}

export function removeReserve(id) {
    return {
        type: 'Remove_Reserve',
        id,
    }
}

export function updateAmountRequest(id, amount) {
    return {
        type: 'Update_Reserve_Request',
        id,
        amount,
    }
}

export function updateAmountSuccess(id, amount) {
    return {
        type: 'Update_Reserve_Success',
        id,
        amount,
    }
}