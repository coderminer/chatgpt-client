// @ts-expect-error - handle missing typings for this package
import { sign } from "jsonwebtoken-esm";

export const generateToken = () => {
    const key = import.meta.env.VITE_API_KEY;
    const [id, secret] = key.split(".");
    console.log(id, secret, typeof sign);

    const timestamp = new Date().getTime();
    const exp = timestamp + 5 * 60 * 1000;
    const payload = {
        api_key: id,
        exp,
        timestamp,
    };
    const options = {
        algorithm: "HS256",
        header: { alg: "HS256", sign_type: "SIGN" },
    };
    const token = sign(payload, secret, options);
    console.log('t: ', timestamp, token)
    return token;
};
