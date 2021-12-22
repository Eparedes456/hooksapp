import React from 'react'
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {

    const user = {
        id:72749446,
        nombre : 'Erick Paredes'
    }

    return (
        <div>
            <UserContext.Provider value={user}>
                <AppRouter  />
            </UserContext.Provider>
            
            
        </div>
    )
}
