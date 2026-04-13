// builtin

// external
import dotenv from "dotenv";

// internal

import type { FlashCards, Process } from "../../globals/types.js";

export interface RelevanceRanking {
    rankByRelevance(FlashCards: Card[], query: string): Promise<Process<Card[]>>;
}

const envType: string = process.env.NODE_ENV || "production";
const envFile: string = `.env.${envType}`;

dotenv.config({ path: envFile });


export type FlashcardSet = {
  id: string;
  question: string;
  answer: string;
  mastered: boolean;
};

export type FlashcardSet = {
  id: string;
  title: string;
  cards: Flashcard[];
};

export interface Success <T> {
    success: true;
    data: T;
}

export interface failure {
    success: false;
    error: Error;
    code?: number
}

export type Process<T> = Success<T> | Failure;
export type Task = Process<void>;

export interface SuccessReply <T> {
    success: true;
    data: T;
}

export interface FailureReply {
    success: false;
    error: string;
    message: string;
}

export type BaseReply<T> = SuccessReply<T> | FailureReply;

export interface ReplyConfig<T> {
    reply: BaseReply<T>;
    code: number;
}

frontend 
npm install
npm run dev

backend
npm install dotenv