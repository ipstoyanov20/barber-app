/* tslint:disable */
/* eslint-disable */
/**
 * Barber App API
 * An API for Barber App 
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface TwoFactorResponse
 */
export interface TwoFactorResponse {
    /**
     * 
     * @type {string}
     * @memberof TwoFactorResponse
     */
    sharedKey?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TwoFactorResponse
     */
    recoveryCodesLeft?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TwoFactorResponse
     */
    recoveryCodes?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof TwoFactorResponse
     */
    isTwoFactorEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TwoFactorResponse
     */
    isMachineRemembered?: boolean;
}
