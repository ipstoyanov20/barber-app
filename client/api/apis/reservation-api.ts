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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Reservation } from '../models';
/**
 * ReservationApi - axios parameter creator
 * @export
 */
export const ReservationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reservationIdGet: async (id?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Reservation/Id`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['Id'] = id;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReservationApi - functional programming interface
 * @export
 */
export const ReservationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reservationIdGet(id?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Reservation>>> {
            const localVarAxiosArgs = await ReservationApiAxiosParamCreator(configuration).reservationIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ReservationApi - factory interface
 * @export
 */
export const ReservationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reservationIdGet(id?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Reservation>> {
            return ReservationApiFp(configuration).reservationIdGet(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReservationApi - object-oriented interface
 * @export
 * @class ReservationApi
 * @extends {BaseAPI}
 */
export class ReservationApi extends BaseAPI {
    /**
     * 
     * @param {string} [id] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReservationApi
     */
    public async reservationIdGet(id?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Reservation>> {
        return ReservationApiFp(this.configuration).reservationIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
}
