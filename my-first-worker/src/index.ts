
//Adding hono framework to your cloudflare worker.

import { Hono } from 'hono';

// initialize  Hono
const app = new Hono<{Bindings:Env}>();

//add a simple get request
app.get('/', c => {
	return c.json({message : "Hello World"})
});

//add a simple post request

app.post('/', async c =>{
	const body = c.req.json();
	const name = body.name;
	const price = body.price;
	return c.json(`Created Product ${name} with price ${price}`)
})


export default app;


