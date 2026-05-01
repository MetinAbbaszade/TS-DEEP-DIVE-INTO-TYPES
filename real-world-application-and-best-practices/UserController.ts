import type { Product, ProductService } from "./ProductService";

export class UserController {
	constructor(private readonly productService: ProductService) {}

	async getProductForUser(userId: number, productId: number): Promise<string> {
		const product = await this.productService.fetchProductDetails(productId);

		if (!product) {
			return `User ${userId}: Product ${productId} was not found.`;
		}

		return this.formatProductResponse(userId, product);
	}

	async getRecommendedProductsForUser(userId: number): Promise<string> {
		const products = await this.productService.fetchAvailableProducts();

		if (products.length === 0) {
			return `User ${userId}: No recommended products are available right now.`;
		}

		const productLines = products
			.map((product) => `- ${this.formatProduct(product)}`)
			.join("\n");

		return `Recommended products for user ${userId}:\n${productLines}`;
	}

	private formatProductResponse(userId: number, product: Product): string {
		return `User ${userId} requested product details:\n- ${this.formatProduct(
			product,
		)}`;
	}

	private formatProduct(product: Product): string {
		const availability = product.inStock ? "In stock" : "Out of stock";

		return `${product.name}: $${product.price.toFixed(2)} | ${
			product.description
		} | ${availability}`;
	}
}
