/**
 * Created on 02.02.17 at 21:44
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import development from "../dist/development";

const params = [
    "_default,",
    "development,",
    "production,",
];

export function none(test)
{
    test.strictEqual(
        development(
            ...params,
            "",
        ),
        "_default,"
    );
    
    test.done();
}

export function developmentPost(test)
{
    test.strictEqual(
        development(
            ...params,
            "development",
        ),
        "_default,development,",
    );
    
    test.done();
}

export function developmentPre(test)
{
    test.strictEqual(
        development(
            ...params,
            "development",
            development.PRE_DEFAULT,
        ),
        "development,_default,",
    );
    
    test.done();
};

export function productionPost(test)
{
    test.strictEqual(
        development(
            ...params,
            "production",
        ),
        "_default,production,",
    );
    
    test.done();
}

export function productionPre(test)
{
    test.strictEqual(
        development(
            ...params,
            "production",
            development.PRE_DEFAULT,
        ),
        "production,_default,",
    );
    
    test.done();
};
