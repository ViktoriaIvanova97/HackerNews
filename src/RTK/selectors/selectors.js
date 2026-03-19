export const selectorNewsIds = (store) => store.news.ids
export const selectorNews = (store) => store.news.items
export const selectorComment = (id)=>(store)=>store.comments.comments[id]