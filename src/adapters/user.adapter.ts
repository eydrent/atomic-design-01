export const createUserAdapter = (user: any) => ({
    id: user.data.id,
    fullName: user.data.name,
    jobTitle: user.data.job,
    socialMedia: {
        twitter: user.data.twitterUrl,
        linkedIn: user.data.linkedInUrl,
    },
    avatar: user.data.profilePicture,
    age: user.data.age,
});