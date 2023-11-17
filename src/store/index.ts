import { configureStore } from "@reduxjs/toolkit";
import { teamSliceReducer } from "@/store/reducer/teams"
import { collaboratorSliceReducer } from "./reducer/collaborator";


export const store = configureStore({
    reducer: {
        team: teamSliceReducer,
        membersTeam: collaboratorSliceReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch