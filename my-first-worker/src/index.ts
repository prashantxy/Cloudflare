
//Adding hono framework to your cloudflare worker.
import { Hono } from 'hono';


// initialize  Hono
const app = new Hono <{Bindings : Env}>();

//add a simple get request

app.get('/',async c =>{
	return c.json({message : "Testing the wrangler worker of cloudflare"})
})

//add a simple post request for any product dynamically
app.post('/',async c=>{
	const body = c.req.json();
	const name = body.name;
	const price = body.price;

	return c.json(`the name is ${name} and the price is ${price}`);
})

app.post('/check',async c =>{
	return c.json(`checking`);
})


//export the app
export default app;

//Check on localhost:8787


