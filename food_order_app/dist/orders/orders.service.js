"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
let OrderService = class OrderService {
    constructor() {
        this._orders = [
            {
                id: '1',
                date: new Date(),
                productsOrdered: [
                    { id: '1', productName: 'Jeans', productPrice: 100 },
                    { id: '2', productName: 'Shirts', productPrice: 50 },
                ]
            },
            {
                id: '2',
                date: new Date(),
                productsOrdered: [
                    { id: '3', productName: 'Slippers', productPrice: 20 },
                    { id: '4', productName: 'belts', productPrice: 50 },
                ]
            },
            {
                id: '3',
                date: new Date(),
                productsOrdered: [
                    { id: '5', productName: 'Shoes', productPrice: 20 },
                    { id: '6', productName: 'Helmets', productPrice: 50 },
                ]
            }
        ];
    }
    getOrders() {
        return this._orders;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=orders.service.js.map