import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
});


export async function cadastrarUsuario(nome,email,senha) {
	const r = await api.post('/usuario', 
    {
        nome,
        email,
        senha
    });
	return r.data;
}