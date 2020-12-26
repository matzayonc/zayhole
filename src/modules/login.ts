import {server} from '../data.json'

interface Check {
    login: boolean
    password: boolean
}


export async function login(login:string, passwd:string):boolean{
    const data = { name: login, passwd: passwd }
    let answer
    console.log('sending')

    try {
        answer = await fetch(`/login`, {
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


export function check(login:string, passwd:string): Check{
    let validLogin = true
    let validPassword = true

    validLogin /*&&*/= login != ''
    validLogin /*&&*/= login.length <= 20

    return {login: validLogin, password: validPassword}
}