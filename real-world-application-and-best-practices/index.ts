import { ProductService } from "./ProductService";
import { UserController } from "./UserController";

async function main(): Promise<void> {
	const productService = new ProductService();
	const userController = new UserController(productService);

	const userId = 101;

	const productDetails = await userController.getProductForUser(userId, 1);
	console.log(productDetails);

	console.log();

	const missingProduct = await userController.getProductForUser(userId, 999);
	console.log(missingProduct);

	console.log();

	const recommendations =
		await userController.getRecommendedProductsForUser(userId);
	console.log(recommendations);
}

main().catch((error: unknown) => {
	console.error("Unexpected error:", error);
});
