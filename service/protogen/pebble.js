/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SensorData = (function() {

    /**
     * Properties of a SensorData.
     * @exports ISensorData
     * @interface ISensorData
     * @property {number|null} [snr] SensorData snr
     * @property {number|null} [vbat] SensorData vbat
     * @property {number|null} [latitude] SensorData latitude
     * @property {number|null} [longitude] SensorData longitude
     * @property {number|null} [gasResistance] SensorData gasResistance
     * @property {number|null} [temperature] SensorData temperature
     * @property {number|null} [pressure] SensorData pressure
     * @property {number|null} [humidity] SensorData humidity
     * @property {number|null} [light] SensorData light
     * @property {number|null} [temperature2] SensorData temperature2
     * @property {Array.<number>|null} [gyroscope] SensorData gyroscope
     * @property {Array.<number>|null} [accelerometer] SensorData accelerometer
     * @property {string|null} [random] SensorData random
     */

    /**
     * Constructs a new SensorData.
     * @exports SensorData
     * @classdesc Represents a SensorData.
     * @implements ISensorData
     * @constructor
     * @param {ISensorData=} [properties] Properties to set
     */
    function SensorData(properties) {
        this.gyroscope = [];
        this.accelerometer = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SensorData snr.
     * @member {number} snr
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.snr = 0;

    /**
     * SensorData vbat.
     * @member {number} vbat
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.vbat = 0;

    /**
     * SensorData latitude.
     * @member {number} latitude
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.latitude = 0;

    /**
     * SensorData longitude.
     * @member {number} longitude
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.longitude = 0;

    /**
     * SensorData gasResistance.
     * @member {number} gasResistance
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.gasResistance = 0;

    /**
     * SensorData temperature.
     * @member {number} temperature
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.temperature = 0;

    /**
     * SensorData pressure.
     * @member {number} pressure
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.pressure = 0;

    /**
     * SensorData humidity.
     * @member {number} humidity
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.humidity = 0;

    /**
     * SensorData light.
     * @member {number} light
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.light = 0;

    /**
     * SensorData temperature2.
     * @member {number} temperature2
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.temperature2 = 0;

    /**
     * SensorData gyroscope.
     * @member {Array.<number>} gyroscope
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.gyroscope = $util.emptyArray;

    /**
     * SensorData accelerometer.
     * @member {Array.<number>} accelerometer
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.accelerometer = $util.emptyArray;

    /**
     * SensorData random.
     * @member {string} random
     * @memberof SensorData
     * @instance
     */
    SensorData.prototype.random = "";

    /**
     * Creates a new SensorData instance using the specified properties.
     * @function create
     * @memberof SensorData
     * @static
     * @param {ISensorData=} [properties] Properties to set
     * @returns {SensorData} SensorData instance
     */
    SensorData.create = function create(properties) {
        return new SensorData(properties);
    };

    /**
     * Encodes the specified SensorData message. Does not implicitly {@link SensorData.verify|verify} messages.
     * @function encode
     * @memberof SensorData
     * @static
     * @param {ISensorData} message SensorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SensorData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.snr != null && Object.hasOwnProperty.call(message, "snr"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.snr);
        if (message.vbat != null && Object.hasOwnProperty.call(message, "vbat"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.vbat);
        if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.latitude);
        if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.longitude);
        if (message.gasResistance != null && Object.hasOwnProperty.call(message, "gasResistance"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.gasResistance);
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.temperature);
        if (message.pressure != null && Object.hasOwnProperty.call(message, "pressure"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.pressure);
        if (message.humidity != null && Object.hasOwnProperty.call(message, "humidity"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.humidity);
        if (message.light != null && Object.hasOwnProperty.call(message, "light"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.light);
        if (message.temperature2 != null && Object.hasOwnProperty.call(message, "temperature2"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.temperature2);
        if (message.gyroscope != null && message.gyroscope.length)
            for (var i = 0; i < message.gyroscope.length; ++i)
                writer.uint32(/* id 11, wireType 0 =*/88).sint32(message.gyroscope[i]);
        if (message.accelerometer != null && message.accelerometer.length)
            for (var i = 0; i < message.accelerometer.length; ++i)
                writer.uint32(/* id 12, wireType 0 =*/96).sint32(message.accelerometer[i]);
        if (message.random != null && Object.hasOwnProperty.call(message, "random"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.random);
        return writer;
    };

    /**
     * Encodes the specified SensorData message, length delimited. Does not implicitly {@link SensorData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SensorData
     * @static
     * @param {ISensorData} message SensorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SensorData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SensorData message from the specified reader or buffer.
     * @function decode
     * @memberof SensorData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SensorData} SensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SensorData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SensorData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.snr = reader.uint32();
                break;
            case 2:
                message.vbat = reader.uint32();
                break;
            case 3:
                message.latitude = reader.uint32();
                break;
            case 4:
                message.longitude = reader.uint32();
                break;
            case 5:
                message.gasResistance = reader.uint32();
                break;
            case 6:
                message.temperature = reader.uint32();
                break;
            case 7:
                message.pressure = reader.uint32();
                break;
            case 8:
                message.humidity = reader.uint32();
                break;
            case 9:
                message.light = reader.uint32();
                break;
            case 10:
                message.temperature2 = reader.uint32();
                break;
            case 11:
                if (!(message.gyroscope && message.gyroscope.length))
                    message.gyroscope = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.gyroscope.push(reader.sint32());
                } else
                    message.gyroscope.push(reader.sint32());
                break;
            case 12:
                if (!(message.accelerometer && message.accelerometer.length))
                    message.accelerometer = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.accelerometer.push(reader.sint32());
                } else
                    message.accelerometer.push(reader.sint32());
                break;
            case 13:
                message.random = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SensorData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SensorData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SensorData} SensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SensorData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SensorData message.
     * @function verify
     * @memberof SensorData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SensorData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.snr != null && message.hasOwnProperty("snr"))
            if (!$util.isInteger(message.snr))
                return "snr: integer expected";
        if (message.vbat != null && message.hasOwnProperty("vbat"))
            if (!$util.isInteger(message.vbat))
                return "vbat: integer expected";
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            if (!$util.isInteger(message.latitude))
                return "latitude: integer expected";
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            if (!$util.isInteger(message.longitude))
                return "longitude: integer expected";
        if (message.gasResistance != null && message.hasOwnProperty("gasResistance"))
            if (!$util.isInteger(message.gasResistance))
                return "gasResistance: integer expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (!$util.isInteger(message.temperature))
                return "temperature: integer expected";
        if (message.pressure != null && message.hasOwnProperty("pressure"))
            if (!$util.isInteger(message.pressure))
                return "pressure: integer expected";
        if (message.humidity != null && message.hasOwnProperty("humidity"))
            if (!$util.isInteger(message.humidity))
                return "humidity: integer expected";
        if (message.light != null && message.hasOwnProperty("light"))
            if (!$util.isInteger(message.light))
                return "light: integer expected";
        if (message.temperature2 != null && message.hasOwnProperty("temperature2"))
            if (!$util.isInteger(message.temperature2))
                return "temperature2: integer expected";
        if (message.gyroscope != null && message.hasOwnProperty("gyroscope")) {
            if (!Array.isArray(message.gyroscope))
                return "gyroscope: array expected";
            for (var i = 0; i < message.gyroscope.length; ++i)
                if (!$util.isInteger(message.gyroscope[i]))
                    return "gyroscope: integer[] expected";
        }
        if (message.accelerometer != null && message.hasOwnProperty("accelerometer")) {
            if (!Array.isArray(message.accelerometer))
                return "accelerometer: array expected";
            for (var i = 0; i < message.accelerometer.length; ++i)
                if (!$util.isInteger(message.accelerometer[i]))
                    return "accelerometer: integer[] expected";
        }
        if (message.random != null && message.hasOwnProperty("random"))
            if (!$util.isString(message.random))
                return "random: string expected";
        return null;
    };

    /**
     * Creates a SensorData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SensorData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SensorData} SensorData
     */
    SensorData.fromObject = function fromObject(object) {
        if (object instanceof $root.SensorData)
            return object;
        var message = new $root.SensorData();
        if (object.snr != null)
            message.snr = object.snr >>> 0;
        if (object.vbat != null)
            message.vbat = object.vbat >>> 0;
        if (object.latitude != null)
            message.latitude = object.latitude >>> 0;
        if (object.longitude != null)
            message.longitude = object.longitude >>> 0;
        if (object.gasResistance != null)
            message.gasResistance = object.gasResistance >>> 0;
        if (object.temperature != null)
            message.temperature = object.temperature >>> 0;
        if (object.pressure != null)
            message.pressure = object.pressure >>> 0;
        if (object.humidity != null)
            message.humidity = object.humidity >>> 0;
        if (object.light != null)
            message.light = object.light >>> 0;
        if (object.temperature2 != null)
            message.temperature2 = object.temperature2 >>> 0;
        if (object.gyroscope) {
            if (!Array.isArray(object.gyroscope))
                throw TypeError(".SensorData.gyroscope: array expected");
            message.gyroscope = [];
            for (var i = 0; i < object.gyroscope.length; ++i)
                message.gyroscope[i] = object.gyroscope[i] | 0;
        }
        if (object.accelerometer) {
            if (!Array.isArray(object.accelerometer))
                throw TypeError(".SensorData.accelerometer: array expected");
            message.accelerometer = [];
            for (var i = 0; i < object.accelerometer.length; ++i)
                message.accelerometer[i] = object.accelerometer[i] | 0;
        }
        if (object.random != null)
            message.random = String(object.random);
        return message;
    };

    /**
     * Creates a plain object from a SensorData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SensorData
     * @static
     * @param {SensorData} message SensorData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SensorData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.gyroscope = [];
            object.accelerometer = [];
        }
        if (options.defaults) {
            object.snr = 0;
            object.vbat = 0;
            object.latitude = 0;
            object.longitude = 0;
            object.gasResistance = 0;
            object.temperature = 0;
            object.pressure = 0;
            object.humidity = 0;
            object.light = 0;
            object.temperature2 = 0;
            object.random = "";
        }
        if (message.snr != null && message.hasOwnProperty("snr"))
            object.snr = message.snr;
        if (message.vbat != null && message.hasOwnProperty("vbat"))
            object.vbat = message.vbat;
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            object.latitude = message.latitude;
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            object.longitude = message.longitude;
        if (message.gasResistance != null && message.hasOwnProperty("gasResistance"))
            object.gasResistance = message.gasResistance;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = message.temperature;
        if (message.pressure != null && message.hasOwnProperty("pressure"))
            object.pressure = message.pressure;
        if (message.humidity != null && message.hasOwnProperty("humidity"))
            object.humidity = message.humidity;
        if (message.light != null && message.hasOwnProperty("light"))
            object.light = message.light;
        if (message.temperature2 != null && message.hasOwnProperty("temperature2"))
            object.temperature2 = message.temperature2;
        if (message.gyroscope && message.gyroscope.length) {
            object.gyroscope = [];
            for (var j = 0; j < message.gyroscope.length; ++j)
                object.gyroscope[j] = message.gyroscope[j];
        }
        if (message.accelerometer && message.accelerometer.length) {
            object.accelerometer = [];
            for (var j = 0; j < message.accelerometer.length; ++j)
                object.accelerometer[j] = message.accelerometer[j];
        }
        if (message.random != null && message.hasOwnProperty("random"))
            object.random = message.random;
        return object;
    };

    /**
     * Converts this SensorData to JSON.
     * @function toJSON
     * @memberof SensorData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SensorData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SensorData;
})();

$root.SensorConfig = (function() {

    /**
     * Properties of a SensorConfig.
     * @exports ISensorConfig
     * @interface ISensorConfig
     * @property {number|null} [bulkUpload] SensorConfig bulkUpload
     * @property {number|null} [dataChannel] SensorConfig dataChannel
     * @property {number|null} [uploadPeriod] SensorConfig uploadPeriod
     * @property {number|null} [bulkUploadSamplingCnt] SensorConfig bulkUploadSamplingCnt
     * @property {number|null} [bulkUploadSamplingFreq] SensorConfig bulkUploadSamplingFreq
     * @property {number|null} [beep] SensorConfig beep
     * @property {string|null} [firmware] SensorConfig firmware
     */

    /**
     * Constructs a new SensorConfig.
     * @exports SensorConfig
     * @classdesc Represents a SensorConfig.
     * @implements ISensorConfig
     * @constructor
     * @param {ISensorConfig=} [properties] Properties to set
     */
    function SensorConfig(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SensorConfig bulkUpload.
     * @member {number} bulkUpload
     * @memberof SensorConfig
     * @instance
     */
    SensorConfig.prototype.bulkUpload = 0;

    /**
     * SensorConfig dataChannel.
     * @member {number} dataChannel
     * @memberof SensorConfig
     * @instance
     */
    SensorConfig.prototype.dataChannel = 0;

    /**
     * SensorConfig uploadPeriod.
     * @member {number} uploadPeriod
     * @memberof SensorConfig
     * @instance
     */
    SensorConfig.prototype.uploadPeriod = 0;

    /**
     * SensorConfig bulkUploadSamplingCnt.
     * @member {number} bulkUploadSamplingCnt
     * @memberof SensorConfig
     * @instance
     */
    SensorConfig.prototype.bulkUploadSamplingCnt = 0;

    /**
     * SensorConfig bulkUploadSamplingFreq.
     * @member {number} bulkUploadSamplingFreq
     * @memberof SensorConfig
     * @instance
     */
    SensorConfig.prototype.bulkUploadSamplingFreq = 0;

    /**
     * SensorConfig beep.
     * @member {number} beep
     * @memberof SensorConfig
     * @instance
     */
    SensorConfig.prototype.beep = 0;

    /**
     * SensorConfig firmware.
     * @member {string} firmware
     * @memberof SensorConfig
     * @instance
     */
    SensorConfig.prototype.firmware = "";

    /**
     * Creates a new SensorConfig instance using the specified properties.
     * @function create
     * @memberof SensorConfig
     * @static
     * @param {ISensorConfig=} [properties] Properties to set
     * @returns {SensorConfig} SensorConfig instance
     */
    SensorConfig.create = function create(properties) {
        return new SensorConfig(properties);
    };

    /**
     * Encodes the specified SensorConfig message. Does not implicitly {@link SensorConfig.verify|verify} messages.
     * @function encode
     * @memberof SensorConfig
     * @static
     * @param {ISensorConfig} message SensorConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SensorConfig.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.bulkUpload != null && Object.hasOwnProperty.call(message, "bulkUpload"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.bulkUpload);
        if (message.dataChannel != null && Object.hasOwnProperty.call(message, "dataChannel"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.dataChannel);
        if (message.uploadPeriod != null && Object.hasOwnProperty.call(message, "uploadPeriod"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.uploadPeriod);
        if (message.bulkUploadSamplingCnt != null && Object.hasOwnProperty.call(message, "bulkUploadSamplingCnt"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.bulkUploadSamplingCnt);
        if (message.bulkUploadSamplingFreq != null && Object.hasOwnProperty.call(message, "bulkUploadSamplingFreq"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.bulkUploadSamplingFreq);
        if (message.beep != null && Object.hasOwnProperty.call(message, "beep"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.beep);
        if (message.firmware != null && Object.hasOwnProperty.call(message, "firmware"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.firmware);
        return writer;
    };

    /**
     * Encodes the specified SensorConfig message, length delimited. Does not implicitly {@link SensorConfig.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SensorConfig
     * @static
     * @param {ISensorConfig} message SensorConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SensorConfig.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SensorConfig message from the specified reader or buffer.
     * @function decode
     * @memberof SensorConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SensorConfig} SensorConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SensorConfig.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SensorConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.bulkUpload = reader.uint32();
                break;
            case 2:
                message.dataChannel = reader.uint32();
                break;
            case 3:
                message.uploadPeriod = reader.uint32();
                break;
            case 4:
                message.bulkUploadSamplingCnt = reader.uint32();
                break;
            case 5:
                message.bulkUploadSamplingFreq = reader.uint32();
                break;
            case 6:
                message.beep = reader.uint32();
                break;
            case 7:
                message.firmware = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SensorConfig message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SensorConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SensorConfig} SensorConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SensorConfig.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SensorConfig message.
     * @function verify
     * @memberof SensorConfig
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SensorConfig.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.bulkUpload != null && message.hasOwnProperty("bulkUpload"))
            if (!$util.isInteger(message.bulkUpload))
                return "bulkUpload: integer expected";
        if (message.dataChannel != null && message.hasOwnProperty("dataChannel"))
            if (!$util.isInteger(message.dataChannel))
                return "dataChannel: integer expected";
        if (message.uploadPeriod != null && message.hasOwnProperty("uploadPeriod"))
            if (!$util.isInteger(message.uploadPeriod))
                return "uploadPeriod: integer expected";
        if (message.bulkUploadSamplingCnt != null && message.hasOwnProperty("bulkUploadSamplingCnt"))
            if (!$util.isInteger(message.bulkUploadSamplingCnt))
                return "bulkUploadSamplingCnt: integer expected";
        if (message.bulkUploadSamplingFreq != null && message.hasOwnProperty("bulkUploadSamplingFreq"))
            if (!$util.isInteger(message.bulkUploadSamplingFreq))
                return "bulkUploadSamplingFreq: integer expected";
        if (message.beep != null && message.hasOwnProperty("beep"))
            if (!$util.isInteger(message.beep))
                return "beep: integer expected";
        if (message.firmware != null && message.hasOwnProperty("firmware"))
            if (!$util.isString(message.firmware))
                return "firmware: string expected";
        return null;
    };

    /**
     * Creates a SensorConfig message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SensorConfig
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SensorConfig} SensorConfig
     */
    SensorConfig.fromObject = function fromObject(object) {
        if (object instanceof $root.SensorConfig)
            return object;
        var message = new $root.SensorConfig();
        if (object.bulkUpload != null)
            message.bulkUpload = object.bulkUpload >>> 0;
        if (object.dataChannel != null)
            message.dataChannel = object.dataChannel >>> 0;
        if (object.uploadPeriod != null)
            message.uploadPeriod = object.uploadPeriod >>> 0;
        if (object.bulkUploadSamplingCnt != null)
            message.bulkUploadSamplingCnt = object.bulkUploadSamplingCnt >>> 0;
        if (object.bulkUploadSamplingFreq != null)
            message.bulkUploadSamplingFreq = object.bulkUploadSamplingFreq >>> 0;
        if (object.beep != null)
            message.beep = object.beep >>> 0;
        if (object.firmware != null)
            message.firmware = String(object.firmware);
        return message;
    };

    /**
     * Creates a plain object from a SensorConfig message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SensorConfig
     * @static
     * @param {SensorConfig} message SensorConfig
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SensorConfig.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.bulkUpload = 0;
            object.dataChannel = 0;
            object.uploadPeriod = 0;
            object.bulkUploadSamplingCnt = 0;
            object.bulkUploadSamplingFreq = 0;
            object.beep = 0;
            object.firmware = "";
        }
        if (message.bulkUpload != null && message.hasOwnProperty("bulkUpload"))
            object.bulkUpload = message.bulkUpload;
        if (message.dataChannel != null && message.hasOwnProperty("dataChannel"))
            object.dataChannel = message.dataChannel;
        if (message.uploadPeriod != null && message.hasOwnProperty("uploadPeriod"))
            object.uploadPeriod = message.uploadPeriod;
        if (message.bulkUploadSamplingCnt != null && message.hasOwnProperty("bulkUploadSamplingCnt"))
            object.bulkUploadSamplingCnt = message.bulkUploadSamplingCnt;
        if (message.bulkUploadSamplingFreq != null && message.hasOwnProperty("bulkUploadSamplingFreq"))
            object.bulkUploadSamplingFreq = message.bulkUploadSamplingFreq;
        if (message.beep != null && message.hasOwnProperty("beep"))
            object.beep = message.beep;
        if (message.firmware != null && message.hasOwnProperty("firmware"))
            object.firmware = message.firmware;
        return object;
    };

    /**
     * Converts this SensorConfig to JSON.
     * @function toJSON
     * @memberof SensorConfig
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SensorConfig.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SensorConfig;
})();

$root.SensorState = (function() {

    /**
     * Properties of a SensorState.
     * @exports ISensorState
     * @interface ISensorState
     * @property {number|null} [state] SensorState state
     */

    /**
     * Constructs a new SensorState.
     * @exports SensorState
     * @classdesc Represents a SensorState.
     * @implements ISensorState
     * @constructor
     * @param {ISensorState=} [properties] Properties to set
     */
    function SensorState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SensorState state.
     * @member {number} state
     * @memberof SensorState
     * @instance
     */
    SensorState.prototype.state = 0;

    /**
     * Creates a new SensorState instance using the specified properties.
     * @function create
     * @memberof SensorState
     * @static
     * @param {ISensorState=} [properties] Properties to set
     * @returns {SensorState} SensorState instance
     */
    SensorState.create = function create(properties) {
        return new SensorState(properties);
    };

    /**
     * Encodes the specified SensorState message. Does not implicitly {@link SensorState.verify|verify} messages.
     * @function encode
     * @memberof SensorState
     * @static
     * @param {ISensorState} message SensorState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SensorState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.state);
        return writer;
    };

    /**
     * Encodes the specified SensorState message, length delimited. Does not implicitly {@link SensorState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SensorState
     * @static
     * @param {ISensorState} message SensorState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SensorState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SensorState message from the specified reader or buffer.
     * @function decode
     * @memberof SensorState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SensorState} SensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SensorState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SensorState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.state = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SensorState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SensorState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SensorState} SensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SensorState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SensorState message.
     * @function verify
     * @memberof SensorState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SensorState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        return null;
    };

    /**
     * Creates a SensorState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SensorState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SensorState} SensorState
     */
    SensorState.fromObject = function fromObject(object) {
        if (object instanceof $root.SensorState)
            return object;
        var message = new $root.SensorState();
        if (object.state != null)
            message.state = object.state >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a SensorState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SensorState
     * @static
     * @param {SensorState} message SensorState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SensorState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.state = 0;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        return object;
    };

    /**
     * Converts this SensorState to JSON.
     * @function toJSON
     * @memberof SensorState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SensorState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SensorState;
})();

$root.SensorConfirm = (function() {

    /**
     * Properties of a SensorConfirm.
     * @exports ISensorConfirm
     * @interface ISensorConfirm
     * @property {string|null} [owner] SensorConfirm owner
     */

    /**
     * Constructs a new SensorConfirm.
     * @exports SensorConfirm
     * @classdesc Represents a SensorConfirm.
     * @implements ISensorConfirm
     * @constructor
     * @param {ISensorConfirm=} [properties] Properties to set
     */
    function SensorConfirm(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SensorConfirm owner.
     * @member {string} owner
     * @memberof SensorConfirm
     * @instance
     */
    SensorConfirm.prototype.owner = "";

    /**
     * Creates a new SensorConfirm instance using the specified properties.
     * @function create
     * @memberof SensorConfirm
     * @static
     * @param {ISensorConfirm=} [properties] Properties to set
     * @returns {SensorConfirm} SensorConfirm instance
     */
    SensorConfirm.create = function create(properties) {
        return new SensorConfirm(properties);
    };

    /**
     * Encodes the specified SensorConfirm message. Does not implicitly {@link SensorConfirm.verify|verify} messages.
     * @function encode
     * @memberof SensorConfirm
     * @static
     * @param {ISensorConfirm} message SensorConfirm message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SensorConfirm.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.owner);
        return writer;
    };

    /**
     * Encodes the specified SensorConfirm message, length delimited. Does not implicitly {@link SensorConfirm.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SensorConfirm
     * @static
     * @param {ISensorConfirm} message SensorConfirm message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SensorConfirm.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SensorConfirm message from the specified reader or buffer.
     * @function decode
     * @memberof SensorConfirm
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SensorConfirm} SensorConfirm
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SensorConfirm.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SensorConfirm();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.owner = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SensorConfirm message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SensorConfirm
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SensorConfirm} SensorConfirm
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SensorConfirm.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SensorConfirm message.
     * @function verify
     * @memberof SensorConfirm
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SensorConfirm.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.owner != null && message.hasOwnProperty("owner"))
            if (!$util.isString(message.owner))
                return "owner: string expected";
        return null;
    };

    /**
     * Creates a SensorConfirm message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SensorConfirm
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SensorConfirm} SensorConfirm
     */
    SensorConfirm.fromObject = function fromObject(object) {
        if (object instanceof $root.SensorConfirm)
            return object;
        var message = new $root.SensorConfirm();
        if (object.owner != null)
            message.owner = String(object.owner);
        return message;
    };

    /**
     * Creates a plain object from a SensorConfirm message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SensorConfirm
     * @static
     * @param {SensorConfirm} message SensorConfirm
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SensorConfirm.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.owner = "";
        if (message.owner != null && message.hasOwnProperty("owner"))
            object.owner = message.owner;
        return object;
    };

    /**
     * Converts this SensorConfirm to JSON.
     * @function toJSON
     * @memberof SensorConfirm
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SensorConfirm.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SensorConfirm;
})();

$root.BinPackage = (function() {

    /**
     * Properties of a BinPackage.
     * @exports IBinPackage
     * @interface IBinPackage
     * @property {BinPackage.PackageType} type BinPackage type
     * @property {Uint8Array} data BinPackage data
     * @property {number} timestamp BinPackage timestamp
     * @property {Uint8Array} signature BinPackage signature
     */

    /**
     * Constructs a new BinPackage.
     * @exports BinPackage
     * @classdesc Represents a BinPackage.
     * @implements IBinPackage
     * @constructor
     * @param {IBinPackage=} [properties] Properties to set
     */
    function BinPackage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BinPackage type.
     * @member {BinPackage.PackageType} type
     * @memberof BinPackage
     * @instance
     */
    BinPackage.prototype.type = 0;

    /**
     * BinPackage data.
     * @member {Uint8Array} data
     * @memberof BinPackage
     * @instance
     */
    BinPackage.prototype.data = $util.newBuffer([]);

    /**
     * BinPackage timestamp.
     * @member {number} timestamp
     * @memberof BinPackage
     * @instance
     */
    BinPackage.prototype.timestamp = 0;

    /**
     * BinPackage signature.
     * @member {Uint8Array} signature
     * @memberof BinPackage
     * @instance
     */
    BinPackage.prototype.signature = $util.newBuffer([]);

    /**
     * Creates a new BinPackage instance using the specified properties.
     * @function create
     * @memberof BinPackage
     * @static
     * @param {IBinPackage=} [properties] Properties to set
     * @returns {BinPackage} BinPackage instance
     */
    BinPackage.create = function create(properties) {
        return new BinPackage(properties);
    };

    /**
     * Encodes the specified BinPackage message. Does not implicitly {@link BinPackage.verify|verify} messages.
     * @function encode
     * @memberof BinPackage
     * @static
     * @param {IBinPackage} message BinPackage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BinPackage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.timestamp);
        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signature);
        return writer;
    };

    /**
     * Encodes the specified BinPackage message, length delimited. Does not implicitly {@link BinPackage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BinPackage
     * @static
     * @param {IBinPackage} message BinPackage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BinPackage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BinPackage message from the specified reader or buffer.
     * @function decode
     * @memberof BinPackage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BinPackage} BinPackage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BinPackage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BinPackage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            case 3:
                message.timestamp = reader.uint32();
                break;
            case 4:
                message.signature = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        if (!message.hasOwnProperty("data"))
            throw $util.ProtocolError("missing required 'data'", { instance: message });
        if (!message.hasOwnProperty("timestamp"))
            throw $util.ProtocolError("missing required 'timestamp'", { instance: message });
        if (!message.hasOwnProperty("signature"))
            throw $util.ProtocolError("missing required 'signature'", { instance: message });
        return message;
    };

    /**
     * Decodes a BinPackage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BinPackage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BinPackage} BinPackage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BinPackage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BinPackage message.
     * @function verify
     * @memberof BinPackage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BinPackage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        switch (message.type) {
        default:
            return "type: enum value expected";
        case 0:
        case 1:
        case 2:
            break;
        }
        if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
            return "data: buffer expected";
        if (!$util.isInteger(message.timestamp))
            return "timestamp: integer expected";
        if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
            return "signature: buffer expected";
        return null;
    };

    /**
     * Creates a BinPackage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BinPackage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BinPackage} BinPackage
     */
    BinPackage.fromObject = function fromObject(object) {
        if (object instanceof $root.BinPackage)
            return object;
        var message = new $root.BinPackage();
        switch (object.type) {
        case "DATA":
        case 0:
            message.type = 0;
            break;
        case "CONFIG":
        case 1:
            message.type = 1;
            break;
        case "STATE":
        case 2:
            message.type = 2;
            break;
        }
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        if (object.timestamp != null)
            message.timestamp = object.timestamp >>> 0;
        if (object.signature != null)
            if (typeof object.signature === "string")
                $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
            else if (object.signature.length)
                message.signature = object.signature;
        return message;
    };

    /**
     * Creates a plain object from a BinPackage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BinPackage
     * @static
     * @param {BinPackage} message BinPackage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BinPackage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "DATA" : 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
            object.timestamp = 0;
            if (options.bytes === String)
                object.signature = "";
            else {
                object.signature = [];
                if (options.bytes !== Array)
                    object.signature = $util.newBuffer(object.signature);
            }
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.BinPackage.PackageType[message.type] : message.type;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
        return object;
    };

    /**
     * Converts this BinPackage to JSON.
     * @function toJSON
     * @memberof BinPackage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BinPackage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * PackageType enum.
     * @name BinPackage.PackageType
     * @enum {number}
     * @property {number} DATA=0 DATA value
     * @property {number} CONFIG=1 CONFIG value
     * @property {number} STATE=2 STATE value
     */
    BinPackage.PackageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DATA"] = 0;
        values[valuesById[1] = "CONFIG"] = 1;
        values[valuesById[2] = "STATE"] = 2;
        return values;
    })();

    return BinPackage;
})();

$root.ConfirmPackage = (function() {

    /**
     * Properties of a ConfirmPackage.
     * @exports IConfirmPackage
     * @interface IConfirmPackage
     * @property {Uint8Array} owner ConfirmPackage owner
     * @property {number} timestamp ConfirmPackage timestamp
     * @property {Uint8Array} signature ConfirmPackage signature
     * @property {number} channel ConfirmPackage channel
     */

    /**
     * Constructs a new ConfirmPackage.
     * @exports ConfirmPackage
     * @classdesc Represents a ConfirmPackage.
     * @implements IConfirmPackage
     * @constructor
     * @param {IConfirmPackage=} [properties] Properties to set
     */
    function ConfirmPackage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConfirmPackage owner.
     * @member {Uint8Array} owner
     * @memberof ConfirmPackage
     * @instance
     */
    ConfirmPackage.prototype.owner = $util.newBuffer([]);

    /**
     * ConfirmPackage timestamp.
     * @member {number} timestamp
     * @memberof ConfirmPackage
     * @instance
     */
    ConfirmPackage.prototype.timestamp = 0;

    /**
     * ConfirmPackage signature.
     * @member {Uint8Array} signature
     * @memberof ConfirmPackage
     * @instance
     */
    ConfirmPackage.prototype.signature = $util.newBuffer([]);

    /**
     * ConfirmPackage channel.
     * @member {number} channel
     * @memberof ConfirmPackage
     * @instance
     */
    ConfirmPackage.prototype.channel = 0;

    /**
     * Creates a new ConfirmPackage instance using the specified properties.
     * @function create
     * @memberof ConfirmPackage
     * @static
     * @param {IConfirmPackage=} [properties] Properties to set
     * @returns {ConfirmPackage} ConfirmPackage instance
     */
    ConfirmPackage.create = function create(properties) {
        return new ConfirmPackage(properties);
    };

    /**
     * Encodes the specified ConfirmPackage message. Does not implicitly {@link ConfirmPackage.verify|verify} messages.
     * @function encode
     * @memberof ConfirmPackage
     * @static
     * @param {IConfirmPackage} message ConfirmPackage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConfirmPackage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.owner);
        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signature);
        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.channel);
        return writer;
    };

    /**
     * Encodes the specified ConfirmPackage message, length delimited. Does not implicitly {@link ConfirmPackage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConfirmPackage
     * @static
     * @param {IConfirmPackage} message ConfirmPackage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConfirmPackage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConfirmPackage message from the specified reader or buffer.
     * @function decode
     * @memberof ConfirmPackage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConfirmPackage} ConfirmPackage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConfirmPackage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConfirmPackage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.owner = reader.bytes();
                break;
            case 2:
                message.timestamp = reader.uint32();
                break;
            case 3:
                message.signature = reader.bytes();
                break;
            case 4:
                message.channel = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("owner"))
            throw $util.ProtocolError("missing required 'owner'", { instance: message });
        if (!message.hasOwnProperty("timestamp"))
            throw $util.ProtocolError("missing required 'timestamp'", { instance: message });
        if (!message.hasOwnProperty("signature"))
            throw $util.ProtocolError("missing required 'signature'", { instance: message });
        if (!message.hasOwnProperty("channel"))
            throw $util.ProtocolError("missing required 'channel'", { instance: message });
        return message;
    };

    /**
     * Decodes a ConfirmPackage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConfirmPackage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConfirmPackage} ConfirmPackage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConfirmPackage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConfirmPackage message.
     * @function verify
     * @memberof ConfirmPackage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConfirmPackage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!(message.owner && typeof message.owner.length === "number" || $util.isString(message.owner)))
            return "owner: buffer expected";
        if (!$util.isInteger(message.timestamp))
            return "timestamp: integer expected";
        if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
            return "signature: buffer expected";
        if (!$util.isInteger(message.channel))
            return "channel: integer expected";
        return null;
    };

    /**
     * Creates a ConfirmPackage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConfirmPackage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConfirmPackage} ConfirmPackage
     */
    ConfirmPackage.fromObject = function fromObject(object) {
        if (object instanceof $root.ConfirmPackage)
            return object;
        var message = new $root.ConfirmPackage();
        if (object.owner != null)
            if (typeof object.owner === "string")
                $util.base64.decode(object.owner, message.owner = $util.newBuffer($util.base64.length(object.owner)), 0);
            else if (object.owner.length)
                message.owner = object.owner;
        if (object.timestamp != null)
            message.timestamp = object.timestamp >>> 0;
        if (object.signature != null)
            if (typeof object.signature === "string")
                $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
            else if (object.signature.length)
                message.signature = object.signature;
        if (object.channel != null)
            message.channel = object.channel >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ConfirmPackage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConfirmPackage
     * @static
     * @param {ConfirmPackage} message ConfirmPackage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConfirmPackage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.owner = "";
            else {
                object.owner = [];
                if (options.bytes !== Array)
                    object.owner = $util.newBuffer(object.owner);
            }
            object.timestamp = 0;
            if (options.bytes === String)
                object.signature = "";
            else {
                object.signature = [];
                if (options.bytes !== Array)
                    object.signature = $util.newBuffer(object.signature);
            }
            object.channel = 0;
        }
        if (message.owner != null && message.hasOwnProperty("owner"))
            object.owner = options.bytes === String ? $util.base64.encode(message.owner, 0, message.owner.length) : options.bytes === Array ? Array.prototype.slice.call(message.owner) : message.owner;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
        if (message.channel != null && message.hasOwnProperty("channel"))
            object.channel = message.channel;
        return object;
    };

    /**
     * Converts this ConfirmPackage to JSON.
     * @function toJSON
     * @memberof ConfirmPackage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConfirmPackage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConfirmPackage;
})();

module.exports = $root;
