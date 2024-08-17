import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
    fullCode: {
        html: string;
        css: string;
        javascript: string;
    };
    currentLanguage: "html" | "css" | "javascript";
};

const initialState: CompilerSliceStateType = {
    fullCode: {
        html:
`<html lang="en">
<body>
    <div class="todo-container">
        <h1>To-Do List</h1>
        <input type="text" id="new-task" placeholder="Add a new task...">
        <button id="add-task-btn">Add Task</button>
        <ul id="task-list"></ul>
    </div>
  <script src="script.js"></script>
</body>
</html>`,
        css: "This is CSS code",
        javascript: "This is JS code",
    },
    currentLanguage: "html",
};

const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action: PayloadAction<CompilerSliceStateType["currentLanguage"]>) => {
            state.currentLanguage = action.payload;
        },
        updateCodeValue: (
            state,
            action: PayloadAction<string>) => {
            state.fullCode[state.currentLanguage] = action.payload;
        }
    },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue } = compilerSlice.actions;