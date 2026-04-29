import axios from "axios";

export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export class ApiService {
	private readonly baseUrl = "https://jsonplaceholder.typicode.com";

	async fetchData(): Promise<Post[]> {
		try {
			const response = await axios.get<Post[]>(`${this.baseUrl}/posts`);
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error("Axios error:", error.message);
			} else {
				console.error("Unexpected error:", error);
			}

			return [];
		}
	}
}
