import { configureStore } from "@reduxjs/toolkit";
import {langReducers} from './slice/lang.js'

export const store = configureStore({
    reducer:{
        lang :langReducers
    }
})