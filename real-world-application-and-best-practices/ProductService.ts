export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 24.99,
      description: "A responsive ergonomic mouse for everyday use.",
      inStock: true,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 89.99,
      description: "A durable keyboard with tactile switches.",
      inStock: false,
    },
    {
      id: 3,
      name: "USB-C Hub",
      price: 39.99,
      description: "A multi-port hub with HDMI, USB-A, and SD card support.",
      inStock: true,
    },
  ];

  async fetchProductDetails(productId: number): Promise<Product | null> {
    const product = this.products.find((item) => item.id === productId);

    return product ?? null;
  }

  async fetchAvailableProducts(): Promise<Product[]> {
    return this.products.filter((product) => product.inStock);
  }
}