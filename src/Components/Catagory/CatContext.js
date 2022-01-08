import React, { useState,createContext } from "react";


export const CatContext = createContext();
export const DataProvider = (props) => {
    const [data, setData] =useState([
        {Id:"1",
        Category:"bollywood",
        Name:"1942 a love story",
        Imdb: "7.2/10",
        Img:"https://images004-a.erosnow.com/movie/4/1000004/img945380/6416715/1000004_6416715_56.jpg",
        Directed:" Vidhu Vinod Chopra",
        Released : "15 Jul 1994",
        Types: "Action, Drama",
        Stars: "Anil Kapoor, Jackie Shroff, Manisha Koirala",
        Story:"A young Indian couple, both from wealthy backgrounds, find themselves caught up in the 1940’s Indian revolutionary movement against their families whom are under the thumb a sadistic British general."},

        {Id:"2",
        Category:"bollywood",
        Name:"Akbar-Anthony",
        Imdb: "7.5/10",
        Img:"https://www.bollywoodhungama.com/wp-content/uploads/2019/05/42-Facts-about-%E2%80%98Amar-Akbar-Anthony%E2%80%991.jpg",
        Directed:" Manmohan Desai",
        Released : "Date: 27 May 1977",
        Types: "Action,Comedy , Drama",
        Stars: "Vinod Khanna, Rishi Kapoor, Amitabh Bachchan",
        story:"A ex-convict must flee his mob boss, leaving his family to fend for themselves. His wife goes blind and his children are abandoned. They are adopted by a Hindu policeman, a Muslim tailor, and a Catholic priest. The Hindu-raised son becomes a policeman in his turn; his Muslim-raised brother becomes a singer; and the last son, played by Amitabh, becomes a happy-go-lucky Catholic who lives on the edge of the law. The boys meet again and their lives become entangled in an incredible plot full of unlikely coincidences and furious action sequences interspersed with songs. In the end, the grieving mother recovers her sight, the evil mob boss is punished, and the family is at last re-united."} ,
        
        {Id:"3",
        Category:"bollywood",
        Name:"baahubali2",
        Imdb: "9.4/10",
        Img:"https://images.indianexpress.com/2017/12/baahubali21.jpg",
        Directed:" S.S. Rajamouli",
        Released : "28 April 2017",
        Types: "Action ,Adventure ,Drama",
        Stars: "Prabhas, Rana Daggubati, Anushka Shetty",
        Story:"When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom"},
        
        {Id:"4",
        Category:"bollywood",
        Name:"Badrinath-Ki-Dulhania",
        Imdb: "6.2/10",
        Img:"https://www.bollywoodhungama.com/wp-content/uploads/2017/01/Badrinath-Ki-Dulhania-2-3.jpg",
        Directed:" Shashank Khaitan",
        Released : "10 March 2017",
        Types: "Comedy ,Drama ,Romance",
        Stars: "Varun Dhawan, Alia Bhatt, Sahil Vaid",
        Story:" Badrinath Bansal from Jhansi and Vaidehi Trivedi from Kota belong to small towns but have diametrically opposite opinions on everything. This leads to a clash of ideologies, despite both of them recognizing the goodness in each other."},
        
        {Id:"5",
        Category:"bollywood",
        Name:"Bareilly ki barfi",
        Imdb: "7.2",
        Img:"https://i.ytimg.com/vi/Ds2JXPKZB6s/maxresdefault.jpg",
        Directed:"Ashwiny Iyer Tiwari",
        Released : "18 August 2017",
        Types: "Comedy",
        Stars: "Ayushmann Khurrana, Kriti Sanon, Rajkummar Rao",
        Story:"Set in the small-town of Bareilly, Bitti is a free-spirited young girl who lives life on her own terms and refuses to be pressured into getting married. Her life takes a shift when she meets Chirag Dubey and Pritam Vidrohi."},
        
        {Id:"6",
        Category:"bollywood",
        Name:"Bhool Bhulaiyaa",
        Imdb: "7.3/10",
        Img:"https://www.nowrunning.com/content/movie/0-2007/Bhool%20Bhulaiyaa/bg10.jpg",
        Directed:" Priyadarshan",
        Released : "12 October 2007",
        Types: "Comedy ,Horror ,Mystery",
        Stars: " Akshay Kumar, Vidya Balan, Shiney Ahuja",
        Story:"When U.S.-based Siddharth visits his Indian home town with his new wife, he insists they stay at the ancestral home, laughing off family members’ warnings of ghostly goings-on in the mansion. But events soon make him reconsider his beliefs. As unexplained and terrifying occurrences arise, Siddharth calls on his doctor friend to help solve the mystery. What will be the outcome? Will Siddharth’s friend be able to solve this riddle?"},

        {Id:"7",
        Category:"bollywood",
        Name:"brothers",
        Imdb: "6.5/10",
        Img:"https://images.indianexpress.com/2015/06/sidharth-brothers.jpg",
        Directed:"Karan Malhotra",
        Released : "15 August 2015",
        Types: "Action, Drama, Sport",
        Stars: "Akshay Kumar, Sidharth Malhotra, Jackie Shroff",
        Story:"The story of two estranged brothers comes to play in the rink. David Fernandes quits his job as a Physics teacher to become a full-time fighter. He is willing to do whatever it takes to save his ill daughter. Monty Fernandes creates a storm on the internet with just one video. Finally getting the chance to prove himself to the world, he trains vigorously. Two brothers, two fighters, and one ultimate fight."},

        
        {Id:"8",
        Category:"bollywood",
        Name:"Commando",
        Imdb: "8.4/10",
        Img:"https://static.sacnilk.com/articles/entertainment/box_office/869.jpg",
        Directed:"Deven Bhojan",
        Released : " 3 March 2017",
        Types: "Action ,Crime ,Drama",
        Stars: "Vidyut Jamwal, Adah Sharma, Esha Gupta.",
        Story:"A man uses his combat skills to eradicate black money, which has been siphoned to banks abroad."},
       
        
        {Id:"9",
        Category:"hollyWood",
        Name:"Ghostbusters ",
        Img:"https://i.ytimg.com/vi/ahZFCF--uRY/maxresdefault.jpg",
        detail:{ 
            Imdb: "7.6/10",
            Directed:"Jason Reitman",
            Released : "  18 November 2021",
            Types: "Adventure ,Comedy ,Fantasy",
            Stars: "Carrie Coon ,Paul Rudd ,Finn Wolfhard",
        },
        Story:"When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind."},
        
        {Id:"10",
        Category:"hollyWood",
        Name:"The Ravine 2021 ",
        Img:"//bdmusicboss.work/wp-content/uploads/2022/01/The-Ravine-2021-English-720p-AMZN-WEB-DL-H264-AAC-800MB-ESub.jpg",
        detail:{
            Imdb: "5.3/10",
            Directed:" Keoni Waxman",
            Released : "  2021",
            Types: "Drama",
            Stars: "Teri Polo, Eric Dane, Peter Facinell"
        },
        Story:"On a weekday morning in a peaceful suburb of Akron, Ohio, the town awakens to discover that Rachel Turner and her son, Evan, have been brutally murdered during the night. A short while later, Danny Turner is found in his car at the bottom…"},

        {Id:"11",
        Category:"hollyWood",
        Name:"DeadLock ",
        Img:"https://i.ytimg.com/vi/UMO2Lo73KYI/maxresdefault.jpg",
        detail:{
            Imdb: "7.0/10",
            Directed:"Jane Campion",
            Released : " 17 Nov 2021",
            Types: "Drama, Romance",
            Stars: "Benedict Cumberbatch, Geneviève Lemon, Jesse Plemons",
        },
        Story:"Charismatic rancher Phil Burbank inspires fear and awe in those around him. When his brother brings home a new wife and her son, Phil torments them until he finds himself exposed to the possibility of love."},

        {Id:"12",
        Category:"hollyWood",
        Name:"The-Last-Rite ",
        Img:"https://www.ageratingjuju.com/wp-content/uploads/2021/10/The-Last-Rite-2.jpg",
        detail:{ 
            Imdb: " 4.2/10",
            Directed:"Leroy Kincaide",
            Released : "Date: 26 Nov 2021",
            Types: ": Horror",
            Stars: " Bethan Waller, Johnny Fleming, Kit Smith",
        },
        Story:"A medical student suffering from sleep paralysis finds herself plagued by a demonic entity, after moving in with her boyfriend."},
       
        {Id:"13",
        Category:"hollyWood",
        Name:"Los Angeles",
        Img:"https://imagetot.com/images/2021/11/25/6bd71df918d57382fdd53a55d6dfbcb1.jpg",
        detail:{
            Imdb: "5.9/10",
            Directed:"Mitch Temple",
            Released : "04 Nov 2021",
            Types: "Drama",
            Stars: "Rebekah Kennedy, Anthony Bonaventura, Sachie Alessio",
        },
        Story:"Los Angeles” is the story of Jojo, a young mute, who thinks she hears God calling her to save the Baby Jesus. She packs five angels in a shoe shine kit and takes a one-way trip to Tampa, Florida, where she is picked up by Cash, an escaped…"},
        
        
        {Id:"14",
        Category:"hollyWood",
        Name:"The accursed ",
        Img:"https://s2.dmcdn.net/v/TLdGn1XT4kc682CK8/x1080",
        detail: { 
            Imdb: "4.8/10",
            Directed:"Jason Reitman",
            Released : "12 November 2021",
            Types: "Drama, Horror",
            Stars:" Yancy Butler, Izabela Vidovic, George Harrison Xanthis",
        },
        Story:" Hana spends twenty years suppressing a maleficent curse that was placed upon her bloodline, only to have a family member knowingly release it forcing her to kill or to be killed."},
       
       
        {Id:"15",
        Category:"hollyWood",
        Name:"Lamb ",
        Img:"https://bgr.com/wp-content/uploads/2021/10/Lamb-A24-Screening-Room.jpg?quality=82&strip=all&w=1440&h=810&crop=1",
        detail:{ 
            Imdb: "6.4/10",
            Directed:" Valdimar Jóhannsson",
            Released : "10 December 2021",
            Types: "Drama ,Horror ,Mystery",
            Stars: "Noomi Rapace ,Hilmir Snær Guðnason ,Björn Hlynur Haraldsson",
        },
        Story:" With Spider-Man’s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."},

        {Id:"16",
        Category:"technology",
        Name:" Artificial Intelligence (AI) and Machine Learning ",
        Img:"https://image.shutterstock.com/image-vector/artificial-intelligence-humanoid-head-neural-260nw-1384554629.jpg",
        detail:{
            Imdb: " ",
            Directed:" ",
            Released : " ",
            Types: " ",
            Stars: " ",
        },
        Story:" Artificial Intelligence, or AI, has already received a lot of buzz in the past decade, but it continues to be one of the new technology trends because of its notable effects on how we live, work and play are only in the early stages. AI is already known for its superiority in image and speech recognition, navigation apps, smartphone personal assistants, ride-sharing apps and so much more."},
        
        {Id:"17",
        Category:"technology",
        Name:" Robotic Process Automation (RPA) ",
        Img:"https://www.hult.edu/blog/media/uploads/2020/03/robotic-process-automation-business-RPA.jpg",
        detail:{
            Imdb: " ",
            Directed:" ",
            Released : " ",
            Types: " ",
            Stars: " ",
        },
        Story:"Like AI and Machine Learning, Robotic Process Automation, or RPA, is another technology that is automating jobs. RPA is the use of software to automate business processes such as interpreting applications, processing transactions, dealing with data, and even replying to emails. RPA automates repetitive tasks "},
       
        {Id:"18",
        Category:"technology",
        Name:"  Cyber Security",
        Img:"https://www.bucks.ac.uk/sites/default/files/styles/1920_1080/public/2021-04/Cyber-security.jpg?h=e5aec6c8&itok=tg5gkLVf",
        detail:{
            Imdb: " ",
            Directed:" ",
            Released : " ",
            Types: " ",
            Stars: " ",
        },
        Story:" Cyber security might not seem like an emerging technology, given that it has been around for a while, but it is evolving just as other technologies are. That’s in part because threats are constantly new. The malevolent hackers who are trying to illegally access data are not going to give up any time soon, and they will continue to find ways to get through even the toughest security measures. It’s also in part because new technology is being adapted to enhance security. As long as we have hackers, cybersecurity will remain a trending technology because it will constantly evolve to defend against those hackers."},
       
        {Id:"19",
        Category:"technology",
        Name:" Python",
        Img:"https://cdn.hackernoon.com/images/q141s3xfs.jpg",
        detail:{
            Imdb: " ",
            Directed:" ",
            Released : " ",
            Types: " ",
            Stars: " ",
        },
        Story:"Python is simple and easy to learn high-level programming language which is also object-oriented like Java. The easy to use syntax makes Python the trending software programming language. Once you have learned it, then definitely you'll fall in love with Python because of the features, productivity it provides and also Python had high-level build in data structure which also combines with dynamic binding & typing makes it enchanting. Our Python Training program in will help you to learn python from basics to advanced topics in a practical manner."},
        {Id:"20",
        Category:"technology",
        Name:"Android ",
        Img:"https://www.seasiainfotech.com/blog/wp-content/uploads/2018/12/Android-Application-Development-Process-The-Perfect-Guide.png",
        detail:{
            Imdb: " ",
            Directed:" ",
            Released : " ",
            Types: " ",
            Stars: " ",
        },
        Story:"Android App Development is an every green trending field in IT. To be statistical according to the survey result from appbrain the total amount of Android app published in Playstore is exceeding 50,000 per month. You can create your own Android app using different programming languages like Java, Python and many. Our Android app development training program will help you to learn how to develop your own Android App from basics."},
        {Id:"21",
        Category:"technology",
        Name:"Ethical hacking",
        Img:"https://www.astatraining.com/wp-content/uploads/2020/03/what-is-an-ethical-hacker.jpg",
        detail:{
            Imdb: " ",
            Directed:" ",
            Released : " ",
            Types: " ",
            Stars: " ",
        },
        Story:"Ethical hacking is a process of detecting vulnerabilities in an application, system, or organization's infrastructure that an attacker can use to exploit an individual or organization."},
        {Id:"22",
        Category:"technology",
        Name:"Cloud computing technology",
        Img:"https://images.ctfassets.net/3prze68gbwl1/3sEK5r6suPvvoX2TJzTrNf/c5c91e0ad838c8dfc79d19e5cf5d42fc/Blog_CloudComputingTechnology.png",
        detail:{
            Imdb: " ",
            Directed:" ",
            Released : " ",
            Types: " ",
            Stars: " ",
        },
        Story:"Cloud computing technology gives users access to storage, files, software, and servers through their internet-connected devices: computers, smartphones, tablets, and wearables. Cloud computing providers store and process data in a location that's separate from end users."},
                  {
        Id: "23",
                Category: "fitness",
                     Name: "Chest Press Exercise",
                     Img: "https://www.gymguider.com/wp-content/uploads/2018/11/the-best-chest-exercises.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"The chest press is a classic upper-body strengthening exercise that works your pectorals (chest), deltoids (shoulders), and triceps (arms)."


    },

    {
        Id: "24",
                Category: "fitness",
                     Name: " Back Exercise",
                     Img: "https://i.pinimg.com/originals/5e/f6/8b/5ef68b3ad37c34eeb565634753dbd24f.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Exercising the back reduces stiffness by keeping the connective fibers of ligaments and tendons flexible."


    },      {
        Id: "25",
                Category: "fitness",
                     Name: "Leg Exercise",
                     Img: "https://efitnesshelp.com/wp-content/uploads/2020/09/leg-workout.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:" Maintains good body symmetry. Prevents osteoporosis and maintains good bone health.Makes joints stronger.Strengthens the core. "


    },


    {
        Id: "26",
                Category: "fitness",
                     Name: "Triceps Exercise",
                     Img: "https://manofmany.com/wp-content/uploads/2020/01/triceps-workout-logo.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Increasing triceps strength brings stability to your shoulders and arms, improves flexibility, and increases range of motion. This prevents injury and makes it easier for you to use your upper body in daily activities "


    },


    {
        Id: "27",
                Category: "fitness",
                     Name: "ABS Exercise",
                     Img: "https://weighteasyloss.com/wp-content/uploads/2021/04/ABS-Exercises-Guide.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"A strong core improves sports performance. ...  A strong core prevents lower-back pain.  A strong core can improve your posture. You'll breathe better with a strong core."


    },


    {
        Id: "28",
                Category: "fitness",
                     Name: "ForeArm Exercise",
                     Img: "https://i.ytimg.com/vi/qhunxbMFJ1M/maxresdefault.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Strengthening your forearms also increases grip strength, which is related to upper body strength."


    },

    {
        Id: "29",
                Category: "fitness",
                     Name: "Shoulder Exercise",
                     Img: "https://tricepworkoutsgym.com/wp-content/uploads/2020/12/Dumbbell-Shoulder-Workout.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Reduces pain. Increases range of motion and function. Supports healthy cartilage. Helps with weight loss. Helps maintain function."


    },

    {
        Id: "30",
                Category: "fitness",
                     Name: "Biceps Exercise",
                     Img: "https://pbs.twimg.com/media/Dn_sBL_WkAAfi7K.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"A proper biceps workout is key to building stronger arms and increasing your power to lift. The benefits of stronger biceps are not only for better aesthetics but also for better pulling power as your increased power to pull can help in a range of exercise that depend on this motion."


    },

    {
        Id: "31",
                Category: "food",
                     Name: "Tikka Masala",
                     Img: "https://sukhis.com/app/uploads/2018/10/shutterstock_620407940-1024x683.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Tikka Masala: Tikka is the Hindi term for “small chunks,” and masala means a spice blend. So when small chunks of anything, like chicken, are cooked in a sauce with a particular spice blend, it is called Chicken Tikka Masala"


    },

    {
        Id: "32",
                Category: "food",
                     Name: "Chai/Tea",
                     Img: "https://sukhis.com/app/uploads/2017/06/Indian-Chai.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Chai/Tea: The Indian name for tea is Chai. You make chai by cooking a certain ration of water to milk, then add sugar as a sweetener and black tea together. And yes, when your order a “Chai Tea Latte” at Starbucks you’re ordering a “Tea Tea Latte.”"


    },

    {
        Id: "33",
                Category: "food",
                     Name: "Barfi",
                     Img: "https://sukhis.com/app/uploads/2017/06/IndianMithai.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Barfi: Barfi is essentially a more solidified form of a milk-based pudding. In this dish, a sweet batter is thickened and then set to cool and cut into smaller pieces."


    },


    {
        Id: "34",
                Category: "food",
                     Name: "Paneer Makhani",
                     Img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Paneer makhani (also called paneer butter masala) is a slightly sweet dish of paneer, originating from the Indian subcontinent ."


    },

    {
        Id: "35",
                Category: "food",
                     Name: "Chicken Karahi",
                     Img: "https://myfoodstory.com/wp-content/uploads/2021/09/Kadai-Chicken-Karahi-Chicken-3-1067x617.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Chicken Karahi (known as gosht karahi when prepared with goat or lamb meat instead of chicken), or kadai chicken, is a dish that originates from the northern and northwestern parts of South Asia"


    },


    {
        Id: "36",
                Category: "food",
                     Name: "Rasgulla",
                     Img: "https://smedia2.intoday.in/indiatoday/images/stories/2017August/dish16_081417053047.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Rasgulla, also known as Rosogolla, Rasgola, or Rosogola is a South Asian syrupy dessert popular in the Indian subcontinent and regions with South Asian diaspora."


    },

    {
        Id: "37",
                Category: "food",
                     Name: "Biryani",
                     Img: "https://i.ytimg.com/vi/BCKMeHuRX0I/maxresdefault.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with spices, rice, and meat (usually chicken, goat, lamb, prawn, fish or beef), or eggs or vegetables such as potatoes in certain regional varieties."


    },

    {
        Id: "38",
                Category: "food",
                     Name: "Pav bhaji",
                     Img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Pav bhaji  is a fast food dish from India consisting of a thick vegetable curry (bhaji) served with a soft bread roll (pav). Its origins are in the state of Maharashtra."


    },


    {
        Id: "39",
            Category: "fitness",
                Name: "Biceps Exercise",
                Img: "https://pbs.twimg.com/media/Dn_sBL_WkAAfi7K.jpg",
                detail: {
                        Imdb: " ",
                        Directed: " ",
                        Released: " ",
                        Types: " ",
                        Stars: " ",

                        },
       Story:"A proper biceps workout is key to building stronger arms and increasing your power to lift. The benefits of stronger biceps are not only for better aesthetics but also for better pulling power as your increased power to pull can help in a range of exercise that depend on this motion."


},


    {
        Id: "40",
                Category: "food",
                     Name: "Chole Bhature",
                     Img: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/4x3/4x3-punjabi-chole-bhature-chana-bhatura.jpg",
                     detail: {
                                Imdb: " ",
                                Directed: " ",
                                Released: " ",
                                Types: " ",
                                Stars: " ",

                             },
                    Story:"Chole bhature  is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri."


    },


      
    ])
    return (
        <CatContext.Provider value={[data,setData] }> 
               {props.children}
        </CatContext.Provider>


         
      )
  }