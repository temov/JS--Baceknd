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
const uuid_1 = require("uuid");
let OrderService = class OrderService {
    constructor() {
        this._orders = [
            {
                id: '1',
                date: new Date(),
                productsOrdered: [
                    { id: '1', productName: 'Cheese Burger', productPrice: 5 },
                    { id: '2', productName: 'Bacon burger', productPrice: 6 },
                ]
            },
            {
                id: '2',
                date: new Date(),
                productsOrdered: [
                    { id: '3', productName: 'Chicken wings', productPrice: 5 },
                    { id: '4', productName: 'French fries', productPrice: 2 },
                ]
            },
            {
                id: '3',
                date: new Date(),
                productsOrdered: [
                    { id: "5", productName: "Ice cream", productPrice: 2 },
                    { id: "6", productName: "Pizza", productPrice: 5 }
                ]
            }
        ];
    }
    getOrders() {
        return this._orders;
    }
    getOrdersById(id) {
        const findOrdersbyId = this._orders.find(order => order.id === id);
        return findOrdersbyId;
    }
    createOrder(OrderDto) {
        const newOrder = Object.assign(Object.assign({}, OrderDto), { id: (0, uuid_1.v4)(), date: new Date(OrderDto.date) });
        console.log(newOrder);
        this._orders.push(newOrder);
        console.log(1, this._orders);
        return newOrder.id;
    }
    deleteOrder(id) {
        const deletedElementOrder = this._orders.find(order => order.id !== id);
        return deletedElementOrder;
    }
    updateOrder(id, UpdateDto) {
        const updatedOrder = this._orders.map(order => {
            if (order.id === id)
                return Object.assign(Object.assign({}, order), UpdateDto);
            return order;
        });
        return updatedOrder;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=orders.service.js.map