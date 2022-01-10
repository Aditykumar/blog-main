import React, { useState,createContext } from "react";


export const CatContext = createContext();
export const DataProvider = (props) => {
    const [data, setData] =useState([
        {
            Id: "1",
            Category: "bollywood",
            Name: "1942 a love Story",
            Date: "15 Jul 1994",
            Details:"Type: Action, Drama | Imdb: 7.2/10 | Directed:  Vidhu Vinod Chopra | Stars: Anil Kapoor, Jackie Shroff, Manisha Koirala ",
            Img: "https://images004-a.erosnow.com/movie/4/1000004/img945380/6416715/1000004_6416715_56.jpg",
            About: "A young Indian couple, both from wealthy backgrounds, find themselves caught up in the 1940's Indian revolutionary movement against their families whom are under the thumb a sadistic British general."
        },

        {
            Id: "2",
            Category: "bollywood",
            Name: "Akbar-Anthony",
            Date: "27 May 1977",
            Details:"Type: Action,Comedy , Drama | Imdb: 7.5/10 | Directed: Manmohan Desai | Stars:Vinod Khanna, Rishi Kapoor, Amitabh Bachchan ",
            Img: "https://www.bollywoodhungama.com/wp-content/uploads/2019/05/42-Facts-about-%E2%80%98Amar-Akbar-Anthony%E2%80%991.jpg",
            About: "A ex-convict must flee his mob boss, leaving his family to fend for themselves. His wife goes blind and his children are abandoned. They are adopted by a Hindu policeman, a Muslim tailor, and a Catholic priest. The Hindu-raised son becomes a policeman in his turn; his Muslim-raised brother becomes a singer; and the last son, played by Amitabh, becomes a happy-go-lucky Catholic who lives on the edge of the law. The boys meet again and their lives become entangled in an incredible plot full of unlikely coincidences and furious action sequences interspersed with songs. In the end, the grieving mother recovers her sight, the evil mob boss is punished, and the family is at last re-united."
        },

        {
            Id: "3",
            Category: "bollywood",
            Name: "baahubali2",
            Date: "28 April 2017",
            Details:"Type: Action ,Adventure ,Drama | Imdb: 9.4/10 | Directed: S.S. Rajamouli | Stars:Prabhas, Rana Daggubati, Anushka Shetty, Amitabh Bachchan ",
            Img: "https://images.indianexpress.com/2017/12/baahubali21.jpg",
            About: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His About is juxtaposed with past events that unfolded in the Mahishmati Kingdom"
        },

        {
            Id: "4",
            Category: "bollywood",
            Name: "Badrinath-Ki-Dulhania",
            Date: "10 March 2017",
            Details:"Type: Comedy ,Drama ,Romance | Imdb: 6.2/10 | Directed: Shashank Khaitan | Stars:Varun Dhawan, Alia Bhatt, Sahil Vaid, Amitabh Bachchan ",
            Img: "https://www.bollywoodhungama.com/wp-content/uploads/2017/01/Badrinath-Ki-Dulhania-2-3.jpg",
            About: " Badrinath Bansal from Jhansi and Vaidehi Trivedi from Kota belong to small towns but have diametrically opposite opinions on everything. This leads to a clash of ideologies, despite both of them recognizing the goodness in each other."
        },

        {
            Id: "5",
            Category: "bollywood",
            Name: "Bareilly ki barfi",
            Date: "18 August 2017",
            Details:"Type: Comedy | Imdb: 7.2/10 | Directed: Ashwiny Iyer Tiwari | Stars:Ayushmann Khurrana, Kriti Sanon, Rajkummar Rao ",
            Img: "https://i.ytimg.com/vi/Ds2JXPKZB6s/maxresdefault.jpg",
            About: "Set in the small-town of Bareilly, Bitti is a free-spirited young girl who lives life on her own terms and refuses to be pressured into getting married. Her life takes a shift when she meets Chirag Dubey and Pritam Vidrohi."
        },

        {
            Id: "6",
            Category: "bollywood",
            Name: "Bhool Bhulaiyaa",
            Date: "12 October 2007",
            Details:"Type: Comedy ,Horror ,Mystery | Imdb: 7.3/10 | Directed: Priyadarshan | Stars:Akshay Kumar, Vidya Balan, Shiney Ahuja ",
            Img: "https://www.nowrunning.com/content/movie/0-2007/Bhool%20Bhulaiyaa/bg10.jpg",
            About: "When U.S.-based Siddharth visits his Indian home town with his new wife, he insists they stay at the ancestral home, laughing off family members’ warnings of ghostly goings-on in the mansion. But events soon make him reconsider his beliefs. As unexplained and terrifying occurrences arise, Siddharth calls on his doctor friend to help solve the mystery. What will be the outcome? Will Siddharth’s friend be able to solve this riddle?"
        },

        {
            Id: "7",
            Category: "bollywood",
            Name: "brothers",
            Date: "15 August 2015",
            Details:"Type: Action, Drama, Sport | Imdb: 6.5/10 | Directed: Karan Malhotra | Stars:Akshay Kumar, Sidharth Malhotra, Jackie Shroff ",
            Img: "https://images.indianexpress.com/2015/06/sidharth-brothers.jpg",
            About: "The Story of two estranged brothers comes to play in the rink. David Fernandes quits his job as a Physics teacher to become a full-time fighter. He is willing to do whatever it takes to save his ill daughter. Monty Fernandes creates a storm on the internet with just one video. Finally getting the chance to prove himself to the world, he trains vigorously. Two brothers, two fighters, and one ultimate fight."
        },


        {
            Id: "8",
            Category: "bollywood",
            Name: "Commando",
            Date: " 3 March 2017",
            Details:"Type: Action ,Crime ,Drama | Imdb: 8.4/10 | Directed: Deven Bhojan | Stars: Vidyut Jamwal, Adah Sharma, Esha Gupta. ",
            Img: "https://static.sacnilk.com/articles/entertainment/box_office/869.jpg",
            About: "A man uses his combat skills to eradicate black money, which has been siphoned to banks abroad."
        },


        {
            Id: "9",
            Category: "hollyWood",
            Name: "Ghostbusters ",
            Date: "  18 November 2021",
            Details:"Type: Adventure ,Comedy ,Fantasy | Imdb: 7.6/10 | Directed: Jason Reitman | Stars: Carrie Coon ,Paul Rudd ,Finn Wolfhard ",
            Img: "https://i.ytimg.com/vi/ahZFCF--uRY/maxresdefault.jpg",
            About: "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind."
        },

        {
            Id: "10",
            Category: "hollyWood",
            Name: "The Ravine 2021 ",
            Date: "  18 November 2021",
            Img: "//bdmusicboss.work/wp-content/uploads/2022/01/The-Ravine-2021-English-720p-AMZN-WEB-DL-H264-AAC-800MB-ESub.jpg",
            Details: "Imdb: 5.3/10  | Directed: Keoni Waxman | Type: Drama | Stars: Teri Polo, Eric Dane, Peter Facinell",
            About: "On a weekday morning in a peaceful suburb of Akron, Ohio, the town awakens to discover that Rachel Turner and her son, Evan, have been brutally murdered during the night. A short while later, Danny Turner is found in his car at the bottom…"
        },

        {
            Id: "11",
            Category: "hollyWood",
            Name: "DeadLock ",
            Date: " 17 Nov 2021 ",
            Img: "https://i.ytimg.com/vi/UMO2Lo73KYI/maxresdefault.jpg",
            Details:" Imdb: 7.0/10 | Directed: Jane Campion | Type: Drama, Romance,| Stars: Benedict Cumberbatch, Geneviève Lemon, Jesse Plemons",
            About: "Charismatic rancher Phil Burbank inspires fear and awe in those around him. When his brother brings home a new wife and her son, Phil torments them until he finds himself exposed to the possibility of love."
        },

        {
            Id: "12",
            Category: "hollyWood",
            Name: "The-Last-Rite ",
            Date: "Date: 26 Nov 2021",
            Img: "https://www.ageratingjuju.com/wp-content/uploads/2021/10/The-Last-Rite-2.jpg",
            Details: "Imdb: 4.2/10 | Directed: Leroy Kincaide | Type:  Horror |  Stars: Bethan Waller, Johnny Fleming, Kit Smith",
            About: "A medical student suffering from sleep paralysis finds herself plagued by a demonic entity, after moving in with her boyfriend."
        },

        {
            Id: "13",
            Category: "hollyWood",
            Name: "Los Angeles",
            Date: "04 Nov 2021",
            Img: "https://imagetot.com/images/2021/11/25/6bd71df918d57382fdd53a55d6dfbcb1.jpg",
            Details: "Imdb: 5.9/10 | Directed: Mitch Temple | Type: Drama |Stars: Rebekah Kennedy, Anthony Bonaventura, Sachie Alessio",
            About: "Los Angeles” is the story of Jojo, a young mute, who thinks she hears God calling her to save the Baby Jesus. She packs five angels in a shoe shine kit and takes a one-way trip to Tampa, Florida, where she is picked up by Cash, an escaped…"
        },


        {
            Id: "14",
            Category: "hollyWood",
            Name: "The accursed ",
            Date: "12 November 2021",
            Img: "https://s2.dmcdn.net/v/TLdGn1XT4kc682CK8/x1080",
            Details: " Imdb: 4.8/10 | Directed: Jason Reitman | Type: Drama, Horror | Stars: Yancy Butler, Izabela Vidovic, George Harrison Xanthis",
            About: " Hana spends twenty years suppressing a maleficent curse that was placed upon her bloodline, only to have a family member knowingly release it forcing her to kill or to be killed."
        },


        {
            Id: "15",
            Category: "hollyWood",
            Name: "Lamb ",
            Date: "10 December 2021",
            Img: "https://bgr.com/wp-content/uploads/2021/10/Lamb-A24-Screening-Room.jpg?quality=82&strip=all&w=1440&h=810&crop=1",
            Details:" Imdb: 6.4/10 | Directed:  Valdimar Jóhannsson | Type: Drama ,Horror ,Mystery | Stars: Noomi Rapace ,Hilmir Snær Guðnason ,Björn Hlynur Haraldsson",
            About: " With Spider-Man’s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
        },

        {
            Id: "16",
            Category: "technology",
            Name: " Artificial Intelligence (AI) and Machine Learning ",
            Date: " 1956 ",
            Img: "https://image.shutterstock.com/image-vector/artificial-intelligence-humanoid-head-neural-260nw-1384554629.jpg",
            Details: "AI was first coined by John McCarthy",
            About: " Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.AI is a computer system able to perform tasks that ordinarily require human intelligence... Many of these artificial intelligence systems are powered by machine learning, some of them are powered by deep learning and some of them are powered by very boring things like rules. There are four types (i) Reactive Machines (ii) Limited Memory (iii) Theory of Mind  (iv) Self-Awareness Examples: Siri, Alexa, Self-driving cars, Email spam filters, Netflix's recommendations."
        },

        {
            Id: "17",
            Category: "technology",
            Name: " Robotic Process Automation (RPA) ",
            Date: " early 2000s ",
            Img: "https://www.hult.edu/blog/media/uploads/2020/03/robotic-process-automation-business-RPA.jpg",
            Details: "RPA is technology given by Arthur Samuel",
            About: "Robotic process automation (RPA) is a software technology that makes it easy to build, deploy, and manage software robots that emulate humans actions interacting with digital systems and software. RPA is used to automate various supply chain processes, including data entry, predictive maintenance and after-sales service support. RPA is used across industries to automate high volume, rote tasks. Telecommunications companies use RPA to configure new services and the associated billing systems for new accounts. While each RPA process depends on the needs and maturity of your organization, implementation typically includes the following phases: Phase 1 - Assess for RPA Opportunities. Phase 2 - Select a Vendor. Phase 3 - Capture Process Steps, Pilot, and Implement. Phase 4 - Manage the RPA Lifecycle. "
        },

        {
            Id: "18",
            Category: "technology",
            Name: "  Cyber Security",
            Date: " in 1972 ",
            Img: "https://www.bucks.ac.uk/sites/default/files/styles/1920_1080/public/2021-04/Cyber-security.jpg?h=e5aec6c8&itok=tg5gkLVf",
            Details: "research project on ARPANET",
            About: " Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security. The term applies in a variety of contexts, from business to mobile computing, and can be divided into a few common categories. Network security is the practice of securing a computer network from intruders, whether targeted attackers or opportunistic malware. Application security focuses on keeping software and devices free of threats. A compromised application could provide access to the data its designed to protect. Successful security begins in the design stage, well before a program or device is deployed. Information security protects the integrity and privacy of data, both in storage and in transit. Operational security includes the processes and decisions for handling and protecting data assets. The permissions users have when accessing a network and the procedures that determine how and where data may be stored or shared all fall under this umbrella. Disaster recovery and business continuity define how an organization responds to a cyber-security incident or any other event that causes the loss of operations or data. Disaster recovery policies dictate how the organization restores its operations and information to return to the same operating capacity as before the event. Business continuity is the plan the organization falls back on while trying to operate without certain resources. End-user education addresses the most unpredictable cyber-security factor: people. Anyone can accidentally introduce a virus to an otherwise secure system by failing to follow good security practices. Teaching users to delete suspicious email attachments, not plug in unidentified USB drives, and various other important lessons is vital for the security of any organization."
        },

        {
            Id: "19",
            Category: "technology",
            Name: " Python",
            Date: " February 20 1991 as Python 0.9.0 ",
            Img: "https://cdn.hackernoon.com/images/q141s3xfs.jpg",
            Details: "high-level programming language with dynamic semantics, used for general-purpose programming",
            About: "Python is a high-level object-oriented programming language that was created by Guido van Rossum. It is also called general-purpose programming language as it is used in almost every domain we can think of as mentioned below: Web Development. Software Development. Guido van Rossum When he began implementing Python, Guido van Rossum was also reading the published scripts from “Monty Python's Flying Circus”, a BBC comedy series from the 1970s. Van Rossum thought he needed a name that was short, unique, and slightly mysterious, so he decided to call the language Python. It was initially designed by Guido van Rossum in 1991 and developed by Python Software Foundation. It was mainly developed for emphasis on code readability, and its syntax allows programmers to express concepts in fewer lines of code. In the late 1980s, history was about to be written. As the backbone of many websites, HTML is considered to be the simplest programming language for those who are just getting started. HTML was also named the most intuitive language by those surveyed. ... Python was the second-easiest programming language to learn, followed by JavaScript."
        },
        {
            Id: "20",
            Category: "technology",
            Name: "Android ",
            Date: " September 23 2008 ",
            Img: "https://www.seasiainfotech.com/blog/wp-content/uploads/2018/12/Android-Application-Development-Process-The-Perfect-Guide.png",
            Details: "The first commercially available smartphone running Android was the HTC Dream, also known as T-Mobile G1, announced on September 23, 2008.",
            About: " Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets. Android is developed by a consortium of developers known as the Open Handset Alliance and commercially sponsored by Google. It was unveiled in November 2007, with the first commercial Android device, the HTC Dream, being launched in September 2008. It is free and open-source software; its source code is known as Android Open Source Project (AOSP), which is primarily licensed under the Apache License. However most Android devices ship with additional proprietary software pre-installed,[14] most notably Google Mobile Services (GMS)[15] which includes core apps such as Google Chrome, the digital distribution platform Google Play, and associated Google Play Services development platform."
        },
        {
            Id: "21",
            Category: "technology",
            Name: "Ethical hacking",
            Date: " In the 1980s and 1990s ",
            Img: "https://www.astatraining.com/wp-content/uploads/2020/03/what-is-an-ethical-hacker.jpg",
            Details: " The phrase “ethical hacking” was first used in 1995 by IBM Vice President John Patrick",
            About: "Ethical hacking is a process of detecting vulnerabilities in an application, system, or organization's infrastructure that an attacker can use to exploit an individual or organization. The industry will witness a 350% growth by 2021. In India, the number is expected to rise by 77,000 in the next five years. Technical hackers can look for top companies like Dell, Google, Wipro, Reliance, Infosys, and IBM to land the highest-paid ethical hacking jobs in India. Hacker Jonathan James from Florida hacked NASA computers in 1999 when he was 15 years old, resulting in a three week system shutdown and an estimated recovery cost of $41,000. He also invaded computers of a Defense Department agency and intercepted 3,300 emails with 19 employee passwords."
        },
        {
            Id: "22",
            Category: "technology",
            Name: "Cloud computing technology",
            Date: " August 9, 2006 ",
            Img: "https://images.ctfassets.net/3prze68gbwl1/3sEK5r6suPvvoX2TJzTrNf/c5c91e0ad838c8dfc79d19e5cf5d42fc/Blog_CloudComputingTechnology.png",
            Details: "",
            About: "Cloud computing technology gives users access to storage, files, software, and servers through their internet-connected devices: computers, smartphones, tablets, and wearables. Cloud computing providers store and process data in a location that's separate from end users. Part of the debate is who should get credit for inventing the idea. The notion of network-based computing dates to the 1960s, but many believe the first use of “cloud computing” in its modern context occurred on August 9, 2006, when then Google CEO Eric Schmidt introduced the term to an industry conference."
        },
        {
            Id: "23",
            Category: "fitness",
            Name: " Chest Press Exercise ",
            Date: " August 9, 2021 ",
            Img: "https://www.gymguider.com/wp-content/uploads/2018/11/the-best-chest-exercises.jpg",
            Details: " chest exercises for building upper body strength . ",
            About: "The chest press is a classic upper-body strengthening exercise that works your pectorals (chest), deltoids (shoulders), and triceps (arms). The chest press strength training exercise works the pectoral muscles of the chest. You can use a variety of equipment, including dumbbells, barbells, a Smith machine, suspension trainer, or even resistance bands, to perform a chest press. The chest press exercise targets the main muscle of the chest, the pectorals. It also uses the anterior deltoids of the shoulder and the triceps brachii of the upper arm. Building chest support and definition is desirable for a fit look, but building this muscle is also functional. You need strong pecs for power for sports where you swing a bat, racket, or club. The chest press also helps you with any daily activities that require pushing or carrying. It can help restore muscle balance for athletes that primarily use pulling muscles, such as in wrestling, rock climbing, and swimming."


        },

        {
            Id: "24",
            Category: "fitness",
            Date: " August 9, 2021 ",
            Name: " Back Exercise",
            Img: "https://i.pinimg.com/originals/5e/f6/8b/5ef68b3ad37c34eeb565634753dbd24f.jpg",
            Details: " Back exercises for building Back body strength ",
            About: "A big, strong back can take you far in your athletic endeavors. The back muscles help you to twist your torso, pull your arms in and down from overhead, and, most importantly, stabilize your spine. When you train these essential muscles, you’ll be more efficient at pulling and twisting motions in general. Also, a bigger and stronger back will help you deadlift and bench press more weight more efficiently. We’re going to lay out 16 of the best back exercises you could choose from, and you’ll also learn a lot more about why back training is important and just how to implement these movements into your exercise regimen. Some exercises are - (i) Deadlift (ii) Pull-Up  (iii) Bent-Over Row  (iv) Chest Supported Row  (v) Single-Arm Dumbbell Row  (vi) Inverted Row "


        }, {
            Id: "25",
            Category: "fitness",
            Date: " August 9, 2021 ",
            Name: "Leg Exercise",
            Img: "https://efitnesshelp.com/wp-content/uploads/2020/09/leg-workout.jpg",
            Details: " improve overall athletic performance ",
            About: " Maintains good body symmetry. Prevents osteoporosis and maintains good bone health.Makes joints stronger.Strengthens the core. Strong legs help you walk, jump, and balance. They also support your body and let you enjoy everyday activities. If you want to tone your legs, follow these exercises and tips. 1. Squats - The squat is one of the best exercises to tone legs. It also sculpts the butt, hips, and abs. Squats are ideal if you have back problems. Since they’re done while standing up and without extra weight, they won’t strain the back. For balance or extra support, perform your squats standing alongside a wall or next to a chair or the edge of a table with one hand on the object. Resist the urge to pull on it or push off from it. 2. Lunges - Lunges work your thighs, butt, and abs. This move uses both legs at the same time, making it a great exercise for strong legs. 3. Plank leg lifts - Regular planks target the upper body, core, and hips. You can add leg lifts to strengthen your butt and upper legs. 4. Box jumps - You can also do box jumps on a plyometric box. This explosive workout is one of the best ways to tone your legs, butt, and core. When you land on the box, drop your hips to absorb the force. Don’t lock your knees and quads. This can hurt your knees. "


        },


        {
            Id: "26",
            Category: "fitness",
            Date: " August 9, 2021 ",
            Name: "Triceps Exercise",
            Img: "https://manofmany.com/wp-content/uploads/2020/01/triceps-workout-logo.jpg",
            Details: " The triceps are essential for building upper body strength  ",
            About: "The best tricep exercises for men are a surefire way to help get you to the nearest gun show (figuratively speaking, of course). And while bulging triceps aren’t as visible as bulging biceps, don’t take that to mean they’re any less important. On the contrary, hardcore tricep workouts will build the necessary strength you need to keep pushing yourself in the gym. That’s because your triceps take up nearly 60 per cent of your upper arm mass, thereby providing a literal foundation for your continuing muscle growth, definition, and improvement. To put it another way: your overall upper arm strength is only as good as the strength of your triceps. Furthermore, no fitness freak would really argue with horseshoe triceps, a veritable sign of modern fortitude. If all this isn’t enough to pivot your focus toward this oft-overlooked muscle group, then you just keep on with bicep workouts and see how far it takes you. Go ahead. We dare you…  Don’t forget to warm-up those muscles before you start in on the harder exercises. If you’re a beginner, stick with machines before moving onto free weights. If you’re trying to build mass, start with multi-joint exercises and don’t be afraid to go to failure. Also, be sure to include both arm-overhead and lateral exercises in your tricep workout. If muscle definition is your goal, start with multi-joint exercises and then work your way toward targeted supersets. Move quickly and don’t be afraid to go to failure. The lateral head—which is located on the top of your tricep—is the largest of the three heads in your upper arm. If you’re focusing on this area, incorporate exercises during which your arms stay by your sides, such as an overhead grip."


        },


        {
            Id: "27",
            Category: "fitness",
            Date: " August 9, 2021 ",
            Name: "ABS Exercise",
            Img: "https://weighteasyloss.com/wp-content/uploads/2021/04/ABS-Exercises-Guide.jpg",
            Details: " Strong abdominal muscles can help improve posture and balance. ",
            About: "A strong core improves sports performance. ...  A strong core prevents lower-back pain.  A strong core can improve your posture. You'll breathe better with a strong core. Mountain climber - Start in a straight arm press-up position with one knee up between your elbows and only the back foot on the floor,” says Chamberlain. “Jump the back foot off the floor and swap it with the front foot. Focus on pulling your stomach muscles in throughout the movement to protect your spine and add more intensity. This is a great exercise for burning calories as well as developing your abs. Start with 30 seconds of mountain climbers and work towards 60 seconds.  Plank- An all-time core classic. Hold a straight line from your shoulders to your ankles while supporting yourself on your forearms and toes. The plank is great for beginners and there is minimal movement so less chance of getting it wrong,” says Chamberlain. It’s also easy to scale – start at 20-second holds and work up towards 60 seconds. Make sure you engage your core by tilting your pelvis back slightly to flatten your lower back – a curved lower back is to be avoided."


        },


        {
            Id: "28",
            Category: "fitness",
            Date: " August 9, 2021 ",
            Name: "ForeArm Exercise",
            Img: "https://i.ytimg.com/vi/qhunxbMFJ1M/maxresdefault.jpg",
            Details: " Strengthening your forearms also increases grip strength ",
            About: "Forearm exercises stretch and strengthen the muscles crossing your hands, wrists, and elbows. These are the muscles used in daily life for tasks such as opening a glass jar or carrying a suitcase up a flight of stairs. They’re used in sports such as golf, racquetball, and basketball, too. Strengthening your forearms also increases grip strength, which is related to upper body strength. A strong grip helps you carry, hold, and lift items in your everyday life and during athletic activity. Plus, you’ll have more power when you work out, which will bring more strength to your entire body. Begin with 5- to 10-pound dumbbells. Gradually increase the weight as you get stronger. Grip the dumbbells tightly throughout the movement. If you don’t have weights, you can use a can of soup or a bottle of water."

        },

        {
            Id: "29",
            Category: "fitness",
            Date: " August 9, 2021 ",
            Name: "Shoulder Exercise",
            Img: "https://tricepworkoutsgym.com/wp-content/uploads/2020/12/Dumbbell-Shoulder-Workout.jpg",
            Details: " promote healthy movement patterns and improve posture and muscle function ",
            About: "Reduces pain. Increases range of motion and function. Supports healthy cartilage. Helps with weight loss. Helps maintain function. Virtually every upper-body exercise involves your shoulder muscles to some extent, so strengthening your shoulders enables you to lift heavier weights for chest and back exercises. Injury prevention: If your shoulders are weak, they're going to take a beating even if you perform chest and back exercises perfectly. Stand with your feet shoulder width apart apart. Lift a barbell or dumbbells to shoulder level and perform an overhead shoulder press by raising the barbell or dumbbells over your head. Hold the weight above your head for a few seconds before gradually lowering in a controlled motion. Training your shoulders will help you improve your posture, and not only will this help you look slimmer, but it will also improve your overall core and back strength. What's more, studies have found good posture bolsters focus, mood and confidence."


        },

        {
            Id: "30",
            Category: "fitness",
            Date: " August 9, 2021 ",
            Name: "Biceps Exercise",
            Img: "https://pbs.twimg.com/media/Dn_sBL_WkAAfi7K.jpg",
            Details: " build arm strength. ",
            About: "A proper biceps workout is key to building stronger arms and increasing your power to lift. The benefits of stronger biceps are not only for better aesthetics but also for better pulling power as your increased power to pull can help in a range of exercise that depend on this motion. Upper Body Health: Biceps collaborate in forearm supination, elbows flexion, and shoulder stabilization so stronger biceps help you to maintain a healthy upper body. Aesthetics: Bicep curls help develop beautiful arms, which can translate into a great physique. Anatomy-aside, the best bicep workouts and exercises allow you to increase your muscle mass, strength, stability and aesthetic appeal. Adding these movements to your overall fitness regime can elevate your routine from a basic gym-goer's attempt to one of the best on the planet. Strong biceps play an important role in an overall strong and functional upper body. Building bicep strength helps you perform everyday tasks such as carrying and lifting. There are some unique tips to know for optimal biceps training to make the most of your workouts. Some people simply use too much weight. Best Biceps Exercises - Barbell Curl , Chin-Up, EZ-Bar Preacher Curl , Hammer Curl , Incline Dumbbell Curl , Facing-Away Cable Curl , Reverse-Grip Bent-Over Row , Cable Curl."


        },

        {
            Id: "31",
            Category: "food",
            Date: " August 9, 2021 ",
            Name: "Chicken Tikka Masala",
            Img: "https://www.kitchensanctuary.com/wp-content/uploads/2020/07/Chicken-Tikka-Skewers-square-FS-77-500x500.jpg",
            Details: " North Indian Dish",
            About: "Chicken tikka masala is composed of chicken tikka, boneless chunks of chicken marinated in spices and yogurt that are roasted in an oven, served in a creamy curry sauce.[1][2] A tomato and coriander sauce is common, but no recipe for chicken tikka masala is standard; a survey found that of 48 different recipes, the only common ingredient was chicken.[3][4] The sauce usually includes tomatoes (frequently as purée), cream, coconut cream and a masala spice mix. The sauce and chicken pieces may be coloured orange using foodstuffs such as turmeric, paprika, tomato purée or with food dye. Chicken tikka masala is similar to butter chicken, both in the method of creation and appearance."


        },

        {
            Id: "32",
            Category: "food",
            Date: " August 9, 2021 ",
            Name: "Chai/Tea",
            Img: "https://sukhis.com/app/uploads/2017/06/Indian-Chai.jpg",
            Details: " Origin - South Asia",
            About: "Chai tea is a fragrant, spicy tea that may help boost heart health, reduce blood sugar levels, aid digestion and help with weight loss. Although most of these health benefits are backed by science, it's worth noting that they are generally linked to the ingredients used in chai tea rather than chai tea itself. Sri pointed out that the phrase chai tea is redundant because chai is the Hindi word for “tea.” ... (What Americans call chai tea would be more accurately called masala chai―masala is the mix of spices used to flavor the chai.) If you wish to avoid redundancy (and ridicule from your Indian friends), just ask for chai.  If you want a healthier alternative to coffee, chai wins hands down. It's still comforting, tasty and hot, can be taken with or without sugar and can be made without milk or with low-fat creamer, if you're cutting down. Chai tea simply translates to tea. It's like referring to kabocha as kabocha squash, or shortbread as shortbread cookies. What most people consider chai tea is better known as masala chai  ",
        },

        {
            Id: "33",
            Category: "food",
            Date: " August 9, 2021 ",
            Name: "Barfi",
            Img: "https://sukhis.com/app/uploads/2017/06/IndianMithai.jpg",
            Details: "  Indian subcontinent ",
            About: "Milk Barfi or Milk Powder Burfi is a super delicious, easy to make, melt in mouth Indian sweet or fudge recipe prepared using 5 ingredients in less than 30 minutes. One of the best gluten free, no bake dessert. A perfect sweet to make on Diwali, Holi, Navratri or any special occasion! Burfi is a popular Indian milk based sweet recipe that is prepared during festivals like Diwali or Deepavali, Holi, Rakhi and any special occasions like birthdays and weddings. There are many barfi varieties – but few of my favorites include Besan burfi (barfi), Kaju barfi (kaju katli), Chocolate burfi, Pista Burfi, Almond or Badam Barfi. Traditionally this requires khoya or mawa – milk solids – and some does need sugar syrup. But I always like to take shortcuts and have prepared using milk powder and this does not require you to make any sugar syrup or check for consistency. This method using milk powder makes it quicker and easier with no compromise in taste if you follow the steps exactly as given below.  "


        },


        {
            Id: "34",
            Category: "food",
            Date: " August 9, 2021 ",
            Name: "Paneer Makhani",
            Img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg",
            Details: "Origin -  Punjab",
            About: "Paneer Makhani is a delectable, traditional Indian dish made with cubes of cheese cooked in a rich and creamy tomato based sauce. The word makhani means “buttery,” and is derived from the word makhan which means “homemade butter.” This dish is the vegetarian version of Murgh Makhani, which is commonly known outside of India as “Butter Chicken.” Butter Chicken was invented by Mr Kundan Lal Gujral in his Moti Mahal Restaurant in Delhi and has since become one of the most beloved Indian dishes across the globe. Turning the original recipe into one suitable for vegetarians by swapping in paneer, mushrooms or lentils is very common practice. This creamy, tangy homestyle gravy is made mostly with tomatoes, cream and spices. While very similar to my Paneer Butter Masala and Paneer Makhanwala, this tasty recipe has a slightly different proportion of spices. I also believe that a traditional makhani gravy should be made without onions, which is how I make mine."


        },

        {
            Id: "35",
            Category: "food",
            Date: " August 9, 2021 ",
            Name: "Chicken Karahi",
            Img: "https://myfoodstory.com/wp-content/uploads/2021/09/Kadai-Chicken-Karahi-Chicken-3-1067x617.jpg",
            Details: " originates from the northern and northwestern parts of South Asia. ",
            About: "Chicken Karahi, or Kadai chicken, is undoubtedly one of the most popular curries in and out of Pakistan and India. This is a restaurant-style Pakistani Chicken Karahi recipe that can be prepared quickly and easily with no finicky steps. Karahi is named after the pan in which it was originally cooked – a heavy, often cast-iron pan that’s similar to a wok, but rounder with a flatter base. Traditionally, meat would be simmered and stir-fried in this karahi in an open fire. I’ve read in multiple places that karahi originates in the Khyber Pakhtunkhwa (formerly Northwest Frontier) province of Pakistan, which makes sense given the cuisine’s heavy use of meat and black pepper. Chicken karahi’s distinguishing features are its rich, tomatoey base and a fragrant finishing of green chili peppers, cilantro, and slivers of ginger."


        },


        {
            Id: "36",
            Category: "food",
            Date: " August 9, 2021 ",
            Name: "Rasgulla",
            Img: "https://smedia2.intoday.in/indiatoday/images/stories/2017August/dish16_081417053047.jpg",
            Details: " Rosogola is a South Asian syrupy dessert ",
            About: "Rasgulla, also known as Rosogolla, Rasgola, or Rosogola is a South Asian syrupy dessert popular in the Indian subcontinent and regions with South Asian diaspora. It is made from ball-shaped dumplings of chhena (an Indian cottage cheese) and semolina dough, cooked in light sugar syrup made of sugar. This is done until the syrup permeates the dumplings. The earliest evidence of rasagola can be found in the epic poem Dandi Ramayana which was composed by famous Odia poet Balarama Dasa in which he mentioned that Rasagola is offered to Maa Laxmi by Lord Jagannath in a ritual called Niladri Bije. In 2017, when West Bengal got its Rosogolla's Geographical indication status, the Registry office of India clarified that West Bengal was given GI status for Banglar Rosogolla and Odisha can claim it too if they cite the place of origin of their variant along with colour, texture, taste, juice content and method of manufacturing."


        },

        {
            Id: "37",
            Category: "food",
            Date: " August 9, 2021 ",
            Name: "Biryani",
            Img: "https://i.ytimg.com/vi/BCKMeHuRX0I/maxresdefault.jpg",
            Details: "Origin place - India",
            About: "Biryani is one of the most popular dishes in South Asia, as well as among the diaspora from the region. It has gained popularity in South India, and is also prepared in other parts of the world such as Iraqi Kurdistan.[7] Biryani is the single most-ordered dish on Indian online food ordering and delivery services. There are many types of biryani, whose names are often based on their region of origin. For example, Sindhi biryani developed in the Sindh region of what is now Pakistan, and Hyderabadi biryani developed in the city of Hyderabad in South India. Some have taken the name of the shop that sells it, for example: Haji Biriyani, Haji Nanna Biriyani in Old Dhaka,[31] Fakhruddin Biriyani in Dhaka,[32][33] Students biryani in Karachi, Lucky biryani in Bandra, Mumbai and Baghdadi biryani in Colaba, Mumbai.[24] Biryanis are often specific to the Muslim communities where they originate; they are usually the defining dishes of those communities. Beef biryani, as the name implies, uses beef as the meat. In Hyderabad, it is famous as Kalyani biryani, in which buffalo or cow meat is used.[36][37] This meal was started after the Kalyani Nawabs of Bidar came to Hyderabad sometime in the 18th century. The Kalyani biryani is made with small cubes of beef, regular spices, onions and many tomatoes. It has a distinct tomato, jeera and dhania flavor.[38] In Kerala, beef biryani is well known.[39] The Bhatkali biryani is a special variant where the main ingredient is onion. Its variations include beef, goat, chicken, titar, egg, fish, crab, prawn and vegetable biryani."


        },

        {
            Id: "38",
            Category: "food",
            Date: " August 9, 2021 ",
            Name: "Pav bhaji",
            Img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg",
            Details: " Origin - south india",
            About: " Pav bhaji is a spiced mixture of mashed vegetables in a thick gravy served with bread. Vegetables in the curry may commonly include potatoes, onions, carrots, chillies, peas, bell peppers and tomatoes. Street sellers usually cook the curry on a flat griddle (tava) and serve the dish hot. A soft white bread roll is the usual accompaniment to the curry, but this does not preclude the use of other bread varieties such as chapati, roti or brown bread. About Pav Bhaji Recipe | Pav Bhaji Masala Recipe: Pav Bhaji is one of the most popular Indian snacks, specially in Maharashtra. It is a delicious combination of different vegetables cooked and mashed together. This is one dish, loved by people of all ages and cooked with different variations in different households. Pav Bhaji is the smartest way to have all the healthy vegetables together without compromising on the taste. Here is a spicy, easy and low fat Pav Bhaji recipe for you to easily cook this iconic dish at home. This famous Mumbai street food item, Pav Bhaji is an amalgamation of all sorts of healthy vegetables which you might not like when eaten individually. You may add vegetables of your choice or even skip the one's you don't like. Pav bhaji is the most delicious dish through which kids can eat as many veggies as you want them to! Potatoes, tomatoes, green peas all mashed together with spices and lemon and paired with buttery buns is a feast in itself. Pav bhaji is a dish that can be enjoyed at any hour of the day, be it for brunch, lunch or even as a dinner. It is a quintessential Indian snack recipe. The best way to feast on Pav bhaji is to serve it with roasted pav buns, some chopped onion and lemon with sliced tomatoes to go with it. Don't forget to garnish the Bhaji with loads of butter on top!"


        },


        {
            Id: "39",
            Category: "fitness",
            Date: " August 9, 2021 ",
            Name: "Biceps Exercise",
            Img: "https://pbs.twimg.com/media/Dn_sBL_WkAAfi7K.jpg",
            Details: " build arm strength. ",
            About: "A proper biceps workout is key to building stronger arms and increasing your power to lift. The benefits of stronger biceps are not only for better aesthetics but also for better pulling power as your increased power to pull can help in a range of exercise that depend on this motion. Upper Body Health: Biceps collaborate in forearm supination, elbows flexion, and shoulder stabilization so stronger biceps help you to maintain a healthy upper body. Aesthetics: Bicep curls help develop beautiful arms, which can translate into a great physique. Anatomy-aside, the best bicep workouts and exercises allow you to increase your muscle mass, strength, stability and aesthetic appeal. Adding these movements to your overall fitness regime can elevate your routine from a basic gym-goer's attempt to one of the best on the planet. Strong biceps play an important role in an overall strong and functional upper body. Building bicep strength helps you perform everyday tasks such as carrying and lifting. There are some unique tips to know for optimal biceps training to make the most of your workouts. Some people simply use too much weight. Best Biceps Exercises - Barbell Curl , Chin-Up, EZ-Bar Preacher Curl , Hammer Curl , Incline Dumbbell Curl , Facing-Away Cable Curl , Reverse-Grip Bent-Over Row , Cable Curl."


        },


        {
            Id: "40",
            Category: "food",
            Date: " August 9, 2021 ",
            Name: "Chole Bhature",
            Img: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/4x3/4x3-punjabi-chole-bhature-chana-bhatura.jpg",
            Details: " Origin - North India ",
            About: "Chole bhature  is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri. Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a fried bread made from maida. Although it is known as a typical Punjabi dish, there are varied claims around the origin of dish. Chole bhature (Hindi: छोले भटूरे) is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a fried bread made from maida. Although it is known as a typical Punjabi dish, there are varied claims around the origin of dish. One of the most popular dishes for which Punjab is known for, Chhole Bhature is an absolute delight. The Bhature are made with flour and milk rather than wheat flour, and this makes it different from a regular poori. The dish is found in every corner of Punjab. Chole Bhature also called Chana Bhatura is a dish originated initially within the northern a part of the Indian subcontinent. Now this dish is famous always in Northern India while having massive following in Punjab, India, with its very own variant."


        }


      
    ])
    return (
        <CatContext.Provider value={[data,setData] }> 
               {props.children}
        </CatContext.Provider>


         
      )
  }