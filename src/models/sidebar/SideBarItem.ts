enum SideBarTypeEnum {
    Home = 'Home',
    About = 'About',
    Resume = 'Resume',
    Projects = 'Projects',
    Contact = 'Contact',
}

// 抽象基底類別
abstract class SideBarItem {
    abstract type: SideBarTypeEnum;

    getTitle(): string {
        return this.type;
    }

    abstract getPath(): string;

    abstract getIconName(): string;
}

// 個別子類別
class HomeSideBarItem extends SideBarItem {
    type = SideBarTypeEnum.Home;

    getPath(): string {
        return '/';
    }

    getIconName(): string {
        return 'fa-solid fa-house';
    }
}

class AboutSideBarItem extends SideBarItem {
    type = SideBarTypeEnum.About;

    getPath(): string {
        return '/about';
    }

    getIconName(): string {
        return 'fa-regular fa-user';
    }
}

class ResumeSideBarItem extends SideBarItem {
    type = SideBarTypeEnum.Resume;

    getPath(): string {
        return '/resume';
    }

    getIconName(): string {
        return 'fa-regular fa-file-lines';
    }
}

class ProjectsSideBarItem extends SideBarItem {
    type = SideBarTypeEnum.Projects;

    getPath(): string {
        return '/projects';
    }

    getIconName(): string {
        return 'fa-solid fa-diagram-project';
    }
}

class ContactSideBarItem extends SideBarItem {
    type = SideBarTypeEnum.Contact;

    getPath(): string {
        return '/contact';
    }

    getIconName(): string {
        return 'fa-regular fa-address-card';
    }
}

// 類別對應表：type → constructor
const sideBarClassMap: Record<SideBarTypeEnum, new () => SideBarItem> = {
    [SideBarTypeEnum.Home]: HomeSideBarItem,
    [SideBarTypeEnum.About]: AboutSideBarItem,
    [SideBarTypeEnum.Resume]: ResumeSideBarItem,
    [SideBarTypeEnum.Projects]: ProjectsSideBarItem,
    [SideBarTypeEnum.Contact]: ContactSideBarItem,
};

// Factory：使用 map 自動建立所有 sidebar 實例
class SideBarFactory {
    static getAllSideBarItems(): SideBarItem[] {
        return Object.values(SideBarTypeEnum).map(
            (type) => new sideBarClassMap[type]()
        );
    }
}

export {
    SideBarTypeEnum,
    SideBarItem,
    SideBarFactory,
    HomeSideBarItem,
    AboutSideBarItem,
    ResumeSideBarItem,
    ProjectsSideBarItem,
    ContactSideBarItem,
};
