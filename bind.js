'use strict';

function bind(fn, ctx) {
    return function(a) {
        var l = arguments.length;
        return l ? (l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a)) : fn.call(ctx);
    };
}

module.exports = bind;
