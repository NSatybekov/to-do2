import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategy";
import { AuthRepository } from "./auth.repository";
import { UserRepository } from "src/users/users.repository";

@Module({

    imports: [PrismaModule, JwtModule.register({ })],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, UserRepository]
})


export class AuthModule {} 