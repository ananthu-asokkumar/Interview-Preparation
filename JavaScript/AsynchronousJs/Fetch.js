

/**
 * the fetch API is a better , faster and more efficient way to deal with Http or network requests.
 * 
 * 
 * THe fetch API by default makes a GET  request .IN case if you want to make a post request then the 
 * optional object parameter can be used.
 * 
 * 
 */

// async function fetchData() {
    
//     let response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     console.log(response);
// }

// fetchData();

async function fetchData() {
    const todo = {
        user: "Ananthu",
        title: "learn react",
        status:false
        
    }

    let response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': `application/json;charset=utf-8`
        
        },
        body:JSON.stringify(todo)
        
    
  });
  console.log(response);
}

fetchData();