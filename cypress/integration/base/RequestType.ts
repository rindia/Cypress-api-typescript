import * as url from '../../fixtures/Url.json';

export class RequestTYpe {

    public static postReq(reqBody: Object, endPoint: string, headers?: any, queryParam?: any) {

       return cy.request({
            url: `${url.base.baseURL + endPoint}`,
            method: 'POST',
            body: reqBody,
            headers: headers,
            qs: queryParam
        })

    }
    public static getReq(endPoint: string, headers?: any, queryParam?: any) {

       return cy.request({
            url: `${url.base.baseURL + endPoint}`,
            method: 'GET',
            headers: headers,
            qs: queryParam
        })

    }

    public static deleteReq(endPoint: string, headers?: any, queryParam?: any) {

        return cy.request({
             url: `${url.base.baseURL + endPoint}`,
             method: 'DELETE',
             headers: headers,
             qs: queryParam
         })
 
     }


     public static updateReqPatch(reqBody: Object, endPoint: string, headers?: any, queryParam?: any) {

        return cy.request({
             url: `${url.base.baseURL + endPoint}`,
             method: 'POST',
             body: reqBody,
             headers: headers,
             qs: queryParam
         })
 
     }

}