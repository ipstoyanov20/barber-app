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
import { DayOfWeek } from './day-of-week';
/**
 * 
 * @export
 * @interface DateOnly
 */
export interface DateOnly {
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    year?: number;
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    month?: number;
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    day?: number;
    /**
     * 
     * @type {DayOfWeek}
     * @memberof DateOnly
     */
    dayOfWeek?: DayOfWeek;
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    dayOfYear?: number;
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    dayNumber?: number;
}
