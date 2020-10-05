import { CategoryName } from "hooks/useCategories";

export interface Question {
  category: CategoryName;
  number: number;
  textContent: string;
}

const useQuestions = (): Question[] => [
  {
    textContent: "I like to organize people, tasks, and events.",
    number: 1,
    category: "Administration",
  },
  {
    textContent:
      "I would like to start churches in places where they do not presently exist.",
    number: 2,
    category: "Apostleship",
  },
  {
    textContent:
      "I enjoy working creatively with wood, cloth, paints, metal, glass, or other materials.",
    number: 3,
    category: "Craftsmanship",
  },
  {
    textContent:
      "I enjoy challenging people’s perspective of God by using various forms of art.",
    number: 4,
    category: "Creative Communication",
  },
  {
    textContent:
      "I can readily distinguish between spiritual truth and error, good and evil.",
    number: 5,
    category: "Discernment",
  },
  {
    textContent: "I tend to see the potential in people.",
    number: 6,
    category: "Encouragement",
  },
  {
    textContent:
      "I communicate the gospel to other with clarity and effectiveness.",
    number: 7,
    category: "Evangelism",
  },
  {
    textContent:
      "I find it natural and easy to trust God to answer my prayers.",
    number: 8,
    category: "Faith",
  },
  {
    textContent:
      "I give liberally and joyfully to people in financial need or to projects requiring support.",
    number: 9,
    category: "Giving",
  },
  {
    textContent:
      "I enjoy working behind the scenes to support the work of others.",
    number: 10,
    category: "Helps",
  },
  {
    textContent: "I view my home as a place to minister to people in need.",
    number: 11,
    category: "Hospitality",
  },
  {
    textContent:
      "I take prayer requests from other and consistently pray for them.",
    number: 12,
    category: "Intercession",
  },
  {
    textContent:
      "I am approached by people who want to know my perspective on a particular passage or biblical truth.",
    number: 13,
    category: "Knowledge",
  },
  {
    textContent: "I am able to motivate others to accomplish a goal.",
    number: 14,
    category: "Leadership",
  },
  {
    textContent:
      "I empathize with hurting people and desire to help in their healing process.",
    number: 15,
    category: "Mercy",
  },
  {
    textContent:
      "I can speak in a way that results in conviction and change in the lives of others.",
    number: 16,
    category: "Prophecy",
  },
  {
    textContent: "I enjoy spending time nurturing and caring for others.",
    number: 17,
    category: "Shepherding",
  },
  {
    textContent: "I am able to communicate God’s word effectively.",
    number: 18,
    category: "Teaching",
  },
  {
    textContent:
      "I am often sought out by others for advice about spiritual or personal matters.",
    number: 19,
    category: "Wisdom",
  },
  {
    textContent: "I am careful, thorough, and skilled at managing details.",
    number: 20,
    category: "Administration",
  },
  {
    textContent:
      "I am attracted to the idea of serving in another country or ethnic community.",
    number: 21,
    category: "Apostleship",
  },
  {
    textContent: "I am skilled in working with different kinds of tools",
    number: 22,
    category: "Craftsmanship",
  },
  {
    textContent:
      "I enjoy developing and using my artistic skills (art, drama, music, photography, etc.)",
    number: 23,
    category: "Creative Communication",
  },
  {
    textContent:
      "I frequently am able to judge a person’s character based upon first impressions.",
    number: 24,
    category: "Discernment",
  },
  {
    textContent:
      "I enjoy reassuring and strengthening those who are discouraged.",
    number: 25,
    category: "Encouragement",
  },
  {
    textContent:
      "I consistently look for opportunities to build relationships with non-Christians.",
    number: 26,
    category: "Evangelism",
  },
  {
    textContent:
      "I have confidence in God’s continuing provision and help, even in difficult times.",
    number: 27,
    category: "Faith",
  },
  {
    textContent:
      "I give more than a tithe so that kingdom work can be accomplished.",
    number: 28,
    category: "Giving",
  },
  {
    textContent: "I enjoy doing routine tasks that support the ministry.",
    number: 29,
    category: "Helps",
  },
  {
    textContent:
      "I enjoy meeting new people and helping them to feel welcomed.",
    number: 30,
    category: "Hospitality",
  },
  {
    textContent:
      "I enjoy praying for long periods of time and receive leadings as to what God wants me to pray for.",
    number: 31,
    category: "Intercession",
  },
  {
    textContent:
      "I receive information from the Spirit that I did not acquire through natural means.",
    number: 32,
    category: "Knowledge",
  },
  {
    textContent: "I am able to influence others to achieve a vision.",
    number: 33,
    category: "Leadership",
  },
  {
    textContent:
      "I can patiently support those going through painful experiences as they try to stabilize their lives.",
    number: 34,
    category: "Mercy",
  },
  {
    textContent: "I feel responsible to confront others with the truth.",
    number: 35,
    category: "Prophecy",
  },
  {
    textContent:
      "I have compassion for wandering believers and want to protect them.",
    number: 36,
    category: "Shepherding",
  },
  {
    textContent:
      "I can spend time in study knowing that presenting truth will make a difference in the lives of people.",
    number: 37,
    category: "Teaching",
  },
  {
    textContent:
      "I can often find simple, practical solutions in the midst of conflict or confusion.",
    number: 38,
    category: "Wisdom",
  },
  {
    textContent:
      "I can clarify goals and develop strategies or plans to accomplish them.",
    number: 39,
    category: "Administration",
  },
  {
    textContent:
      "I am willing to take an active part in starting a new church.",
    number: 40,
    category: "Apostleship",
  },
  {
    textContent: "I enjoy making things for use in ministry.",
    number: 41,
    category: "Craftsmanship",
  },
  {
    textContent:
      "I help people understand themselves, their relationships, and God better through artistic expression.",
    number: 42,
    category: "Creative Communication",
  },
  {
    textContent:
      "I can see through phoniness or deceit before it is evident to others.",
    number: 43,
    category: "Discernment",
  },
  {
    textContent:
      "I give hope to others by directing them to the promises of God.",
    number: 44,
    category: "Encouragement",
  },
  {
    textContent:
      "I am effective at adapting the gospel message so that it connects with an individual's felt need.",
    number: 45,
    category: "Evangelism",
  },
  {
    textContent: "I believe that God will help me to accomplish great things.",
    number: 46,
    category: "Faith",
  },
  {
    textContent:
      "I manage my money well in order to free more of it for giving.",
    number: 47,
    category: "Giving",
  },
  {
    textContent:
      "I willingly take on a variety of odd jobs around the church to meet the needs of others.",
    number: 48,
    category: "Helps",
  },
  {
    textContent:
      "I genuinely believe the Lord directs strangers to me who need to get connected to others.",
    number: 49,
    category: "Hospitality",
  },
  {
    textContent: "I am conscious of ministering to others as I pray.",
    number: 50,
    category: "Intercession",
  },
  {
    textContent:
      "I am committed, and schedule blocks of time for reading and studying scripture, to understand biblical truth fully and accurately.",
    number: 51,
    category: "Knowledge",
  },
  {
    textContent:
      "I can adjust my leadership style to bring out the best in others.",
    number: 52,
    category: "Leadership",
  },
  {
    textContent:
      "I enjoy helping people sometimes regarded as under-deserving or beyond help.",
    number: 53,
    category: "Mercy",
  },
  {
    textContent:
      "I boldly expose cultural trends, teachings, or events that contradict biblical principles.",
    number: 54,
    category: "Prophecy",
  },
  {
    textContent:
      "I like to provide guidance for the whole person – relationally, emotionally, spiritually, etc.",
    number: 55,
    category: "Shepherding",
  },
  {
    textContent:
      "I pay close attentions to the words, phrases, and meaning of those who teach.",
    number: 56,
    category: "Teaching",
  },
  {
    textContent:
      "I can easily select the most effective course of action from among several alternatives.",
    number: 57,
    category: "Wisdom",
  },
  {
    textContent:
      "I can identify and effectively use the resources needed to accomplish tasks.",
    number: 58,
    category: "Administration",
  },
  {
    textContent: "I can adapt well to different cultures and surroundings.",
    number: 59,
    category: "Apostleship",
  },
  {
    textContent:
      "I can visualize how something should be constructed before I build it.",
    number: 60,
    category: "Craftsmanship",
  },
  {
    textContent:
      "I like finding new and fresh ways of communicating God’s truth.",
    number: 61,
    category: "Creative Communication",
  },
  {
    textContent: "I tend to see rightness or wrongness in situations.",
    number: 62,
    category: "Discernment",
  },
  {
    textContent:
      "I reassure those who need to take courageous action in their faith, family, or life.",
    number: 63,
    category: "Encouragement",
  },
  {
    textContent: "I invite unbelievers to accept Christ as their Savior.",
    number: 64,
    category: "Evangelism",
  },
  {
    textContent:
      "I trust God in circumstances where success cannot be guaranteed by human effort alone.",
    number: 65,
    category: "Faith",
  },
  {
    textContent:
      "I am challenged to limit my lifestyle in order to give away a higher percentage of my income.",
    number: 66,
    category: "Giving",
  },
  {
    textContent: "I see spiritual significance in doing practical tasks.",
    number: 67,
    category: "Helps",
  },
  {
    textContent:
      "I like to create a place where people do not feel that they are alone.",
    number: 68,
    category: "Hospitality",
  },
  {
    textContent:
      "I pray with confidence because I know that God works in response to prayer.",
    number: 69,
    category: "Intercession",
  },
  {
    textContent: "I have insight or just know something to be true.",
    number: 70,
    category: "Knowledge",
  },
  {
    textContent:
      "I set goals and manage people and resources affectively to accomplish them.",
    number: 71,
    category: "Leadership",
  },
  {
    textContent: "I have great compassion for hurting people.",
    number: 72,
    category: "Mercy",
  },
  {
    textContent:
      "I see most actions as right or wrong, and feel the need to correct the wrong.",
    number: 73,
    category: "Prophecy",
  },
  {
    textContent:
      "I can faithfully provide long-term support and concern for others.",
    number: 74,
    category: "Shepherding",
  },
  {
    textContent:
      "I like to take a systematic approach to my study of the bible.",
    number: 75,
    category: "Teaching",
  },
  {
    textContent:
      "I can anticipate the likely consequences of an individual’s or a group’s action.",
    number: 76,
    category: "Wisdom",
  },
  {
    textContent:
      "I like to help organizations or groups become more efficient.",
    number: 77,
    category: "Administration",
  },
  {
    textContent: "I can relate to others in culturally sensitive ways.",
    number: 78,
    category: "Apostleship",
  },
  {
    textContent: "I honor God with my handcrafted gifts.",
    number: 79,
    category: "Craftsmanship",
  },
  {
    textContent:
      "I apply various artistic expressions to communicate God’s truth.",
    number: 80,
    category: "Creative Communication",
  },
  {
    textContent:
      "I receive affirmation from others concerning the reliability of my insights or perceptions.",
    number: 81,
    category: "Discernment",
  },
  {
    textContent: "I strengthen those who are wavering in their faith.",
    number: 82,
    category: "Encouragement",
  },
  {
    textContent:
      "I openly tell people that I am a Christian and want them to ask me about my faith.",
    number: 83,
    category: "Evangelism",
  },
  {
    textContent:
      "I am convinced of God’s daily presence and action in my life.",
    number: 84,
    category: "Faith",
  },
  {
    textContent:
      "I like knowing that my financial support makes a real difference in the lives and ministries of God’s people.",
    number: 85,
    category: "Giving",
  },
  {
    textContent:
      "I like to find small things that need to be done and often do them without being asked.",
    number: 86,
    category: "Helps",
  },
  {
    textContent: "I enjoy entertaining people and opening my home to others.",
    number: 87,
    category: "Hospitality",
  },
  {
    textContent: "When I hear about needy situations, I feel burdened to pray.",
    number: 88,
    category: "Intercession",
  },
  {
    textContent:
      "I have suddenly known some things about others, but did not know how I knew them.",
    number: 89,
    category: "Knowledge",
  },
  {
    textContent:
      "I influence others to perform to the best of their capability.",
    number: 90,
    category: "Leadership",
  },
  {
    textContent:
      "I can look beyond a person’s handicaps or problems to see a life that matters to God.",
    number: 91,
    category: "Mercy",
  },
  {
    textContent: "I like people who are honest and will speak the truth.",
    number: 92,
    category: "Prophecy",
  },
  {
    textContent:
      "I enjoy giving guidance and practical support to a small group of people.",
    number: 93,
    category: "Shepherding",
  },
  {
    textContent:
      "I can communicate scripture in ways that motivate others to study and want to learn more.",
    number: 94,
    category: "Teaching",
  },
  {
    textContent:
      "I give practical advice to help others through complicated situations.",
    number: 95,
    category: "Wisdom",
  },
  {
    textContent: "I enjoy learning about how organizations function.",
    number: 96,
    category: "Administration",
  },
  {
    textContent: "I enjoy pioneering new undertakings.",
    number: 97,
    category: "Apostleship",
  },
  {
    textContent: "I am good at and enjoy working with my hands.",
    number: 98,
    category: "Craftsmanship",
  },
  {
    textContent: "I am creative and imaginative.",
    number: 99,
    category: "Creative Communication",
  },
  {
    textContent:
      "I can identify preaching, teaching, or communication that is not biblically true.",
    number: 100,
    category: "Discernment",
  },
  {
    textContent: "I like motivating others to take steps for spiritual growth.",
    number: 101,
    category: "Encouragement",
  },
  {
    textContent:
      "I openly and confidently tell others what Christ has done for me.",
    number: 102,
    category: "Evangelism",
  },
  {
    textContent: "I am regularly challenging other to trust God.",
    number: 103,
    category: "Faith",
  },
  {
    textContent: "I give generously due to my commitment to stewardship.",
    number: 104,
    category: "Giving",
  },
  {
    textContent:
      "I feel comfortable being a helper, assisting others to do their job more effectively.",
    number: 105,
    category: "Helps",
  },
  {
    textContent: "I do whatever I can to make people feel that they belong.",
    number: 106,
    category: "Hospitality",
  },
  {
    textContent: "I am honored when someone asks me to pray for them.",
    number: 107,
    category: "Intercession",
  },
  {
    textContent:
      "I discover important Biblical truths when reading or studying.",
    number: 108,
    category: "Knowledge",
  },
  {
    textContent: "I am able to cast a vision that others want to be a part of.",
    number: 109,
    category: "Leadership",
  },
  {
    textContent:
      "I enjoy bringing hope and joy to people living in difficult circumstances.",
    number: 110,
    category: "Mercy",
  },
  {
    textContent:
      "I will speak God’s truth, even in places where it is unpopular or difficult.",
    number: 111,
    category: "Prophecy",
  },
  {
    textContent:
      "I can gently restore wandering believers to faith and fellowship.",
    number: 112,
    category: "Shepherding",
  },
  {
    textContent:
      "I can present information and skills to others at a level that makes it easy for them to grasp and apply to their lives.",
    number: 113,
    category: "Teaching",
  },
  {
    textContent:
      "I can apply Scriptural truth that others regard as practical and helpful.",
    number: 114,
    category: "Wisdom",
  },
  {
    textContent:
      "I can visualize a coming event, anticipate potential problems, and develop backup plans.",
    number: 115,
    category: "Administration",
  },
  {
    textContent:
      "I am able to orchestrate or oversee several church ministries.",
    number: 116,
    category: "Apostleship",
  },
  {
    textContent:
      "I am able to design and construct things that help the church.",
    number: 117,
    category: "Craftsmanship",
  },
  {
    textContent:
      "I regularly need to get alone to reflect and develop my imagination.",
    number: 118,
    category: "Creative Communication",
  },
  {
    textContent:
      "I can sense when demonic forces are at work in a person or situation.",
    number: 119,
    category: "Discernment",
  },
  {
    textContent:
      "I am able to challenge or rebuke others in order to foster spiritual growth.",
    number: 120,
    category: "Encouragement",
  },
  {
    textContent:
      "I seek opportunities to talk about spiritual matters with unbelievers.",
    number: 121,
    category: "Evangelism",
  },
  {
    textContent:
      "I can move forward in spite of opposition or lack of support when I sense God’s blessing on an undertaking.",
    number: 122,
    category: "Faith",
  },
  {
    textContent:
      "I believe I have been given an abundance of resources so that I may give more to the Lord’s work.",
    number: 123,
    category: "Giving",
  },
  {
    textContent:
      "I readily and happily use my natural skills to help wherever needed.",
    number: 124,
    category: "Helps",
  },
  {
    textContent:
      "I can make people feel at ease even in unfamiliar surroundings.",
    number: 125,
    category: "Hospitality",
  },
  {
    textContent:
      "I often see specific results in direct response to my prayers.",
    number: 126,
    category: "Intercession",
  },
  {
    textContent: "I confidently share my knowledge and insights with others.",
    number: 127,
    category: "Knowledge",
  },
  {
    textContent:
      "I figure out where we need to go and help others to get there.",
    number: 128,
    category: "Leadership",
  },
  {
    textContent: "I enjoy doing practical things for others who are in need.",
    number: 129,
    category: "Mercy",
  },
  {
    textContent:
      "I feel compelled to expose sin when I see it and challenge people to repent.",
    number: 130,
    category: "Prophecy",
  },
  {
    textContent: "I enjoy patiently but firmly nurturing others as believers.",
    number: 131,
    category: "Shepherding",
  },
  {
    textContent: "I enjoy explaining things to people so that they can grow.",
    number: 132,
    category: "Teaching",
  },
  {
    textContent:
      "I have insights into how to solve problems that others do not see.",
    number: 133,
    category: "Wisdom",
  },
];

export default useQuestions;
