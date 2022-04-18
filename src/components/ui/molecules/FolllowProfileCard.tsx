import {NameLabel} from "../atoms/NameLabel";
import {Avatar} from "../atoms/Avatar";
import {Icon} from "../atoms/Icon";
import {Button} from "../atoms/Button";

import logo from "../../../assets/twitter.svg";

interface PropsFollowProfileCard {
    avatar: string;
    fullName: string;
    jobTitle: string;
}

export const FollowProfileCard = (props: PropsFollowProfileCard) => {
    const {avatar, fullName, jobTitle} = props;

    return (
        <div className="followProfileCard__container">
            <Avatar
                src={avatar}
                alt={"Profile picture"}
                size={"14.6rem"}
                styleClass={"followProfileCard__avatar"}
            />
            <div className="followProfileCard_info-c">
                <NameLabel
                    text={fullName}
                    fontSize={"2.4rem"}
                    fontWeight={"700"}
                />
                <NameLabel
                    text={jobTitle}
                    fontSize={"1.6rem"}
                    fontWeight={"300"}
                />
                <div className="followProfileCard_Icons-c">
                    <Icon
                        icon={logo}
                        size={"5rem"}
                        color={"hsla(244, 72%, 45%, 0.20)"}
                    />
                    <Icon
                        icon={logo}
                        size={"5rem"}
                        color={"hsla(244, 72%, 45%, 0.20)"}
                    />
                </div>
            </div>
            <Button
                text={"Follow"}
                styleClass={"btn-primary"}
                height={"4.5rem"}
                width={"29.6rem"}
            />
        </div>
    );
};
