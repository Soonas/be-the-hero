import axios from 'axios';

//necessario ip do expo[mostrado na propria pagina do expo] << nesse caso, usando o mobile físico.
const api = axios.create({
    baseURL: 'http://192.168.0.19:3333'          //ip + porta utilizada no node
});

export default api;