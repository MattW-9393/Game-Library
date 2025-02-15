class VideoGame {
    constructor (title, briefDescription, platform, rating) {
        this._title = title
        this._briefDescription = briefDescription
        this._platform = platform
        this._rating = rating
    
    }
    get title(){
        return this._title
    }

    get briefDescription() {
        return this._briefDescription
    }
    
    get platform(){
        return this._platform
    }

    get rating(){
        return this._rating
    }
}

const finalFantasyVii = new VideoGame ("Final Fantasy VII", "Classic turn-based JRPG from Square Enix", "Playstation", 5)

console.log(finalFantasyVii)

class Playstation extends VideoGame{
    constructor(title, briefDescription, rating){
        super(title, briefDescription, "Playstation", rating)
}
}
const crashTeamRacing = new Playstation ("Crash Team Racing", "Light-hearted kart racing game featuring memorable characters for the Crash Bandicoot series", 4)

console.log(crashTeamRacing)