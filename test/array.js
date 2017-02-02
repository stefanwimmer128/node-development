/**
 * Created on 02.02.17 at 21:16
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import development from "../dist/development";

const params = [
    [
        "_default",
    ],
    [
        "development",
    ],
    [
        "production",
    ],
];

export function none(test)
{
    test.deepEqual(
        development(
            ...params,
            "",
        ),
        [
            "_default",
        ],
    );
    
    test.done();
}

export function developmentPost(test)
{
    test.deepEqual(
        development(
            ...params,
            "development",
        ),
        [
            "_default",
            "development",
        ],
    );
    
    test.done();
}

export function developmentPre(test)
{
    test.deepEqual(
        development(
            ...params,
            "development",
            development.PRE_DEFAULT,
        ),
        [
            "development",
            "_default",
        ],
    );
    
    test.done();
};

export function productionPost(test)
{
    test.deepEqual(
        development(
            ...params,
            "production",
        ),
        [
            "_default",
            "production",
        ],
    );
    
    test.done();
}

export function productionPre(test)
{
    test.deepEqual(
        development(
            ...params,
            "production",
            development.PRE_DEFAULT,
        ),
        [
            "production",
            "_default",
        ],
    );
    
    test.done();
};
