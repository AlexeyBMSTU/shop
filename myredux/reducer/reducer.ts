import Action from '../types/types'

/**
 * Функция логики управления событием
 * @param state Состояние
 * @param action Событие
 * @returns 
 */
const reducer: Function = (state: number, action: Action): number => {
	switch(action.type) {
		case 'inc': 
			return state + 1;
		case 'dec':
			return state - 1;
		default:
			return state;
	}
}

export default reducer;