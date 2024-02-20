enum SocialLinkTypeEnum {
    Linkedin = 'Linkedin',
    Github = 'Github',
    Facebook = 'Facebook',
}

class SocialLinkType {
    constructor(public type: SocialLinkTypeEnum) { }

    getTitle(): string {
        switch (this.type) {
            default:
                return this.type;
        }
    }

    getLink(): string {
        switch (this.type) {
            case SocialLinkTypeEnum.Linkedin:
                return "https://www.linkedin.com/in/hsing-chen-lin/";
            case SocialLinkTypeEnum.Github:
                return "https://github.com/tonys61311";
            case SocialLinkTypeEnum.Facebook:
                return "https://www.facebook.com/profile.php?id=100000325292252&sk=about";
            default:
                return "";
        }
    }

    getIconName(): string {
        switch (this.type) {
            case SocialLinkTypeEnum.Linkedin:
                return 'fa-brands fa-linkedin';
            case SocialLinkTypeEnum.Github:
                return 'fa-brands fa-github';
            case SocialLinkTypeEnum.Facebook:
                return 'fa-brands fa-facebook';
            default:
                return '';
        }
    }

    static getAllSocialLinkTypes(): SocialLinkType[] {
        return Object.keys(SocialLinkTypeEnum).map(key => new SocialLinkType(SocialLinkTypeEnum[key as keyof typeof SocialLinkTypeEnum]));
    }

    static getSideBarSocialLinkTypes(): SocialLinkType[] {
        return [new SocialLinkType(SocialLinkTypeEnum.Linkedin), new SocialLinkType(SocialLinkTypeEnum.Github)];
    }
}

export { SocialLinkTypeEnum, SocialLinkType };
