/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckPermissionRequestModel } from '../models/CheckPermissionRequestModel';
import type { CheckPermissionResponseModel } from '../models/CheckPermissionResponseModel';
import type { CreateSolutionRequestModel } from '../models/CreateSolutionRequestModel';
import type { CreationResponseModel } from '../models/CreationResponseModel';
import type { GetContestProblemResponseModel } from '../models/GetContestProblemResponseModel';
import type { GetContestResponseModel } from '../models/GetContestResponseModel';
import type { GetMonitorResponseModel } from '../models/GetMonitorResponseModel';
import type { GetProblemResponseModel } from '../models/GetProblemResponseModel';
import type { GetSolutionResponseModel } from '../models/GetSolutionResponseModel';
import type { GetTestResultsResponseModel } from '../models/GetTestResultsResponseModel';
import type { GetUserResponseModel } from '../models/GetUserResponseModel';
import type { GrantPermissionRequestModel } from '../models/GrantPermissionRequestModel';
import type { ListContestsResponseModel } from '../models/ListContestsResponseModel';
import type { ListProblemsResponseModel } from '../models/ListProblemsResponseModel';
import type { ListSolutionsResponseModel } from '../models/ListSolutionsResponseModel';
import type { ListUsersResponseModel } from '../models/ListUsersResponseModel';
import type { RevokePermissionRequestModel } from '../models/RevokePermissionRequestModel';
import type { UpdateContestRequestModel } from '../models/UpdateContestRequestModel';
import type { UpdateProblemRequestModel } from '../models/UpdateProblemRequestModel';
import type { UploadProblemRequestModel } from '../models/UploadProblemRequestModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ListProblemsResponseModel OK
     * @throws ApiError
     */
    public listProblems({
        page,
        pageSize,
        title,
        search,
        order,
        owner,
    }: {
        page: number,
        pageSize: number,
        title?: string,
        /**
         * Search problems by title using Typesense (full-text search with typo tolerance)
         */
        search?: string,
        order?: number,
        /**
         * Filter by owner. Use 'me' to get user's private problems
         */
        owner?: string,
    }): CancelablePromise<ListProblemsResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/problems',
            query: {
                'page': page,
                'pageSize': pageSize,
                'title': title,
                'search': search,
                'order': order,
                'owner': owner,
            },
        });
    }
    /**
     * @returns CreationResponseModel OK
     * @throws ApiError
     */
    public createProblem({
        title,
    }: {
        title: string,
    }): CancelablePromise<CreationResponseModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/problems',
            query: {
                'title': title,
            },
        });
    }
    /**
     * @returns GetProblemResponseModel OK
     * @throws ApiError
     */
    public getProblem({
        id,
    }: {
        id: string,
    }): CancelablePromise<GetProblemResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/problems/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public deleteProblem({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/problems/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public updateProblem({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateProblemRequestModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/problems/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public uploadProblem({
        id,
        formData,
    }: {
        id: string,
        formData: UploadProblemRequestModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/problems/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @returns ListContestsResponseModel OK
     * @throws ApiError
     */
    public listContests({
        page,
        pageSize,
        title,
        owner,
        descending = false,
    }: {
        page: number,
        pageSize: number,
        title?: string,
        /**
         * Filter by owner. Use 'me' to get user's private contests
         */
        owner?: string,
        /**
         * Sort order by creation date. true = newest first (DESC), false = oldest first (ASC)
         */
        descending?: boolean,
    }): CancelablePromise<ListContestsResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contests',
            query: {
                'page': page,
                'pageSize': pageSize,
                'title': title,
                'owner': owner,
                'descending': descending,
            },
        });
    }
    /**
     * @returns CreationResponseModel OK
     * @throws ApiError
     */
    public createContest({
        title,
    }: {
        title: string,
    }): CancelablePromise<CreationResponseModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/contests',
            query: {
                'title': title,
            },
        });
    }
    /**
     * @returns GetContestResponseModel OK
     * @throws ApiError
     */
    public getContest({
        contestId,
    }: {
        contestId: string,
    }): CancelablePromise<GetContestResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contests/{contest_id}',
            path: {
                'contest_id': contestId,
            },
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public deleteContest({
        contestId,
    }: {
        contestId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/contests/{contest_id}',
            path: {
                'contest_id': contestId,
            },
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public updateContest({
        contestId,
        requestBody,
    }: {
        contestId: string,
        requestBody: UpdateContestRequestModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/contests/{contest_id}',
            path: {
                'contest_id': contestId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns CreationResponseModel OK
     * @throws ApiError
     */
    public createContestProblem({
        contestId,
        problemId,
    }: {
        contestId: string,
        problemId: string,
    }): CancelablePromise<CreationResponseModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/contests/{contest_id}/problems',
            path: {
                'contest_id': contestId,
            },
            query: {
                'problem_id': problemId,
            },
        });
    }
    /**
     * @returns GetContestProblemResponseModel OK
     * @throws ApiError
     */
    public getContestProblem({
        problemId,
        contestId,
    }: {
        problemId: string,
        contestId: string,
    }): CancelablePromise<GetContestProblemResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contests/{contest_id}/problems/{problem_id}',
            path: {
                'problem_id': problemId,
                'contest_id': contestId,
            },
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public deleteContestProblem({
        problemId,
        contestId,
    }: {
        problemId: string,
        contestId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/contests/{contest_id}/problems/{problem_id}',
            path: {
                'problem_id': problemId,
                'contest_id': contestId,
            },
        });
    }
    /**
     * @returns ListUsersResponseModel OK
     * @throws ApiError
     */
    public listParticipants({
        contestId,
        page,
        pageSize,
    }: {
        contestId: string,
        page: number,
        pageSize: number,
    }): CancelablePromise<ListUsersResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contests/{contest_id}/participants',
            path: {
                'contest_id': contestId,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @returns CreationResponseModel OK
     * @throws ApiError
     */
    public createParticipant({
        contestId,
        userId,
    }: {
        contestId: string,
        userId: string,
    }): CancelablePromise<CreationResponseModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/contests/{contest_id}/participants',
            path: {
                'contest_id': contestId,
            },
            query: {
                'user_id': userId,
            },
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public deleteParticipant({
        userId,
        contestId,
    }: {
        userId: string,
        contestId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/contests/{contest_id}/participants',
            path: {
                'contest_id': contestId,
            },
            query: {
                'user_id': userId,
            },
        });
    }
    /**
     * @returns CreationResponseModel OK
     * @throws ApiError
     */
    public createSolution({
        problemId,
        contestId,
        language,
        formData,
    }: {
        problemId: string,
        contestId: string,
        language: number,
        formData: CreateSolutionRequestModel,
    }): CancelablePromise<CreationResponseModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/solutions',
            query: {
                'problem_id': problemId,
                'contest_id': contestId,
                'language': language,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @returns ListSolutionsResponseModel OK
     * @throws ApiError
     */
    public listSolutions({
        page,
        pageSize,
        contestId,
        userId,
        problemId,
        state,
        order,
        language,
    }: {
        page: number,
        pageSize: number,
        contestId?: string,
        userId?: string,
        problemId?: string,
        state?: number,
        order?: number,
        language?: number,
    }): CancelablePromise<ListSolutionsResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/solutions',
            query: {
                'page': page,
                'pageSize': pageSize,
                'contestId': contestId,
                'userId': userId,
                'problemId': problemId,
                'state': state,
                'order': order,
                'language': language,
            },
        });
    }
    /**
     * @returns GetSolutionResponseModel OK
     * @throws ApiError
     */
    public getSolution({
        solutionId,
    }: {
        solutionId: string,
    }): CancelablePromise<GetSolutionResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/solutions/{solution_id}',
            path: {
                'solution_id': solutionId,
            },
        });
    }
    /**
     * @returns GetTestResultsResponseModel OK
     * @throws ApiError
     */
    public getTestResults({
        solutionId,
    }: {
        solutionId: string,
    }): CancelablePromise<GetTestResultsResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/solutions/{solution_id}/test-results',
            path: {
                'solution_id': solutionId,
            },
        });
    }
    /**
     * @returns GetMonitorResponseModel OK
     * @throws ApiError
     */
    public getMonitor({
        contestId,
    }: {
        contestId: string,
    }): CancelablePromise<GetMonitorResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contests/{contest_id}/monitor',
            path: {
                'contest_id': contestId,
            },
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public getHealth(): CancelablePromise<{
        status?: string;
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/health',
        });
    }
    /**
     * @returns GetUserResponseModel OK
     * @throws ApiError
     */
    public getMe(): CancelablePromise<GetUserResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/me',
        });
    }
    /**
     * @returns ListUsersResponseModel OK
     * @throws ApiError
     */
    public getUsers({
        page,
        pageSize,
        search,
        role,
    }: {
        page: number,
        pageSize: number,
        search?: string,
        role?: string,
    }): CancelablePromise<ListUsersResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users',
            query: {
                'page': page,
                'pageSize': pageSize,
                'search': search,
                'role': role,
            },
        });
    }
    /**
     * @returns GetUserResponseModel OK
     * @throws ApiError
     */
    public getUser({
        id,
    }: {
        id: string,
    }): CancelablePromise<GetUserResponseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns CheckPermissionResponseModel OK
     * @throws ApiError
     */
    public checkPermission({
        requestBody,
    }: {
        requestBody: CheckPermissionRequestModel,
    }): CancelablePromise<CheckPermissionResponseModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/permissions/check',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public grantPermission({
        requestBody,
    }: {
        requestBody: GrantPermissionRequestModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/permissions/grant',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public revokePermission({
        requestBody,
    }: {
        requestBody: RevokePermissionRequestModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/permissions/revoke',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
