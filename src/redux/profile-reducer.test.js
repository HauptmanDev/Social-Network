import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Привет, всем!', likesCount: 0},
        {id: 2, message: 'Пока, всем!', likesCount: 1},
    ]
};

it('length of post should be incremented', () => {
    // 1.test data
    let action = addPostActionCreator('It-kama');
    // 2. action
    let newState = profileReducer(state, action);
// 3. expectation
    expect(newState.posts.length).toBe(3)
});

it('after deleting length of messages should be decrement', () => {
    // 1.test data
    let action = deletePost('2');
    // 2. action
    let newState = profileReducer(state, action);
 // 3. expectation
    expect(newState.posts.length).toBe(0);
});
