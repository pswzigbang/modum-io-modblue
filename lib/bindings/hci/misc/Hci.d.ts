/// <reference types="node" />
import { TypedEmitter } from 'tiny-typed-emitter';
import { AddressType } from '../../../types';
interface HciDevice {
    devId: number;
    devUp: boolean;
    idVendor: null;
    idProduct: null;
    busNumber: null;
    name: string;
    address: string;
}
interface HciEvents {
    stateChange: (newState: string) => void;
    aclDataPkt: (handle: number, cid: number, data: Buffer) => void;
    leScanEnable: (enabled: boolean, filterDuplicates: boolean) => void;
    leConnComplete: (status: number, handle: number, role: number, addressType: AddressType, address: string, interval: number, latency: number, supervisionTimeout: number) => void;
    leConnUpdate: (status: number, handle: number, interval: number, latency: number, supervisionTimeout: number) => void;
    disconnectComplete: (status: number, handle: number, reason: string) => void;
    leAdvertiseEnable: (enabled: boolean) => void;
    leAdvertisingReport: (type: number, address: string, addressType: AddressType, eir: Buffer, rssi: number) => void;
    cmdStatus: (status: number) => void;
    cmdComplete: (status: number, data: Buffer) => void;
    hciEvent: (eventCode: number, data: Buffer) => void;
    error: (error: Error) => void;
}
export declare class Hci extends TypedEmitter<HciEvents> {
    state: string;
    deviceId: number;
    addressType: AddressType;
    address: string;
    hciVersion: number;
    hciRevision: number;
    private socket;
    private socketTimer;
    private isSocketUp;
    private handles;
    private mutex;
    private mutexStack;
    private currentCmd;
    private cmdTimeout;
    private aclDataPacketLength;
    private totalNumAclDataPackets;
    private aclLeDataPacketLength;
    private totalNumAclLeDataPackets;
    private aclPacketQueue;
    constructor(deviceId?: number, cmdTimeout?: number);
    static getDeviceList(): HciDevice[];
    private acquireMutex;
    init(): Promise<void>;
    private checkSocketState;
    dispose(): void;
    private sendCommand;
    private setSocketFilter;
    private setEventMask;
    reset(): Promise<void>;
    private readLocalVersion;
    private readBdAddr;
    private setLeEventMask;
    private readLeHostSupported;
    private writeLeHostSupported;
    setScanParameters(): Promise<void>;
    setScanEnabled(enabled: boolean, filterDuplicates: boolean): Promise<void>;
    createLeConn(address: string, addressType: AddressType, minInterval?: number, maxInterval?: number, latency?: number, supervisionTimeout?: number): Promise<number>;
    cancelLeConn(customMutex?: boolean): Promise<void>;
    connUpdateLe(handle: number, minInterval: number, maxInterval: number, latency: number, supervisionTimeout: number): Promise<void>;
    disconnect(handle: number, reason?: number): Promise<void>;
    readRssi(handle: number): Promise<number>;
    writeAclDataPkt(handleId: number, cid: number, data: Buffer): void;
    private processAclPacketQueue;
    readBufferSize(): Promise<void>;
    readLeBufferSize(): Promise<void>;
    setScanResponseData(data: Buffer): Promise<void>;
    setAdvertisingData(data: Buffer): Promise<void>;
    setAdvertisingEnabled(enabled: boolean): Promise<void>;
    private onSocketData;
    private handleEventPkt;
    private handleDisconnectPkt;
    private handleCmdCompletePkt;
    private handleCmdStatusPkt;
    private handleLeMetaEventPkt;
    private handleLeConnCompleteEvent;
    private handleLeConnUpdateEvent;
    private handleLeAdvertisingReportEvent;
    private handleNumCompletedPktsPkt;
    private handleHardwareErrorPkt;
    private handleAclDataPkt;
    private handleCmdPkt;
    private handleSetScanEnablePkt;
    private handleSetAdvertiseEnablePkt;
    private onSocketError;
}
export {};
