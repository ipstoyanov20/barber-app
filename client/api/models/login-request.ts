/* tslint:disable */
/* eslint-disable */
/**
 * BA.Application
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    twoFactorCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    twoFactorRecoveryCode?: string | null;
}
