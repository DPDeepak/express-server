export default function errorHandler(err, req, res, next) {

    const timestamp = new Date().toJSON();
    res.json({
        error: err || 'Something Went Wrong',
        message: 'Bad request',
        status: 400,
        timestamp,
    });
}
