import {createStore} from "redux"
import { rootReducer } from "./components/ReducerConfig"

export const store=createStore({rootReducer})