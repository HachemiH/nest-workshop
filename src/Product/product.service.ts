import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProducts(): string[] {
    return ['Pommes', 'Oranges', 'Bananes', 'Fraises'];
  }
}
