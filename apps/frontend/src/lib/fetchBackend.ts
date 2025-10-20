export async function fetchBackend(){const res=await fetch(process.env.API_URL||'http://localhost:4000/api/hello');return res.json();}
