//Get a dog photo from the dog.ceo api and place the photo in the DOM
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')


fetch(BREEDS_URL)
    .then(res => res.json())
    .then(data =>{
        //Turn the message into an object
        const breedsObject = data.message
        //Turn the object into an array
        const breedsArray = Object.keys(breedsObject)
        for (let i=0; i<breedsArray.length; i++){
            const option = document.createElement('option')
            option.value = breedsArray[i]
            option.innerText = breedsArray[i]
            select.appendChild(option)
        }
            
    })

    select.addEventListener('change', event =>{
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
        getDoggoImg(url)
        doggoInfo.assignMF()
        doggoInfo.assignAge()
        doggoInfo.assignLikes()
        doggoInfo.assignDislikes()
        doggoInfo.assignFF()
    })

    const img = document.querySelector('.dog-img')

    const getDoggoImg = url => {
        //going to the API url above
        fetch(url)
            //receiving JSON file
            .then(res =>res.json())
            .then(data => {
                //extracting the message from JSON and attach to img tag as new source
                img.src = data.message
            })
    }

    const doggoInfo = {
        fNames: [
          "Bella", "Luna", "Daisy", "Molly", "Sadie", "Lola", "Ruby", "Lucy", "Zoe", "Maggie",
          "Rosie", "Coco", "Ginger", "Roxy", "Nala", "Lily", "Chloe", "Mia", "Bailey", "Abby",
          "Sasha", "Lady", "Angel", "Missy", "Sophie", "Princess", "Gracie", "Emma", "Hazel", "Harper",
          "Willow", "Nova", "Mila", "Ava", "Stella", "Penelope", "Aria", "Avery", "Riley", "Quinn",
          "Piper", "Scarlett", "Violet", "Hannah", "Ella", "Aurora", "Samantha", "Layla", "Zara", "Jasmine"
        ],
        mNames: [
          "Max", "Charlie", "Cooper", "Rocky", "Duke", "Leo", "Toby", "Bentley", "Milo", "Zeus",
          "Oliver", "Buddy", "Finn", "Winston", "Apollo", "Teddy", "Jack", "Oscar", "Cody", "Ace",
          "Gus", "Diesel", "Hunter", "Rex", "Marley", "Romeo", "Jax", "Lucky", "Blue", "Simba",
          "Kobe", "Ollie", "Bruno", "Zeke", "Hank", "Chase", "Jasper", "Axel", "Joey", "Harley",
          "Ranger", "Chico", "Loki", "Koda", "Thor", "Bear", "Chance", "Kobe", "Samson", "Ziggy"
        ],
        likesList: [
          "Belly rubs", "Chasing squirrels", "Playing fetch", "Treats", "Barking at the mailman", "Rolling in the grass",
          "Car rides", "Sniffing everything", "Cuddling on the couch", "Exploring new places", "Sunbathing", "Chewing toys",
          "Digging in the sand", "Meeting new friends", "Chasing their tails", "Belly rubs", "Belly rubs", "Belly rubs", "Belly rubs", "Belly rubs",
          "Carrying their favorite toy everywhere", "Running in open fields", "Licking faces", "Catching frisbees", "Napping in the sun",
          "Finding hidden treats", "Playing with other dogs", "Catching treats in the air", "Jumping in puddles", "Snuggling under blankets",
          "Chasing butterflies", "Singing along to music", "Hiking in the mountains", "Swimming in lakes", "Trying new treats", "Chasing their own tail for fun",
          "Wrestling with their human", "Fetching sticks from water", "Running on the beach", "Chewing on bones", "Solving puzzle toys",
          "Hunting for hidden toys", "Playing tug-of-war", "Getting massages", "Pouncing on toys", "Having their ears scratched",
          "Snuggling up with a good book", "Watching squirrels from the window", "Giving paw-shakes", "Catching tennis balls in mid-air"
        ],
        dislikesList: [
          "Vacuum cleaners", "Thunderstorms", "Baths", "Loud noises", "Being left alone", "Having nails trimmed",
          "Being scolded", "Cold weather", "Strange dogs", "Vegetables", "Being ignored", "Loud fireworks",
          "Wearing costumes", "Water puddles", "Going to the vet", "Going to the groomers", "Being in a crate",
          "Being teased with treats", "Being awakened from a nap", "Getting wet in the rain", "Having their photo taken",
          "Being separated from their humans", "Chasing their tail and never catching it", "Being startled by balloons",
          "Having their toys taken away", "Walking on slippery floors", "Stepping on hot pavement", "Having their ears cleaned",
          "Being left out of family activities", "Being restricted on a leash", "Having their bed taken by someone else",
          "Having their favorite spot on the couch occupied", "Being disturbed during mealtime", "Having their water bowl empty",
          "Not getting enough playtime", "Being scolded for stealing food", "Being scolded for digging holes",
          "Seeing the vacuum cleaner come out", "Being chased by a bath towel", "Being disturbed while sunbathing",
          "Having their favorite toy out of reach", "Seeing a closed door they can't get through", "Being teased with a treat",
          "Not being allowed on the furniture", "Having their fur brushed", "Being separated from their doggy friends",
          "Being left out of car rides", "Being ignored while playing fetch", "Having their food portioned too small",
          "Not being allowed to eat human food", "Seeing other dogs on the TV screen", "Being held for too long"
        ],
        factList: [
            "I enjoy eating french fries.", "Long walks in the forest make me happy.", "I might munch on couch cushions sometimes.",
            "I love playing hide-and-seek with my humans.", "Sticking my head out of the car window to feel the breeze is exhilarating.",
            "Sometimes I chase my tail in circles just for fun.", "When I get really excited, I do the 'zoomies' and run around like crazy.",
            "I have a natural instinct to dig and might create hidden treasure troves in the yard.", "Music makes me howl like a pro.",
            "When I see myself in the mirror, I'm intrigued by my reflection.", "Watching TV with animals on screen captivates me.",
            "I have a talent for catching treats mid-air with impressive precision.", "Being rewarded with treats for good behavior is the best.",
            "Playing fetch with my favorite toys is so much fun.", "I can create special bonds with other animals, including cats and other dogs.",
            "I have a way of 'smiling' by panting with my tongue out.", "I'm always curious and love investigating new scents and objects.",
            "When my humans talk, I tilt my head to show interest and understanding.", "Sunbathing and lounging in warm spots is pure bliss.",
            "I may have specific preferences for certain types of music.", "When my humans come home, I get so excited that I do a 'happy dance'.",
            "I show affection by gently nuzzling or 'kissing' my humans.", "Playing with water and splashing around in puddles is so refreshing.",
            "I communicate with other dogs through body language and vocalizations.", "I form strong bonds with my human owners and act as a loyal companion.",
            "I love receiving belly rubs and will roll over to ask for them.", "I have a fondness for stealing socks and hiding them as treasures.",
            "Sometimes I give guilty looks, even if I didn't actually do anything wrong.", "Receiving attention and cuddles from my humans is the best feeling.",
            "I have a playful nature and do a 'play bow' to invite others to play.", "Participating in games of 'fetch' and 'tug-of-war' is so much fun.",
            "I have an excellent sense of time and anticipate daily routines and activities.", "I might have a talent for imitating my humans' behaviors.",
            "I'm naturally curious and investigate unusual sounds or objects.", "I have my own 'spot' or bed where I feel safe and relaxed.",
            "I'm protective of my family and act as a 'guardian' of the home.", "I might howl in harmony when I hear sirens or other dogs howling.",
            "I have my own distinct 'personality' and exhibit different behaviors based on my individual traits.", "I'm excellent at reading my humans' emotions and offering comfort when needed.",
            "I show empathy and try to 'console' my humans when I sense sadness or distress.", "I love receiving praise and positive reinforcement during training.",
            "I express joy and happiness through wagging my tail and doing body wiggles."
          ],
        MF: '',
        rname: '',
        age: '',
        likes: '',
        dislikes: '',
        fact: '',

        assignMF(){
            x = (Math.floor(Math.random() * 2) == 0)
            if(x){
                this.MF = "Female"
                this.assignName(this.fNames)
            }else{
                this.MF = "Male"
                this.assignName(this.mNames)
            }
            document.getElementById('MF').innerHTML = `S: ${this.MF}`
        },
        assignName(array){
            this.rname = array[Math.floor(Math.random()*array.length - 1)]
            document.getElementById("dog-name").innerHTML = `${this.rname}`
        },
        assignAge(){
            this.age = Math.floor(Math.random()* 16 + 1)
            document.getElementById('age').innerHTML = `Age: ${this.age}`
        },
        yatesShuffle(array){
            let m = array.length, t, i 
            //while there remain elements to shuffle...
            while(m){
                //pick a remaining element...
                i = Math.floor(Math.random() * m--)
                //And swap it with the current element
                t = array[m]
                array[i] = t 
            }
            return array
        },
        assignLikes(){
            this.likes = this.yatesShuffle(this.likesList).slice(0,2)
            document.getElementById('likes').innerHTML = `Likes: ${this.likes[0]}, ${this.likes[1]}`
        },
        assignDislikes(){
            this.dislikes = this.yatesShuffle(this.dislikesList).slice(0,2)
            document.getElementById('dislikes').innerHTML = `Dislikes: ${this.dislikes[0]}, ${this.dislikes[1]}`
        },
        assignFF(){
            this.fact = this.factList[Math.floor(Math.random()*this.factList.length)]
            document.getElementById('fun-fact').innerHTML = `Fun Fact: ${this.fact}`
        }
      };
      