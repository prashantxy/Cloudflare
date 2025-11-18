
//Adding hono framework to your cloudflare worker.

import { Hono } from 'hono';

// initialize  Hono
const app = new Hono<{Bindings:Env}>();

//add a simple get request
app.get('/', c => {
	return c.json({message : "Hello World"})
});

//add a simple post request


export default app;


