function genError(message: string, code: number) : never
{
    throw {message : message , errorcode: code};
}

genError('404 page not found error', 400);