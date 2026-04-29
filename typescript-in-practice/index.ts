// index.ts

import { ApiService } from "./apiService";

async function main(): Promise<void> {
  const apiService = new ApiService();

  const posts = await apiService.fetchData();

  console.log("Fetched posts:");
  console.log(posts);
}

main();