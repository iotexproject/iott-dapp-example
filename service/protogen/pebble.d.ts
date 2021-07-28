import * as $protobuf from "protobufjs";
/** Properties of a SensorData. */
export interface ISensorData {

    /** SensorData snr */
    snr?: (number|null);

    /** SensorData vbat */
    vbat?: (number|null);

    /** SensorData latitude */
    latitude?: (number|null);

    /** SensorData longitude */
    longitude?: (number|null);

    /** SensorData gasResistance */
    gasResistance?: (number|null);

    /** SensorData temperature */
    temperature?: (number|null);

    /** SensorData pressure */
    pressure?: (number|null);

    /** SensorData humidity */
    humidity?: (number|null);

    /** SensorData light */
    light?: (number|null);

    /** SensorData temperature2 */
    temperature2?: (number|null);

    /** SensorData gyroscope */
    gyroscope?: (number[]|null);

    /** SensorData accelerometer */
    accelerometer?: (number[]|null);

    /** SensorData random */
    random?: (string|null);
}

/** Represents a SensorData. */
export class SensorData implements ISensorData {

    /**
     * Constructs a new SensorData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISensorData);

    /** SensorData snr. */
    public snr: number;

    /** SensorData vbat. */
    public vbat: number;

    /** SensorData latitude. */
    public latitude: number;

    /** SensorData longitude. */
    public longitude: number;

    /** SensorData gasResistance. */
    public gasResistance: number;

    /** SensorData temperature. */
    public temperature: number;

    /** SensorData pressure. */
    public pressure: number;

    /** SensorData humidity. */
    public humidity: number;

    /** SensorData light. */
    public light: number;

    /** SensorData temperature2. */
    public temperature2: number;

    /** SensorData gyroscope. */
    public gyroscope: number[];

    /** SensorData accelerometer. */
    public accelerometer: number[];

    /** SensorData random. */
    public random: string;

    /**
     * Creates a new SensorData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SensorData instance
     */
    public static create(properties?: ISensorData): SensorData;

    /**
     * Encodes the specified SensorData message. Does not implicitly {@link SensorData.verify|verify} messages.
     * @param message SensorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISensorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SensorData message, length delimited. Does not implicitly {@link SensorData.verify|verify} messages.
     * @param message SensorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISensorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SensorData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SensorData;

    /**
     * Decodes a SensorData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SensorData;

    /**
     * Verifies a SensorData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SensorData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SensorData
     */
    public static fromObject(object: { [k: string]: any }): SensorData;

    /**
     * Creates a plain object from a SensorData message. Also converts values to other types if specified.
     * @param message SensorData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SensorData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SensorData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SensorConfig. */
export interface ISensorConfig {

    /** SensorConfig bulkUpload */
    bulkUpload?: (number|null);

    /** SensorConfig dataChannel */
    dataChannel?: (number|null);

    /** SensorConfig uploadPeriod */
    uploadPeriod?: (number|null);

    /** SensorConfig bulkUploadSamplingCnt */
    bulkUploadSamplingCnt?: (number|null);

    /** SensorConfig bulkUploadSamplingFreq */
    bulkUploadSamplingFreq?: (number|null);

    /** SensorConfig beep */
    beep?: (number|null);

    /** SensorConfig firmware */
    firmware?: (string|null);
}

/** Represents a SensorConfig. */
export class SensorConfig implements ISensorConfig {

    /**
     * Constructs a new SensorConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISensorConfig);

    /** SensorConfig bulkUpload. */
    public bulkUpload: number;

    /** SensorConfig dataChannel. */
    public dataChannel: number;

    /** SensorConfig uploadPeriod. */
    public uploadPeriod: number;

    /** SensorConfig bulkUploadSamplingCnt. */
    public bulkUploadSamplingCnt: number;

    /** SensorConfig bulkUploadSamplingFreq. */
    public bulkUploadSamplingFreq: number;

    /** SensorConfig beep. */
    public beep: number;

    /** SensorConfig firmware. */
    public firmware: string;

    /**
     * Creates a new SensorConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SensorConfig instance
     */
    public static create(properties?: ISensorConfig): SensorConfig;

    /**
     * Encodes the specified SensorConfig message. Does not implicitly {@link SensorConfig.verify|verify} messages.
     * @param message SensorConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISensorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SensorConfig message, length delimited. Does not implicitly {@link SensorConfig.verify|verify} messages.
     * @param message SensorConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISensorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SensorConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SensorConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SensorConfig;

    /**
     * Decodes a SensorConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SensorConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SensorConfig;

    /**
     * Verifies a SensorConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SensorConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SensorConfig
     */
    public static fromObject(object: { [k: string]: any }): SensorConfig;

    /**
     * Creates a plain object from a SensorConfig message. Also converts values to other types if specified.
     * @param message SensorConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SensorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SensorConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SensorState. */
export interface ISensorState {

    /** SensorState state */
    state?: (number|null);
}

/** Represents a SensorState. */
export class SensorState implements ISensorState {

    /**
     * Constructs a new SensorState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISensorState);

    /** SensorState state. */
    public state: number;

    /**
     * Creates a new SensorState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SensorState instance
     */
    public static create(properties?: ISensorState): SensorState;

    /**
     * Encodes the specified SensorState message. Does not implicitly {@link SensorState.verify|verify} messages.
     * @param message SensorState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISensorState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SensorState message, length delimited. Does not implicitly {@link SensorState.verify|verify} messages.
     * @param message SensorState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISensorState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SensorState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SensorState;

    /**
     * Decodes a SensorState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SensorState;

    /**
     * Verifies a SensorState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SensorState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SensorState
     */
    public static fromObject(object: { [k: string]: any }): SensorState;

    /**
     * Creates a plain object from a SensorState message. Also converts values to other types if specified.
     * @param message SensorState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SensorState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SensorState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SensorConfirm. */
export interface ISensorConfirm {

    /** SensorConfirm owner */
    owner?: (string|null);
}

/** Represents a SensorConfirm. */
export class SensorConfirm implements ISensorConfirm {

    /**
     * Constructs a new SensorConfirm.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISensorConfirm);

    /** SensorConfirm owner. */
    public owner: string;

    /**
     * Creates a new SensorConfirm instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SensorConfirm instance
     */
    public static create(properties?: ISensorConfirm): SensorConfirm;

    /**
     * Encodes the specified SensorConfirm message. Does not implicitly {@link SensorConfirm.verify|verify} messages.
     * @param message SensorConfirm message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISensorConfirm, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SensorConfirm message, length delimited. Does not implicitly {@link SensorConfirm.verify|verify} messages.
     * @param message SensorConfirm message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISensorConfirm, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SensorConfirm message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SensorConfirm
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SensorConfirm;

    /**
     * Decodes a SensorConfirm message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SensorConfirm
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SensorConfirm;

    /**
     * Verifies a SensorConfirm message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SensorConfirm message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SensorConfirm
     */
    public static fromObject(object: { [k: string]: any }): SensorConfirm;

    /**
     * Creates a plain object from a SensorConfirm message. Also converts values to other types if specified.
     * @param message SensorConfirm
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SensorConfirm, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SensorConfirm to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BinPackage. */
export interface IBinPackage {

    /** BinPackage type */
    type: BinPackage.PackageType;

    /** BinPackage data */
    data: Uint8Array;

    /** BinPackage timestamp */
    timestamp: number;

    /** BinPackage signature */
    signature: Uint8Array;
}

/** Represents a BinPackage. */
export class BinPackage implements IBinPackage {

    /**
     * Constructs a new BinPackage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBinPackage);

    /** BinPackage type. */
    public type: BinPackage.PackageType;

    /** BinPackage data. */
    public data: Uint8Array;

    /** BinPackage timestamp. */
    public timestamp: number;

    /** BinPackage signature. */
    public signature: Uint8Array;

    /**
     * Creates a new BinPackage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BinPackage instance
     */
    public static create(properties?: IBinPackage): BinPackage;

    /**
     * Encodes the specified BinPackage message. Does not implicitly {@link BinPackage.verify|verify} messages.
     * @param message BinPackage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBinPackage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BinPackage message, length delimited. Does not implicitly {@link BinPackage.verify|verify} messages.
     * @param message BinPackage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBinPackage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BinPackage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BinPackage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BinPackage;

    /**
     * Decodes a BinPackage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BinPackage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BinPackage;

    /**
     * Verifies a BinPackage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BinPackage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BinPackage
     */
    public static fromObject(object: { [k: string]: any }): BinPackage;

    /**
     * Creates a plain object from a BinPackage message. Also converts values to other types if specified.
     * @param message BinPackage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BinPackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BinPackage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace BinPackage {

    /** PackageType enum. */
    enum PackageType {
        DATA = 0,
        CONFIG = 1,
        STATE = 2
    }
}

/** Properties of a ConfirmPackage. */
export interface IConfirmPackage {

    /** ConfirmPackage owner */
    owner: Uint8Array;

    /** ConfirmPackage timestamp */
    timestamp: number;

    /** ConfirmPackage signature */
    signature: Uint8Array;

    /** ConfirmPackage channel */
    channel: number;
}

/** Represents a ConfirmPackage. */
export class ConfirmPackage implements IConfirmPackage {

    /**
     * Constructs a new ConfirmPackage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConfirmPackage);

    /** ConfirmPackage owner. */
    public owner: Uint8Array;

    /** ConfirmPackage timestamp. */
    public timestamp: number;

    /** ConfirmPackage signature. */
    public signature: Uint8Array;

    /** ConfirmPackage channel. */
    public channel: number;

    /**
     * Creates a new ConfirmPackage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConfirmPackage instance
     */
    public static create(properties?: IConfirmPackage): ConfirmPackage;

    /**
     * Encodes the specified ConfirmPackage message. Does not implicitly {@link ConfirmPackage.verify|verify} messages.
     * @param message ConfirmPackage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConfirmPackage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConfirmPackage message, length delimited. Does not implicitly {@link ConfirmPackage.verify|verify} messages.
     * @param message ConfirmPackage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConfirmPackage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConfirmPackage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConfirmPackage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConfirmPackage;

    /**
     * Decodes a ConfirmPackage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConfirmPackage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConfirmPackage;

    /**
     * Verifies a ConfirmPackage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConfirmPackage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConfirmPackage
     */
    public static fromObject(object: { [k: string]: any }): ConfirmPackage;

    /**
     * Creates a plain object from a ConfirmPackage message. Also converts values to other types if specified.
     * @param message ConfirmPackage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConfirmPackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConfirmPackage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
