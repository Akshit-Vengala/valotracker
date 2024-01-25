
const headers = new Headers({
    'Authorization': `Basic ${btoa('akshit:akshit123')}`,
    'Content-Type': 'application/json',
});
async function handleSubmit(username:string, password:string){
    console.log("Handle Submit reached")
    // Perform form submission logic here, e.g., send data to the server
    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
              }),
        });
        if (await response.json() == true) {
            // Handle successful form submission (e.g., redirect to a new page)
            // Example: Router.push('/dashboard');
            console.log("Successful json response",username)
            return true
        } else {
            // Handle form submission error (e.g., display an error message)
            //revalidatePath("/error")
        }
    } catch (error) {
        console.error('Error submitting the form:', error);
    }
    return false
}

export default handleSubmit


export async function getLeaderBoard(region:string) {
    
    const response = await fetch(`http://localhost:8080/getLeaderBoard?region=${region}`, {
        method: 'GET',
        headers: headers,
        cache: "no-store"
    });

    if(!response.ok){
        throw new Error("Failed to fetch match details")
    }

    return response.json();
}

export async function getMatchHistory(region:string,username: string, tag:string, mode:string, page:number) {
    const matchHistoryResponse = await fetch(`http://localhost:8080/getMatches?region=${region}&username=${username}&tag=${tag}&mode=${mode}&page=${page}`, {
    method: 'GET',
    headers: headers,
    cache: 'no-store'
  });
  return matchHistoryResponse.json();
    
}

export async function getPlayerDetails(username:string,tag:string, skipCache: boolean = false) {
    const response = await fetch(`http://localhost:8080/account?username=${username}&tag=${tag}&skipCache=${skipCache}`, {
    method: 'GET',
    headers: headers,
    cache: 'no-store'
  });
  return response.json()
}
