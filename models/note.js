//Defining and exporting  the Note class for reusiblity
export class Note {
    constructor(id, title, content, tags = []) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.tags = tags;
    }
}

