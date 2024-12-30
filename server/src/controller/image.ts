import {images} from '../server'
import { app } from '../server'

const getImages = () => {
	return app.get('/images', (req: any, res: any) => {
		res.json(images);
	});
}

export default getImages;
