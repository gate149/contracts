/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pagination } from './Pagination';
import type { SolutionsListItem } from './SolutionsListItem';
export type ListSolutionsResponse = {
    'access-token'?: string;
    solutions: Array<SolutionsListItem>;
    pagination: Pagination;
};

