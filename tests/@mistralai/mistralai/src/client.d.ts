declare module '@mistralai/mistralai' {
    export interface ModelPermission {
        id: string;
        object: 'model_permission';
        created: number;
        allow_create_engine: boolean;
        allow_sampling: boolean;
        allow_logprobs: boolean;
        allow_search_indices: boolean;
        allow_view: boolean;
        allow_fine_tuning: boolean;
        organization: string;
        group: string | null;
        is_blocking: boolean;
    }

    export interface Model {
        id: string;
        object: 'model';
        created: number;
        owned_by: string;
        root: string | null;
        parent: string | null;
        permission: ModelPermission[];
    }

    export interface ListModelsResponse {
        object: 'list';
        data: Model[];
    }

    export interface TokenUsage {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    }

    export interface ChatCompletionResponseChoice {
        index: number;
        message: {
            role: string;
            content: string;
        };
        finish_reason: string;
    }

    export interface ChatCompletionResponseChunkChoice {
        index: number;
        delta: {
            role?: string;
            content?: string;
        };
        finish_reason: string;
    }

    export interface ChatCompletionResponse {
        id: string;
        object: 'chat.completion';
        created: number;
        model: string;
        choices: ChatCompletionResponseChoice[];
        usage: TokenUsage;
    }

    export interface ChatCompletionResponseChunk {
        id: string;
        object: 'chat.completion.chunk';
        created: number;
        model: string;
        choices: ChatCompletionResponseChunkChoice[];
    }

    export interface Embedding {
        id: string;
        object: 'embedding';
        embedding: number[];
    }

    export interface EmbeddingResponse {
        id: string;
        object: 'list';
        data: Embedding[];
        model: string;
        usage: TokenUsage;
    }

    class MistralClient {
        constructor(apiKey?: string, endpoint?: string);

        private _request(
            method: string,
            path: string,
            request: unknown
        ): Promise<unknown>;

        private _makeChatCompletionRequest(
            model: string,
            messages: Array<{ role: string; content: string }>,
            temperature?: number,
            maxTokens?: number,
            topP?: number,
            randomSeed?: number,
            stream?: boolean,
            /**
             * @deprecated use safePrompt instead
             */
            safeMode?: boolean,
            safePrompt?: boolean
        ): object;

        listModels(): Promise<ListModelsResponse>;

        chat(options: {
            model: string;
            messages: Array<{ role: string; content: string }>;
            temperature?: number;
            maxTokens?: number;
            topP?: number;
            randomSeed?: number;
            /**
             * @deprecated use safePrompt instead
             */
            safeMode?: boolean;
            safePrompt?: boolean;
        }): Promise<ChatCompletionResponse>;

        chatStream(options: {
            model: string;
            messages: Array<{ role: string; content: string }>;
            temperature?: number;
            maxTokens?: number;
            topP?: number;
            randomSeed?: number;
            /**
             * @deprecated use safePrompt instead
             */
            safeMode?: boolean;
            safePrompt?: boolean;
        }): AsyncGenerator<ChatCompletionResponseChunk, void, unknown>;

        embeddings(options: {
            model: string;
            input: string | string[];
        }): Promise<EmbeddingResponse>;
    }

    export default MistralClient;
}
