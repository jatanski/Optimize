import React from 'react';
import AddComment from '../components/Single/AddComment/AddComment';
import SingleMain from '../components/Single/SingleMain/SingleMain';
import Comments from '../components/Single/SingleComments/SingleComments';

class SinglePostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thread: {
                who: 'Marcin',
                date: Date.now(),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, beatae. Eius id dolorum nesciunt beatae minus, rem possimus velit culpa ipsum totam dignissimos quasi delectus! Dolor ullam assumenda quia voluptas, aperiam modi libero porro reiciendis velit. Fugit et iste suscipit iusto minima neque necessitatibus quidem assumenda? Vel cumque nulla exercitationem.',
                screens: [
                    'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SY355_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SY355_.jpg'
                ]
            },
            comments: [
                { id: 1, who: 'Marcin', content: 'Lorem 12312312 123 12 31 312', rating: 1, date: Date.now() },
                { id: 2, who: 'Marcin1', content: 'Lorem 12312312 123sdfasdf 12 31 312', rating: 5, date: Date.now() },
                { id: 3, who: 'Marcin2', content: 'Lorem 12312312 123sfasdfasdf 12 31 312', rating: 3, date: Date.now() },
            ]
        }
    }

    render() {
        return (
            <section className="single-post">
                <div className="single-post__left">
                    <SingleMain {...this.state.thread}/>
                </div>
                <div className="single-post__right">
                    <Comments comments={this.state.comments}/>
                    <AddComment />
                </div>
            </section>
        )
    }
}

export default SinglePostPage;