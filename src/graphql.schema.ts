
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export interface User {
    id: number;
    name: string;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export type DateTime = any;
type Nullable<T> = T | null;
