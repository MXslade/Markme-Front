import {
  AppstoreOutlined,
  CalendarOutlined,
  HomeOutlined,
  LogoutOutlined,
  ReadOutlined,
  RedditOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MenuOption from "../interfaces/MenuOption";

export const managerMenuOptions: MenuOption[] = [
  {
    name: "Мой Профиль",
    link: "/profile",
    icon: UserOutlined,
  },
  {
    name: "Новости",
    link: "/news",
    icon: ReadOutlined,
  },
  {
    name: "Компания",
    link: "/company",
    icon: HomeOutlined,
  },
  {
    name: "Сотрудники",
    link: "/employees",
    icon: TeamOutlined,
  },
  {
    name: "Ученики",
    link: "/students",
    icon: RedditOutlined,
  },
  {
    name: "Курсы",
    link: "/courses",
    icon: AppstoreOutlined,
  },
  {
    name: "Расписание",
    link: "/schedule",
    icon: CalendarOutlined,
  },
  {
    name: "Выйти",
    link: "/logout",
    icon: LogoutOutlined,
  },
];

export const teacherMenuOptions: MenuOption[] = [
  {
    name: "Мой Профиль",
    link: "/profile",
    icon: UserOutlined,
  },
  {
    name: "Новости",
    link: "/news",
    icon: ReadOutlined,
  },
  {
    name: "Компания",
    link: "/company",
    icon: HomeOutlined,
  },
  {
    name: "Мои Ученики",
    link: "/students",
    icon: RedditOutlined,
  },
  {
    name: "Мои Курсы",
    link: "/courses",
    icon: AppstoreOutlined,
  },
  {
    name: "Мое Расписание",
    link: "/schedule",
    icon: CalendarOutlined,
  },
  {
    name: "Выйти",
    link: "/logout",
    icon: LogoutOutlined,
  },
];

export const studentMenuOptions: MenuOption[] = [
  {
    name: "Мой Профиль",
    link: "/profile",
    icon: UserOutlined,
  },
  {
    name: "Новости",
    link: "/news",
    icon: ReadOutlined,
  },
  {
    name: "Компания",
    link: "/company",
    icon: HomeOutlined,
  },
  {
    name: "Мои Учетиля",
    link: "/students",
    icon: RedditOutlined,
  },
  {
    name: "Мои Курсы",
    link: "/courses",
    icon: AppstoreOutlined,
  },
  {
    name: "Мое Расписание",
    link: "/schedule",
    icon: CalendarOutlined,
  },
  {
    name: "Выйти",
    link: "/logout",
    icon: LogoutOutlined,
  },
];
