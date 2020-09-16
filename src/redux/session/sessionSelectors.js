export const getIsAuthorized = state => Boolean(state.session.token);
export const getUser = state => state.session.user;
export const getToken = state => state.session.token;