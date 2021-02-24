export const setGroups = groups => {
    return {
        type: "SET_GROUPS",
        groups
    }
}

export const getGroups = () => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/groups", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setGroups(response.data))
            
          }
        })
        .catch(console.log)
    }
  }