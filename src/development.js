/* @flow */

/**
 * Created on 30.01.17 at 15:30
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import combine from "./combine";

const POST_DEFAULT = 0
const PRE_DEFAULT = 1;

export default function development(
    _default : any,
    development : any,
    production : any,
    env : string = process.env.NODE_ENV,
    mode : number = POST_DEFAULT,
)
{
    if (env === "development" && mode === POST_DEFAULT)
        return combine(_default, development);
    
    if (env === "development" && mode === PRE_DEFAULT)
        return combine(development, _default);
    
    if (env === "production" && mode === POST_DEFAULT)
        return combine(_default, production);
    
    if (env === "production" && mode === PRE_DEFAULT)
        return combine(production, _default);
    
    return _default;
}

development.POST_DEFAULT = POST_DEFAULT;
development.PRE_DEFAULT = PRE_DEFAULT;
