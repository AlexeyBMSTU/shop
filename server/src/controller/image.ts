import { images } from '@/db/db'
import { app } from '@/server'

app.get('/images', (req: any, res: any) => {
	res.json(images);
});
