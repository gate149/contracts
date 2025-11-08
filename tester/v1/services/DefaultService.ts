/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSolutionRequest } from '../models/CreateSolutionRequest';
import type { CreationResponse } from '../models/CreationResponse';
import type { GetContestProblemResponse } from '../models/GetContestProblemResponse';
import type { GetContestResponse } from '../models/GetContestResponse';
import type { GetMonitorResponse } from '../models/GetMonitorResponse';
import type { GetProblemResponse } from '../models/GetProblemResponse';
import type { GetSolutionResponse } from '../models/GetSolutionResponse';
import type { GetUserResponse } from '../models/GetUserResponse';
import type { ListContestsResponse } from '../models/ListContestsResponse';
import type { ListProblemsResponse } from '../models/ListProblemsResponse';
import type { ListSolutionsResponse } from '../models/ListSolutionsResponse';
import type { ListUsersResponse } from '../models/ListUsersResponse';
import type { UpdateContestRequest } from '../models/UpdateContestRequest';
import type { UpdateProblemRequest } from '../models/UpdateProblemRequest';
import type { UploadProblemRequest } from '../models/UploadProblemRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ListProblemsResponse OK
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
    }): CancelablePromise<ListProblemsResponse> {
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
     * @returns CreationResponse OK
     * @throws ApiError
     */
    public createProblem({
        title,
    }: {
        title: string,
    }): CancelablePromise<CreationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/problems',
            query: {
                'title': title,
            },
        });
    }
    /**
     * @returns GetProblemResponse OK
     * @throws ApiError
     */
    public getProblem({
        id,
    }: {
        id: string,
    }): CancelablePromise<GetProblemResponse> {
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
        requestBody: UpdateProblemRequest,
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
        formData: UploadProblemRequest,
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
     * @returns ListContestsResponse OK
     * @throws ApiError
     */
    public listContests({
        page,
        pageSize,
        title,
        owner,
    }: {
        page: number,
        pageSize: number,
        title?: string,
        /**
         * Filter by owner. Use 'me' to get user's private contests
         */
        owner?: string,
    }): CancelablePromise<ListContestsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contests',
            query: {
                'page': page,
                'pageSize': pageSize,
                'title': title,
                'owner': owner,
            },
        });
    }
    /**
     * @returns CreationResponse OK
     * @throws ApiError
     */
    public createContest({
        title,
    }: {
        title: string,
    }): CancelablePromise<CreationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/contests',
            query: {
                'title': title,
            },
        });
    }
    /**
     * @returns GetContestResponse OK
     * @throws ApiError
     */
    public getContest({
        contestId,
    }: {
        contestId: string,
    }): CancelablePromise<GetContestResponse> {
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
        requestBody: UpdateContestRequest,
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
     * @returns CreationResponse OK
     * @throws ApiError
     */
    public createContestProblem({
        contestId,
        problemId,
    }: {
        contestId: string,
        problemId: string,
    }): CancelablePromise<CreationResponse> {
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
     * @returns GetContestProblemResponse OK
     * @throws ApiError
     */
    public getContestProblem({
        problemId,
        contestId,
    }: {
        problemId: string,
        contestId: string,
    }): CancelablePromise<GetContestProblemResponse> {
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
     * @returns ListUsersResponse OK
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
    }): CancelablePromise<ListUsersResponse> {
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
     * @returns CreationResponse OK
     * @throws ApiError
     */
    public createParticipant({
        contestId,
        userId,
    }: {
        contestId: string,
        userId: string,
    }): CancelablePromise<CreationResponse> {
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
     * @returns CreationResponse OK
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
        formData: CreateSolutionRequest,
    }): CancelablePromise<CreationResponse> {
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
     * @returns ListSolutionsResponse OK
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
    }): CancelablePromise<ListSolutionsResponse> {
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
     * @returns GetSolutionResponse OK
     * @throws ApiError
     */
    public getSolution({
        solutionId,
    }: {
        solutionId: string,
    }): CancelablePromise<GetSolutionResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/solutions/{solution_id}',
            path: {
                'solution_id': solutionId,
            },
        });
    }
    /**
     * @returns GetMonitorResponse OK
     * @throws ApiError
     */
    public getMonitor({
        contestId,
    }: {
        contestId: string,
    }): CancelablePromise<GetMonitorResponse> {
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
     * @returns GetUserResponse OK
     * @throws ApiError
     */
    public getMe(): CancelablePromise<GetUserResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/me',
        });
    }
    /**
     * @returns ListUsersResponse OK
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
    }): CancelablePromise<ListUsersResponse> {
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
     * @returns GetUserResponse OK
     * @throws ApiError
     */
    public getUser({
        id,
    }: {
        id: string,
    }): CancelablePromise<GetUserResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
}
