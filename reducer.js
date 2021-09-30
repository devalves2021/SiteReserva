import produce from 'immer';
export default function reserve(state = [], action) {

    switch (action.type) {
        case 'Add_Reserve_Success':
            return produce(state, draft => {

                draft.push(action.trip);

            });
        case 'Remove_Reserve':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);
                if (tripIndex >= 0) {
                    draft.splice(tripIndex, 1);
                }
            });

        case 'Update_Reserve_Success': {

            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);
                if (tripIndex >= 0) {
                    draft[tripIndex].amount = Number(action.amount);
                }
            });

        }


        default:
            return state;
    }

}