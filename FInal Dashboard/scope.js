import Listener from './listener-factory';

const getNewScopes = () => [];

export const scopeSetter = (state, _scopes) => ({
    listener: new Listener(state),
    set: scopes => {
        if (scopes.length === state.domains.getAll().length) {
            _scopes.splice(0, _scopes.length, ...scopes);
            state.scopes.listener.notifySubscribers();
            return _scopes.slice();
        } else {
            state.scopes.clear();
            console.error('scopes: scopes.length does not match domains.length')
        }
    },
    clear: () => _scopes.length = 0,
});

export const scopeGetter = (state, _scopes) => ({
    get: idx => {
        if (_scopes[idx]) return _scopes[idx];
        else {
            const [d0, d1] = state.domains.get(idx);
            return [state.domains.normalize(d0), state.domains.normalize(d1)];
        }
    },
    getAll: () => _scopes.slice(),
});

export default state => {
    const _scopes = getNewScopes();
    return {
        scopes: Object.assign(
            {},
            scopeSetter(state, _scopes),
            scopeGetter(state, _scopes),
        ),
    };
};// JavaScript Document