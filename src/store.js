import { createStore, thunk, action, computed } from "easy-peasy";
import api from "./api/posts";

export default createStore({
    items: [],
    setItems: action((state, payload) => {
        state.items = payload
    }),
    search: ``,
    setSearch: action((state, payload) => {
        state.search = payload
    }),
    newPostTitle: ``,
    setNewPostTitle: action((state, payload) => {
        state.newPostTitle = payload
    }),
    newPostBody: ``,
    setNewPostBody: action((state, payload) => {
        state.newPostBody = payload
    }),
    editPostBody: ``,
    setEditPostBody: action((state, payload) => {
        state.editPostBody = payload
    }),
    editPostTitle: ``,
    setEditPostTitle: action((state, payload) => {
        state.editPostTitle = payload
    }),
    postCount: computed((state) => state.items.length),
    getPostById: computed((state) => {
        return (id) => state.items.find(item => item.id === +id)
    }), 

    savePost: thunk(async (actions, newPost, helpers) => {
        const { items } = helpers.getState();
        try {
            const response = await api.post("/posts", newPost)
            actions.setItems([response.data, ...items]);
            actions.setNewPostBody(``);
            actions.setNewPostTitle(``)
        } catch(err) {
            console.log(`Error: ${err.message}`)
        }
    }),
    deletePost: thunk(async (actions, id, helpers) => {
        const { items } = helpers.getState();
        try{
            await api.delete(`/posts/${id}`)
            actions.setItems(items.filter(target => target.id !== id));
        }catch(err) {
            console.error(`Error: ${err.message}`)
        }
    }),
    editPost: thunk (async (actions, updatedPost, helpers) => {
        const { items } = helpers.getState();
        const { id } = updatedPost
        try{
            //Using Path That Changes Only Properties
            // const response = await api.patch(`/posts/${id}`, {title: updatedPost.title, datetime, body: updatedPost.body} )
            //Using Path That Changes The Whole Object
            const response = await api.put(`/posts/${id}`, {...updatedPost})
            actions.setItems(items.map(item => item.id === +id ? {...response.data} : item))
          } catch(err) {
            console.error(err.message)
          }
    })
})