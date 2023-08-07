"use strict";
var TagType;
(function (TagType) {
    TagType[TagType["Paragraph"] = 0] = "Paragraph";
    TagType[TagType["Header1"] = 1] = "Header1";
    TagType[TagType["Header2"] = 2] = "Header2";
    TagType[TagType["Header3"] = 3] = "Header3";
    TagType[TagType["HorizontalRule"] = 4] = "HorizontalRule";
})(TagType || (TagType = {}));
class TagTypeToHTML {
    constructor() {
        this.tagType = new Map();
        this.tagType.set(TagType.Header1, 'h1');
        this.tagType.set(TagType.Header2, 'h2');
        this.tagType.set(TagType.Header3, 'h3');
        this.tagType.set(TagType.HorizontalRule, 'hr');
    }
}
class HtmlHandler {
    TextChangeHandler(id, output) {
        let markdown = document.getElementById(id);
        let markdownOutput = document.getElementById(output);
        if (markdown !== null) {
            markdown.onkeyup = (e) => {
                if (markdown.value) {
                    markdownOutput.innerHTML = markdown.value;
                }
                else {
                    markdownOutput.innerHTML = "<p></p>";
                }
            };
        }
    }
}
const h = new HtmlHandler();
console.log("h", h);
