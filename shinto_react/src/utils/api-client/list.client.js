module.exports= (apiClient) =>({
    getAll:()=> apiClient.get('api/lists'),
    addList:(list)=> apiClient.post('api/lists',{data:list}),
    getList:(listId) => apiClient.get(`api/lists/${listId}`),
    getListByCreatorId:(creator_id)=>apiClient.get(`api/lists/${creator_id}`),
    updateList: (listId,list) =>
    apiClient.put(`/list/${listId}`,{data:list}),
    deleteList: (listId) => apiClient.delete(`api/lists/${listId}`),
})