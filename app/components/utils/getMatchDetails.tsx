
export default async function getMatchDetails(id: string) {
    const headers = new Headers({
        'Authorization': `Basic ${btoa('akshit:akshit123')}`,
        'Content-Type': 'application/json',
    });
            //http://localhost:8080/getMatchDetails?matchId={}
    const response = await fetch(`http://localhost:8080/getMatchDetails?matchId=${id}`, {
        method: 'GET',
        headers: headers,
        cache: 'no-store'
    });

    if(!response.ok){
        throw new Error("Failed to fetch match details")
    }

    return response.json();
}