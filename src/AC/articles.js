import AppDispatcher from '../dispatcher'

export function deleteArticle(id) {
    const action = {
        type: 'DELETE_ARTICLE',
        payload: {
            id
        }
    }
    //console.log('---', action)
    AppDispatcher.dispatch(action)
}
