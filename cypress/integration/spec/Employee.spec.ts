import { RequestTYpe } from "../base/RequestType";
import { HeadersType } from "../base/HeaderType";
import * as url from '../../fixtures/Url.json';



describe('JIRA story ID - xxxx', () => {

    it('Add user', () => {

        let obj = {
            name: "morpheus",
            job: "leader"
        }
        RequestTYpe.postReq(obj, url.endpoint.createUser, HeadersType.contentJSON).then((resp) => {
            expect(resp.status).to .eq(201);
            expect(resp.body['name']).to .eq('morpheus');

        });

    });

    it('Get all user list', () => {

        RequestTYpe.getReq(url.endpoint.getAllUser, HeadersType.contentJSON).then((resp) => {
            expect(resp.status).to .eq(200);
            expect(resp.body['data'][0]['email']).to .eq('michael.lawson@reqres.in');

        });
    })

    it('Delete user by id', () => {

        RequestTYpe.deleteReq(url.endpoint.deleteUserById, HeadersType.contentJSON).then((resp) => {
            expect(resp.status).to .eq(204);
            expect(resp.body).is.empty

        });
    })

    it('Update user', () => {

        let obj = {
            name: "Rohit",
            job: "saini"
        }
        RequestTYpe.updateReqPatch(obj, url.endpoint.createUser, HeadersType.contentJSON).then((resp) => {
            expect(resp.status).to .eq(201);
            expect(resp.body['name']).to .eq('Rohit');

        });

    });

})