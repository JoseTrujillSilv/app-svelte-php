import Status from './routes/StatusOk.svelte';
import Home from './routes/Home.svelte';
import Table from './routes/TableRut.svelte';

const routes = {
    '/' : Home,
    '/statusOk': Status,
    '/table' : Table
}

export default routes;