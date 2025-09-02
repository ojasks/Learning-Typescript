interface TakePhoto {
    cameramode : string
    filter: string
    burst : number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor (
    public cameramode : string,
    public filter: string,
    public burst : number
    ){}
    
}
class Youtube implements TakePhoto, Story {
    constructor (
    public cameramode : string,
    public filter: string,
    public burst : number,
    public short: string
    ){}
    createStory(): void {
        console.log("story was created")
    }
} 

//cant do less than necessary
