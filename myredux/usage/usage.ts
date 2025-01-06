import reducer from '../reducer/reducer'
import Redux from '../store/store'

const store = new Redux<number>(reducer, 0);

const func = (): void => {
	console.log('Текущий счет:', store.getState());
}

store.subscribe(func);

store.dispatch({type: 'inc'});
store.dispatch({type: 'inc'});
store.dispatch({type: 'inc'});