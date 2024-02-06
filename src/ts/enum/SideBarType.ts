enum SideBarTypeEnum {
    Home = 'Home',
    About = 'About',
    Resume = 'Resume',
    Projects = 'Projects',
    Contact = 'Contact',
}

class SideBarType {
    constructor(public type: SideBarTypeEnum) { }

    getTitle(): string {
        switch (this.type) {
            default:
                return this.type;
        }
    }

    getPath(): string {
        const base = '/';
        switch (this.type) {
            case SideBarTypeEnum.Home:
                return base;
            default:
                return base + this.type.toLowerCase();
        }
    }

    getIconName(): string {
        switch (this.type) {
            case SideBarTypeEnum.Home:
                return 'fa-solid fa-house';
            case SideBarTypeEnum.About:
                return 'fa-regular fa-user';
            case SideBarTypeEnum.Resume:
                return 'fa-regular fa-file-lines';
            case SideBarTypeEnum.Projects:
                return 'fa-solid fa-diagram-project';
            case SideBarTypeEnum.Contact:
                return 'fa-regular fa-address-card';
            default:
                return '';
        }
    }

    static getAllSideBarTypes(): SideBarType[] {
        return Object.keys(SideBarTypeEnum).map(key => new SideBarType(SideBarTypeEnum[key as keyof typeof SideBarTypeEnum]));
    }
}

export { SideBarType, SideBarTypeEnum };
