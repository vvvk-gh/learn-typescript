function genError(message, code) {
    throw { message: message, errorcode: code };
}
genError('404 page not found error', 400);
