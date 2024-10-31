import { GithubUser } from "@/types/github-user";

export async function getUserByName(username:string):Promise<GithubUser> {
    const urlSearch:string = `https://api.github.com/users/${username}`;
    const fetchResponse:Response = await fetch(urlSearch);
    
    try{
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
