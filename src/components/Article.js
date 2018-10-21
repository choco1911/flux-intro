import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList.js'
//import toggleOpen from '../decorators/toggleOpen.js'


class Article extends Component {
    static propTypes = {
           article: PropTypes.shape({
              id: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              text: PropTypes.string
           }).isRequired,
           isOpen: PropTypes.bool,
           toggleOpen: PropTypes.func
    }

    state = {
        updateIndex: 0
    }
    // permit render component only by condition
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen !== this.props.isOpen
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        return (
                <div>
                    <h3> {article.title} </h3>
                    <button onClick = {toggleOpen}>
                        {isOpen ? 'Close' : 'Open'}
                    </button>
                    {this.getSection()}
                </div>
        )
    }

    getSection() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return (
            <section>
                {article.text}
                <button onClick = {() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
                <CommentsList comments = {article.comments} ref = {this.setCommentsRef} key = {this.state.updateIndex}/>
            </section>
        )
    }

//<CommentsList comments = {article.comments} ref = {this.setCommentsRef} key = {this.state.updateIndex}/>
/*    setCommentsRef = ref => {
        console.log('---', ref)
    }
*/
}

export default Article
