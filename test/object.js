/**
 * Created on 02.02.17 at 21:50
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import development from "../dist/development";

const params = [
    {
        type: "_default",
        _default: true,
    },
    {
        type: "development",
        development: true,
    },
    {
        type: "production",
        production: true,
    },
];

export function none(test)
{
    test.deepEqual(
        development(
            ...params,
            "",
        ),
        {
            type: "_default",
            _default: true,
        },
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
        {
            type: "development",
            _default: true,
            development: true,
        },
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
        {
            type: "_default",
            _default: true,
            development: true,
        },
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
        {
            type: "production",
            _default: true,
            production: true,
        },
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
        {
            type: "_default",
            _default: true,
            production: true,
        },
    );
    
    test.done();
};
