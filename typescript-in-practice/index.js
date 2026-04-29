"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const apiService_1 = require("./apiService");
async function main() {
    const apiService = new apiService_1.ApiService();
    const posts = await apiService.fetchData();
    console.log("Fetched posts:");
    console.log(posts);
}
main();
//# sourceMappingURL=index.js.map