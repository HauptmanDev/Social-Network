import React, {Component} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from './../../../utils/validators/validators'
import {Textarea} from "../../common/FormsControls/FormsControls";


class MyPosts extends Component {
    render() {
        let postsElement = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText)
        };


        return <div className={s.postsBlock}>
            My Posts
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    }
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' validate={[required, maxLength10]}
                       placeholder={'Post message'}/>
            </div>
            <div>
                <button>App post</button>
            </div>

        </form>
    )
};

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;