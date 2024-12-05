export function tryCatch(func) {
    return (req, res, next) => {
        func(req, res).catch(next);
    };
}