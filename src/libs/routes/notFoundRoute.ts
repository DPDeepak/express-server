export default function notFoundRoute(res, req, next) {
    next({ error: 'Not Found' })
}