/* tslint:disable */
/* eslint-disable */
/**
 * Migration Planner API - agent endpoint
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: undefined
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Source,
  SourceStatusUpdate,
} from '../models/index';
import {
    SourceFromJSON,
    SourceToJSON,
    SourceStatusUpdateFromJSON,
    SourceStatusUpdateToJSON,
} from '../models/index';

export interface ReplaceSourceStatusRequest {
    id: string;
    sourceStatusUpdate: SourceStatusUpdate;
}

/**
 * SourceApi - interface
 * 
 * @export
 * @interface SourceApiInterface
 */
export interface SourceApiInterface {
    /**
     * replace status of the specified source
     * @param {string} id ID of the source
     * @param {SourceStatusUpdate} sourceStatusUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SourceApiInterface
     */
    replaceSourceStatusRaw(requestParameters: ReplaceSourceStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Source>>;

    /**
     * replace status of the specified source
     */
    replaceSourceStatus(requestParameters: ReplaceSourceStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Source>;

}

/**
 * 
 */
export class SourceApi extends runtime.BaseAPI implements SourceApiInterface {

    /**
     * replace status of the specified source
     */
    async replaceSourceStatusRaw(requestParameters: ReplaceSourceStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Source>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling replaceSourceStatus().'
            );
        }

        if (requestParameters['sourceStatusUpdate'] == null) {
            throw new runtime.RequiredError(
                'sourceStatusUpdate',
                'Required parameter "sourceStatusUpdate" was null or undefined when calling replaceSourceStatus().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/sources/{id}/status`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SourceStatusUpdateToJSON(requestParameters['sourceStatusUpdate']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceFromJSON(jsonValue));
    }

    /**
     * replace status of the specified source
     */
    async replaceSourceStatus(requestParameters: ReplaceSourceStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Source> {
        const response = await this.replaceSourceStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
