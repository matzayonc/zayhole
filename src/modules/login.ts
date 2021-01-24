import {server} from '../data.json'

export async function login(login:string, passwd:string):Promise<boolean>{
    const data = {passwd: passwd, remember:true }
    let answer
    console.log('sending')

    try {
        answer = await fetch(`/login/${login}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            })
            .then(response => response.json())
    } catch (error) {
        console.log('answer')
        return false
    }

    return answer.success
}

export async function register(login:string, passwd:string):Promise<string>{
    const data = { name: login, passwd: passwd }
    let answer
    console.log('sending')

    try {
        answer = await fetch(`/register/${login}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            })
            .then(response => response.json())

        
            
    } catch (error) {
        console.log('answer')
        return 'fetch error'
    }
    if(answer.success)
        return 'ok'
    else
        return 'couldn\'t create'
}

export function validateUsername(name:string):boolean{
    return name != '' && name.length <= 20
}

export function validatePassword(pass:string):boolean{
    return pass.length >= 1 && pass.length <= 64 
}