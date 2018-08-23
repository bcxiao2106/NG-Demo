import { Menu } from '../../shared/models/Menu';

export const MENUS: Menu[] = [
    {
        menuId: 1,
        iconName: 'account_balance',
        menuName: 'My Farm',
        items: [
            { itemId: 11, iconName: 'fiber_manual_record', itemName: 'submenu 11', route: 'menu11'},
            { itemId: 12, iconName: 'fiber_manual_record', itemName: 'submenu 12', route: 'menu12'},
            { itemId: 13, iconName: '', itemName: 'submenu 13', route: 'menu13'},
            { itemId: 14, iconName: '', itemName: 'submenu 14', route: 'menu14'},
            { itemId: 15, iconName: '', itemName: 'submenu 15', route: 'menu15'}
        ]
    },
    {
        menuId: 2,
        iconName: 'assessment',
        menuName: 'Performance',
        items: [
            { itemId: 21, iconName: '', itemName: 'submenu 21', route: 'menu21'},
            { itemId: 22, iconName: '', itemName: 'submenu 22', route: 'menu22'},
            { itemId: 23, iconName: '', itemName: 'submenu 23', route: 'menu23'},
            { itemId: 24, iconName: '', itemName: 'submenu 24', route: 'menu24'},
            { itemId: 25, iconName: '', itemName: 'submenu 25', route: 'menu25'}
        ]
    },
    {
        menuId: 3,
        iconName: 'assignment_ind',
        menuName: 'Registration',
        items: [
            { itemId: 31, iconName: '', itemName: 'submenu 31', route: 'menu31'},
            { itemId: 32, iconName: '', itemName: 'submenu 32', route: 'menu32'},
            { itemId: 33, iconName: '', itemName: 'submenu 33', route: 'menu33'},
            { itemId: 34, iconName: '', itemName: 'submenu 34', route: 'menu34'},
            { itemId: 35, iconName: '', itemName: 'submenu 35', route: 'menu35'}
        ]
    },
    {
        menuId: 4,
        iconName: 'room_service',
        menuName: 'Services',
        items: [
            { itemId: 41, iconName: '', itemName: 'submenu 41', route: 'menu41'},
            { itemId: 42, iconName: '', itemName: 'submenu 42', route: 'menu42'},
            { itemId: 43, iconName: '', itemName: 'submenu 43', route: 'menu43'},
            { itemId: 44, iconName: '', itemName: 'submenu 44', route: 'menu44'},
            { itemId: 45, iconName: '', itemName: 'submenu 45', route: 'menu45'}
        ]
    },
    {
        menuId: 5,
        iconName: 'textsms',
        menuName: 'Messages',
        items: [
            { itemId: 51, iconName: '', itemName: 'submenu 51', route: 'menu51'},
            { itemId: 52, iconName: '', itemName: 'submenu 52', route: 'menu52'},
            { itemId: 53, iconName: '', itemName: 'submenu 53', route: 'menu53'},
            { itemId: 54, iconName: '', itemName: 'submenu 54', route: 'menu54'},
            { itemId: 55, iconName: '', itemName: 'submenu 55', route: 'menu55'}
        ]
    },
    {
        menuId: 6,
        iconName: 'grade',
        menuName: 'Membership',
        items: [
            { itemId: 61, iconName: '', itemName: 'submenu 61', route: 'menu61'},
            { itemId: 62, iconName: '', itemName: 'submenu 62', route: 'menu62'},
            { itemId: 63, iconName: '', itemName: 'submenu 63', route: 'menu63'},
            { itemId: 64, iconName: '', itemName: 'submenu 64', route: 'menu64'},
            { itemId: 65, iconName: '', itemName: 'submenu 65', route: 'menu65'}
        ]
    },
    {
        menuId: 7,
        iconName: 'grade',
        menuName: 'Membership',
        items: [
        ]
    }
];
