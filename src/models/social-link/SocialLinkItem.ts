// enum 定義
enum SocialLinkTypeEnum {
    Linkedin = 'Linkedin',
    Github = 'Github',
    // Facebook = 'Facebook', // FB目前不需要
}

// 抽象基底類別
abstract class SocialLinkItem {
    abstract type: SocialLinkTypeEnum;

    getTitle(): string {
        return this.type;
    }

    abstract getLink(): string;

    abstract getIconName(): string;
}

// 個別子類別
class LinkedinLink extends SocialLinkItem {
    type = SocialLinkTypeEnum.Linkedin;

    getLink(): string {
        return 'https://www.linkedin.com/in/hsing-chen-lin/';
    }

    getIconName(): string {
        return 'fa-brands fa-linkedin';
    }
}

class GithubLink extends SocialLinkItem {
    type = SocialLinkTypeEnum.Github;

    getLink(): string {
        return 'https://github.com/tonys61311';
    }

    getIconName(): string {
        return 'fa-brands fa-github';
    }
}

// class FacebookLink extends SocialLinkItem {
//     type = SocialLinkTypeEnum.Facebook;

//     getLink(): string {
//         return 'https://www.facebook.com/profile.php?id=100000325292252&sk=about';
//     }

//     getIconName(): string {
//         return 'fa-brands fa-facebook';
//     }
// }

const socialLinkClassMap: Record<SocialLinkTypeEnum, new () => SocialLinkItem> = {
    [SocialLinkTypeEnum.Linkedin]: LinkedinLink,
    [SocialLinkTypeEnum.Github]: GithubLink,
    // [SocialLinkTypeEnum.Facebook]: FacebookLink,
};

const socialLinkConfig: SocialLinkTypeEnum[] = [
    SocialLinkTypeEnum.Linkedin,
    SocialLinkTypeEnum.Github,
];

class SocialLinkFactory {
    static getAllSocialLinks(): SocialLinkItem[] {
        return Object.values(SocialLinkTypeEnum).map(
            (type) => new socialLinkClassMap[type]()
        );
    }

    static getSideBarSocialLinks(): SocialLinkItem[] {
        return socialLinkConfig.map(type => new socialLinkClassMap[type]());
    }
}

// 匯出
export {
    SocialLinkTypeEnum,
    SocialLinkItem,
    LinkedinLink,
    GithubLink,
    // FacebookLink,
    SocialLinkFactory,
};
