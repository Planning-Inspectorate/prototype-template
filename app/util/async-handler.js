export function asyncHandler(
    // supports async or sync handlers
    requestHandler
) {
    return (request, response, next) => {
        try {
            const p = requestHandler(request, response, next);
            if (p instanceof Promise) {
                p.catch(next);
            }
        } catch (e) {
            // in case a sync function is passed in
            next(e);
        }
    };
}
