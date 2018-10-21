import React, {Component} from 'react'
import artStore from '../stores'
import ArticleList from './ArticleList'


class Container extends Component {
    state = {
        articles: artStore.getAll()
    }

// good practice in React to make render clean function
// without change something outside function
//            return <ArticleList articles={articleStore.getAll()} />
    componentDidMount() {
        artStore.addChangeListener(this.handleChange)
    }
    componentWillUnmount() {
        artStore.removeChangeListener(this.handleChange)
    }

    handleChange = () => {
        this.setState({
            articles: artStore.getAll()
        })
    }

    render() {
          return <ArticleList articles={this.state.articles} />
    }
}

export default Container
