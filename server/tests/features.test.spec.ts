import request  from "supertest";
import BluebirdPromise from "bluebird";
import app from '../index'
import httpStatus from 'http-status';

 
fdescribe('Feature REST API tests', () =>
{
    let data : IFeature = {
        name: "feature1",
        blocks: [
            { code: "code1" },
            { code: "code2" }
        ]
    }

    it('post data', (done) => {
        BluebirdPromise.resolve(
            request(app)
               .post('/api/features')
               .send(data)
               .expect(httpStatus.OK)
               .then((res) => {
                   done();
               })
        );
    });

    it('get data', () => {
        BluebirdPromise.resolve(
            request(app)
               .get('/api/features')
               .expect(httpStatus.OK)
               .then((res) => {
                   let feature: IFeature = res.body;
                   expect(feature.name).toBe(data.name);
                   expect(feature.blocks[0].code).toBe(data.blocks[0].code);
                   expect(feature.blocks[1].code).toBe(data.blocks[1].code);
               })
        );
    });

});