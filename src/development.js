/**
 * Created on 30.01.17 at 15:30
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import combine from "./combine";

export default function development(_default, development, production, env = process.env.NODE_ENV)
{
    if (env === "development")
        return combine(_default, development);
    if (env === "production")
        return combine(_default, production);
    return _default;
}
