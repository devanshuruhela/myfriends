import { CHANGE_SEARCH_FIELD } from "./constants"

export const setsearchfield = (text)=>(
  {
    type : CHANGE_SEARCH_FIELD,
    payload : text
  }
)