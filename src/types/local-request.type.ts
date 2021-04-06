import { Request } from "express";

export type LocalRequest = {
    local: Record<string, any>
} & Request;