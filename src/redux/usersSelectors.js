export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getSizeOfPage = (state) => {
    return state.usersPage.sizeOfPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getInProcess = (state) => {
    return state.usersPage.inProcess;
}