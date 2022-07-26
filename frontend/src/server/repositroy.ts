import { ShortUrl, ShortUrlModel } from '../models/shortUrl';
import axios from 'axios'

export class ShortUrlRepo {
	async findUnique(where: {id: number}): Promise<ShortUrlModel | null> {
		try {
			const res = await axios.get<any>(`http://django:8080/shorturl/${where.id}`)
			const shortUrl: ShortUrl = res.data;
			let shortUrlModel: ShortUrlModel = new ShortUrlModel();
			shortUrlModel.id = shortUrl.id;
			shortUrlModel.long_url = shortUrl.long_url;
			shortUrlModel.created_at = shortUrl.created_at;
			return shortUrlModel;
		} catch (e) {
			// console.log(e);
			return null
		}
	}

	async create(data: { long_url: string }): Promise<ShortUrlModel> {
		const res = await axios.post<any>(`http://django:8080/shorturl/`, data)
		const shortUrl: ShortUrl = res.data;
		let shortUrlModel: ShortUrlModel = new ShortUrlModel();
		shortUrlModel.id = shortUrl.id;
		shortUrlModel.long_url = shortUrl.long_url;
		shortUrlModel.created_at = shortUrl.created_at;
		return shortUrlModel;
	}
}