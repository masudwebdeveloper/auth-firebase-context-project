/*
--------------------------
Basic context api setup
---------------------------
1. Context API : Share auth state with other componets (across the application)
2. create and UserContext 
3. ContextProvider with pass children
4. set the context in the index.js
5. to consume the context: export the AuthContext from UserContext
6. Now at Header or Home () or anywhere ): use useContext Hook to get the info
*/

/*
Auth Intregration
1. use getAuth by passing the app from firebase config
*/ 