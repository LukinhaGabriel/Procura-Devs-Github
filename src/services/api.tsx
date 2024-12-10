import { GithubUser } from "@/types/github-user";

export async function getUserByName(username:string):Promise<GithubUser> {
    try{
        const rateLimitResponse = await fetch('https://api.github.com/rate_limit');
        const rateLimitData = await rateLimitResponse.json();
        const remainingRequests = rateLimitData.resources.core.remaining;
        if (remainingRequests <= 0) {
            const resetTime = rateLimitData.resources.core.reset;
            const resetDate = new Date(resetTime * 1000).toLocaleString('pt-BR', { 
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'America/Sao_Paulo' 
            });
            throw new Error(`Limite de pesquisas atingido. Tente novamente às ${resetDate} horas`);
        }

        const urlSearch:string = `https://api.github.com/users/${username}`;


            const fetchResponse:Response = await fetch(urlSearch);

            if(!fetchResponse.ok){
                if(fetchResponse.status ===  404){  
                    throw new Error("Ops! Usuário inexistente, Experimente buscar por outro usuário");
                } 
                throw new Error("Houve um problema na requisição. Tente novamente mais tarde.");
            }
            const  data = await fetchResponse.json();
            return data;
    }
    catch(error){
        throw error;
    }
}