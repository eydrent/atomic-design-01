import {FollowProfileCard} from "../molecules/FolllowProfileCard";
import {userMock} from "../../../mocks/user.mock";

export const UsersCardsSection = () => {
    return (
        <section className="UsersCardsSection-c">
            {
                userMock.map((user) => {
                    return (
                        <FollowProfileCard
                            key={user.id}
                            avatar={user.avatar}
                            fullName={user.fullName}
                            jobTitle={user.jobTitle}
                        />
                    )
                })
            }
        </section>
    );
};
