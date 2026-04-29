export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export declare class ApiService {
    private readonly baseUrl;
    fetchData(): Promise<Post[]>;
}
//# sourceMappingURL=apiService.d.ts.map