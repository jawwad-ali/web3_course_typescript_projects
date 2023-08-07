enum TagType {
    Paragraph,
    Header1,
    Header2,
    Header3,
    HorizontalRule
}

class TagTypeToHTML {
    readonly tagType = new Map<TagType, string>()
    constructor() {
        this.tagType.set(TagType.Header1, 'h1')
        this.tagType.set(TagType.Header2, 'h2')
        this.tagType.set(TagType.Header3, 'h3')
        this.tagType.set(TagType.HorizontalRule, 'hr')
    }

    OpeningTag(tagType: TagType): string {
        // let tag = this.tagType.get(tagType)
        // if (tag !== null) {
        //     return `<${tag}>`
        // }
        // return `<p>`;
        return this.GetTag(tagType, '<')
    }

    ClosingTag(tagType: TagType): string {
        return this.GetTag(tagType, '</')
        // let tag = this.tagType.get(tagType);
        // if (tag !== null) {
        //     return `</${tag}>`;
        // }
        // return `</p>`;
    }

    GetTag(tagType: TagType, openingTagPattern: string): string {
        let tag = this.tagType.get(tagType)
        if (tag !== null) {
            return `${openingTagPattern}${tag}>`;
        }
        return `${openingTagPattern}p>`;
    }

    // TagOpening(tagType: TagType): string {
    // }

    // TagClosing(tagType: TagType): string {
    // }
}

class HtmlHandler {
    TextChangeHandler(id: string, output: string): void {
        let markdown = <HTMLTextAreaElement>document.getElementById(id)

        let markdownOutput = <HTMLLabelElement>document.getElementById(output)

        if (markdown !== null) {
            markdown.onkeyup = (e) => {
                if (markdown.value) {
                    markdownOutput.innerHTML = markdown.value
                }
                else {
                    markdownOutput.innerHTML = "<p></p>";
                }
            }
        }
    }
}