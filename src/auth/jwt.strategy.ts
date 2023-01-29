
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";


export class JwtStrategy extends PassportStrategy(Strategy) {


    //actual validate is here, because here jwtFromRequest
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'SECRET' // TODO: protect this, move to env var
        })
    }


    //not valitedate, just return the object
    async validate(payload: any) {
        return {
            id: payload.sub,
            name: payload.name
        };
    }

}
