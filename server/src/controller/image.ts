import { app } from '../server'
import { images } from '../db/db';
const getImages = () => {
	return app.get('/images', (req: any, res: any) => {
		res.json(images);
	});
}
export default getImages;
