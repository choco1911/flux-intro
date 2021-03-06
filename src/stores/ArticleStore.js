import {EventEmitter} from 'events'
import AppDispatcher from '../dispatcher'

class ArticleStore extends EventEmitter {
    constructor(initialState = []) {
        super()
        this._items = {}
        initialState.forEach(this._add)

        AppDispatcher.register((action) => {
            const {type, payload} = action

            switch (type) {
                case 'DELETE_ARTICLE':
                    this._delete(payload.id)
                    this.emitChange()
                     break
            }
        })
    }

    getAll() {
        return Object.keys(this._items).map(this.getById)
    }

    getById = (id) => this._items[id]

    _delete(id) {
        delete this._items[id]
    }

    _add = (item) => {
        this._items[item.id] = item
    }

    addChangeListener(callback) {
        this.on('INTERNAL_EVENT', callback)
    }

    removeChangeListener(callback) {
        this.removeListener('INTERNAL_EVENT', callback)
    }

    emitChange() {
        this.emit('INTERNAL_EVENT')
    }
}

export default ArticleStore
