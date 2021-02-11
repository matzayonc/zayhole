import { server } from '../data.json'
import { user } from './stores'

export async function login(username:string, password:string):Promise<boolean>{
    const data = {passwd: password, remember:true }
    let answer
    console.log('sending')

    try {
        answer = await fetch(`/login/${username}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            })
            .then(response => response.json())
    } catch (error) {
        console.log('answer')
        return false
    }

    if(answer.success)                
        user.update(u => { return { 
            ...u,
            loggedIn: true,
            name: username
        }})


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