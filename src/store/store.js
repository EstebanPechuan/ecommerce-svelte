import { writable } from "svelte/store";

const INITIAL_STATE = [
    {
        id: 1,
        name: 'Title 1',
        description: 'Lorem 1',
        price: 100,
        discount: 0,
        imgs: [
            'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/631411/pexels-photo-631411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/279626/pexels-photo-279626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ]
    },
    {
        id: 2,
        name: 'Title 2',
        description: 'Lorem 2',
        price: 100,
        discount: 0,
        imgs: [
            'https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/631411/pexels-photo-631411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/279626/pexels-photo-279626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ]
    },
    {
        id: 3,
        name: 'Title 3',
        description: 'Lorem 3',
        price: 100,
        discount: 0,
        imgs: [
            'https://images.pexels.com/photos/279626/pexels-photo-279626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/631411/pexels-photo-631411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ]
    },
    {
        id: 4,
        name: 'Title 4',
        description: 'Lorem 4',
        price: 100,
        discount: 0,
        imgs: [
            'https://images.pexels.com/photos/631411/pexels-photo-631411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/279626/pexels-photo-279626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ]
    },
    {
        id: 5,
        name: 'Title 5',
        description: 'Lorem 5',
        price: 100,
        discount: 0,
        imgs: [
            'https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/631411/pexels-photo-631411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/279626/pexels-photo-279626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ]
    },
]

export const products = writable(INITIAL_STATE)