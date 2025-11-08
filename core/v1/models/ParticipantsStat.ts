/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemAttempts } from './ProblemAttempts';
export type ParticipantsStat = {
    user_id: string;
    username: string;
    solved: number;
    penalty: number;
    attempts: Array<ProblemAttempts>;
};

