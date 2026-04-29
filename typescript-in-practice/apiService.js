"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const axios_1 = __importDefault(require("axios"));
class ApiService {
    baseUrl = "https://jsonplaceholder.typicode.com";
    async fetchData() {
        try {
            const response = await axios_1.default.get(`${this.baseUrl}/posts`);
            return response.data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.error("Axios error:", error.message);
            }
            else {
                console.error("Unexpected error:", error);
            }
            return [];
        }
    }
}
exports.ApiService = ApiService;
//# sourceMappingURL=apiService.js.map