"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GattCharacteristic = void 0;
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
const util_1 = require("util");
const Inspect_1 = require("../Inspect");
/**
 * Represents a GATT Characteristic.
 */
class GattCharacteristic extends tiny_typed_emitter_1.TypedEmitter {
    constructor(service, uuid, isRemote, propsOrFlag, secureOrFlag, readFuncOrValue, writeFunc) {
        super();
        /**
         * The descriptors that belong to this characteristic, mapped by UUID.
         * If this is a remote characteristic use {@link discoverDescriptors} to discover them.
         */
        this.descriptors = new Map();
        this.service = service;
        this.uuid = uuid;
        this.isRemote = isRemote;
        let properties = [];
        let secure = [];
        let propertyFlag = 0;
        let secureFlag = 0;
        if (typeof propsOrFlag === 'object') {
            properties = propsOrFlag;
            if (propsOrFlag.includes('read')) {
                propertyFlag |= 0x02;
            }
            if (propsOrFlag.includes('write-without-response')) {
                propertyFlag |= 0x04;
            }
            if (propsOrFlag.includes('write')) {
                propertyFlag |= 0x08;
            }
            if (propsOrFlag.includes('notify')) {
                propertyFlag |= 0x10;
            }
            if (propsOrFlag.includes('indicate')) {
                propertyFlag |= 0x20;
            }
        }
        else {
            propertyFlag = propsOrFlag;
            if (propsOrFlag & 0x01) {
                properties.push('broadcast');
            }
            if (propsOrFlag & 0x02) {
                properties.push('read');
            }
            if (propsOrFlag & 0x04) {
                properties.push('write-without-response');
            }
            if (propsOrFlag & 0x08) {
                properties.push('write');
            }
            if (propsOrFlag & 0x10) {
                properties.push('notify');
            }
            if (propsOrFlag & 0x20) {
                properties.push('indicate');
            }
            if (propsOrFlag & 0x40) {
                properties.push('authenticated-signed-writes');
            }
            if (propsOrFlag & 0x80) {
                properties.push('extended-properties');
            }
        }
        if (typeof secureOrFlag === 'object') {
            secure = secureOrFlag;
            if (secureOrFlag.includes('read')) {
                secureFlag |= 0x02;
            }
            if (secureOrFlag.includes('write-without-response')) {
                secureFlag |= 0x04;
            }
            if (secureOrFlag.includes('write')) {
                secureFlag |= 0x08;
            }
            if (secureOrFlag.includes('notify')) {
                secureFlag |= 0x10;
            }
            if (secureOrFlag.includes('indicate')) {
                secureFlag |= 0x20;
            }
        }
        else {
            secureFlag = secureOrFlag;
            if (secureOrFlag & 0x01) {
                secure.push('broadcast');
            }
            if (secureOrFlag & 0x02) {
                secure.push('read');
            }
            if (secureOrFlag & 0x04) {
                secure.push('write-without-response');
            }
            if (secureOrFlag & 0x08) {
                secure.push('write');
            }
            if (secureOrFlag & 0x10) {
                secure.push('notify');
            }
            if (secureOrFlag & 0x20) {
                secure.push('indicate');
            }
            if (secureOrFlag & 0x40) {
                secure.push('authenticated-signed-writes');
            }
            if (secureOrFlag & 0x80) {
                secure.push('extended-properties');
            }
        }
        this.properties = properties;
        this.secure = secure;
        this.propertyFlag = propertyFlag;
        this.secureFlag = secureFlag;
        if (typeof readFuncOrValue !== 'function') {
            this.readFunc = () => __awaiter(this, void 0, void 0, function* () { return readFuncOrValue; });
        }
        else {
            this.readFunc = readFuncOrValue;
        }
        this.writeFunc = writeFunc;
    }
    /**
     * Remote only: Enable notifications. Equivalent to calling {@link notify} with `true`.
     */
    subscribe() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isRemote) {
                throw new Error('Can only be used for remote characteristic');
            }
            yield this.notify(true);
        });
    }
    /**
     * Remote only: Disable nofitications. Equivalent to calling {@link notify} with `false`.
     */
    unsubscribe() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isRemote) {
                throw new Error('Can only be used for remote characteristic');
            }
            yield this.notify(false);
        });
    }
    /**
     * Local only: Handles an incoming read request for this characteristic.
     * @param offset The offset to start at
     * @returns The read data.
     */
    handleRead(offset) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isRemote) {
                throw new Error('Can only be used for local characteristic');
            }
            return this.readFunc(offset);
        });
    }
    /**
     * Local only: Handles an incoming write request for this characteristic.
     * @param offset The offset to start at.
     * @param data The data to write.
     * @param withoutResponse True to not produce a response code, false otherwise.
     * @returns The result code.
     */
    handleWrite(offset, data, withoutResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isRemote) {
                throw new Error('Can only be used for local characteristic');
            }
            return this.writeFunc(offset, data, withoutResponse);
        });
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
    toJSON() {
        return {
            uuid: this.uuid,
            properties: this.properties,
            secure: this.secure,
            service: this.service
        };
    }
    [Inspect_1.CUSTOM](depth, options) {
        const name = this.constructor.name;
        if (depth < 0) {
            return options.stylize(`[${name}]`, 'special');
        }
        const newOptions = Object.assign(Object.assign({}, options), { depth: options.depth === null ? null : options.depth - 1 });
        const padding = ' '.repeat(name.length + 1);
        const inner = (0, util_1.inspect)(this.toJSON(), newOptions).replace(/\n/g, `\n${padding}`);
        return `${options.stylize(name, 'special')} ${inner}`;
    }
}
exports.GattCharacteristic = GattCharacteristic;
//# sourceMappingURL=Characteristic.js.map