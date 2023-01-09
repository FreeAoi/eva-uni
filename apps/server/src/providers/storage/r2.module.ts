import { DynamicModule, Global, Module } from '@nestjs/common';
import { S3Service } from './r2.service';
import type { S3ClientConfig } from '@aws-sdk/client-s3';

@Global()
@Module({})
export class S3Module {
    static forRoot(options: S3ClientConfig): DynamicModule {
        return {
            module: S3Module,
            providers: [
                {
                    provide: 'OPTIONS',
                    useValue: options
                },
                S3Service
            ],
            exports: [S3Service]
        };
    }
}