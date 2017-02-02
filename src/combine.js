/* @flow */

/**
 * Created on 30.01.17 at 15:30
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import _ from "lodash";

export default function combine(a : any, b : any)
{
    if (Array.isArray(a) && Array.isArray(b))
        return _.concat([], a, b);
    
    if (typeof a === "string" && typeof b === "string")
        return a + b;
    
    if (typeof a === "object" && a !== null && typeof b === "object" && b !== null)
        return _.assign({}, a, b);
    
    throw new TypeError("Arguments passed to combine() not compatible!");
}
