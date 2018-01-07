import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = 'abc123';
    const action = {
        type: 'LOGIN',
        uid: uid
    };

    const state = authReducer({}, action);
    expect(state).toEqual({ uid: action.uid });
});

test('should logout', () => {
    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer({ uid: 'anything' }, action);
    expect(state).toEqual({});
});
