import { createSlice } from "@reduxjs/toolkit";

const ChatSlices = createSlice({
    name:"Chat Data",
    initialState:{
        ChatData:[]
    },
    reducers:{
        GetAllchat(state,action){
         state.ChatData = action.payload
        },
        AddToChat(state,action){
         state.ChatData.unshift(action.payload)
        }
    }
})

export const {GetAllchat,AddToChat} = ChatSlices.actions

export default ChatSlices.reducer