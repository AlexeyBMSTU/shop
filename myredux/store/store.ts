import Action from '../types/types'

/**
 * Редакс - state-менеджер, работающий по принципу FLUX;
 * ACTION -> DISPATCH -> STORE -> VIEW
 *         \________action_________|
 * 
 * С помощью __Redux__ можем не вызывать каждое подписанное событие каждый раз, когда в нем происходит изменение. Изменения все фиксирует __стейт менеджер__ и при необходимости он сам вызовет их
 */
class Redux<T> {
	constructor (reducer: Function, initialState: T) {
		this.reducer = reducer;
		this.state = this.reducer(initialState, {type: '___INIT___'});
		this.subscribers = [];
	}

	public dispatch(action: Action): void {
		return this._dispatch(action);
	}

	public subscribe(cb: ()=> void): void {
		this.subscribers = [...this.subscribers, cb];
		return cb();
	}
	
	public getState(): T {
		return this.state;
	}

	private state: T;
	private subscribers: Array<()=> void>;
	private reducer: Function;

	private _dispatch(action: Action): void {
		this.state = this.reducer(this.state, action);
		this.subscribers.forEach( (cb:() => void) => cb());
	}
};

export default Redux;