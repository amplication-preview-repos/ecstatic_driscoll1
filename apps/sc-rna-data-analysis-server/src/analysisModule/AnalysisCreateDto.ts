import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
@ObjectType("AnalysisCreateDtoObject")
class AnalysisCreateDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    analysisType!: string;

    @Field(() => GraphQLJSON)
    results!: InputJsonValue;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    sampleSource!: string;

    @Field(() => Date)
    @Type(() => Date)
    createdAt!: Date;
}

export { AnalysisCreateDto as AnalysisCreateDto };