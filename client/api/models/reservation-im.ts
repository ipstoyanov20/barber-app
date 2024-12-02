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
import { DateOnly } from './date-only';
import { TimeSpan } from './time-span';
/**
 * 
 * @export
 * @interface ReservationIM
 */
export interface ReservationIM {
    /**
     * 
     * @type {string}
     * @memberof ReservationIM
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationIM
     */
    lastName: string;
    /**
     * 
     * @type {DateOnly}
     * @memberof ReservationIM
     */
    date: DateOnly;
    /**
     * 
     * @type {TimeSpan}
     * @memberof ReservationIM
     */
    time: TimeSpan;
    /**
     * 
     * @type {string}
     * @memberof ReservationIM
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReservationIM
     */
    phone: string;
}
