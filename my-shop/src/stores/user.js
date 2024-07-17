import { defineStore } from "pinia";

export const useUserStore = defineStore('user',
    {
        state: () => 
        ({
            isLoggedIn: false,
            isLoggedOut: false
        })

        // getters
    }
)