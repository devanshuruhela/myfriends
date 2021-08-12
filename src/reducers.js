import { CHANGE_SEARCH_FIELD } from "./constants"

const initialstate = 
{
  searchfield : ''
}

export const searchfreind = (state = initialstate , action = {}) =>
{
  switch(action.type)
  {
    case CHANGE_SEARCH_FIELD :
    return Object.assign({} , state , {searchfield : action.payload})

    default:
      return state;
  }
}