/**
 * Created on 02.02.17 at 21:44
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import development from "../dist/development";

export function undefinedEnvironment(test)
{
    test.throws(
        () =>
            development("", "", "", void 0),
    );
    
    test.done();
}

export function combineTypeMismatch(test)
{
    test.throws(
        () =>
            development([], "", {}, "development")
    );
    
    test.done();
}
