import {UserMockType} from "../models/user.model";

export const userMock: Array<UserMockType> = [
    {
        id: 1,
        fullName: "John Doe",
        jobTitle: "Senior Software Engineer",
        socialMedia: {
            twitter: "https://www.linkedin.com/in/joedoe",
            linkedIn: "https://www.linkedin.com/in/johndoe",
        },
        avatar: "https://randomuser.me/api/portraits/men/62.jpg",
        age: 32,
    },
    {
        id: 2,
        fullName: "Jane Doe",
        jobTitle: "Software Engineer",
        socialMedia: {
            twitter: "https://www.linkedin.com/in/joedoe",
            linkedIn: "https://www.linkedin.com/in/janedoe",
        },
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        age: 28,
    },
    {
        id: 3,
        fullName: "Joe Doe",
        jobTitle: "Junior Software Engineer",
        socialMedia: {
            twitter: "https://www.linkedin.com/in/joedoe",
            linkedIn: "https://www.linkedin.com/in/joedoe",
        },
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        age: 21,
    },
];
