"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./orders.service");
const update_dto_1 = require("./dto/update.dto");
const order_dto_1 = require("./dto/order.dto");
let OrdersController = class OrdersController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    getOrders() {
        const orders = this.orderService.getOrders();
        console.log(orders);
        return orders;
    }
    getOrdersById(request, params) {
        const id = params.id;
        const order = this.orderService.getOrdersById(id);
        if (order === undefined) {
            throw new common_1.HttpException(`Order with ${id} was not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return order;
    }
    createNewOrder(body) {
        const id = this.orderService.createOrder(body);
        return { message: `New order with id:${id} was created` };
    }
    deletedOrderbyId(request, params) {
        const id = params.id;
        const orderDeleted = this.orderService.deleteOrder(id);
        if (orderDeleted === undefined) {
            throw new common_1.HttpException(`Order with ${id} was not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return { message: `The order with id:${id} was deleted` };
    }
    updatedOrderbyId(params, body) {
        const id = params.id;
        const orderUpdated = this.orderService.updateOrder(id, body);
        if (orderUpdated === undefined) {
            throw new common_1.HttpException(`Order with ${id} was not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return { message: `The order with id:${id} was updated` };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOrders", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(202),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOrdersById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.OrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createNewOrder", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "deletedOrderbyId", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_dto_1.UpdateDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "updatedOrderbyId", null);
OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrderService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map