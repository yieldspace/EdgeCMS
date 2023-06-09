export abstract class Element<Config extends object = {}> {
    abstract name: string
    abstract description?: string

    protected constructor(protected config: Config) {}
}

type ShortTextElementConfig = {
    maxLen?: number
    minLen?: number
}

export class ShortTextElement extends Element<ShortTextElementConfig> {
    description: string = "A element that is for short text like title."
    name: string = "ShortTextElement"
}
