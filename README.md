## Netflix GPT

1. Created the react project using create-react-app
2. CSS library used => Tailwind CSS.
3. Routing is done via react-router-dom
4. Email Authentication and backend done via Google Firebase
5. Hosted via Google Firebase -> Url:- https://ottclone-19ec5.web.app/
6. Created a redux store with a user slice to centrally store the user data.
7. TMDB Free API used to show the movie details on the browse page
8. Redux store used to add movies to the browse page
9. GPT APIs used to develop a movie recommendation engine.
10. GPT search page has multi-language feature in Hindi and English

** Note -> The Netflix header and the background image from the Login page is removed to avoid copyright issues.

## Features present in this project

1. Login/SignUp screen
    - SignUp for a first time user [Can prefer using a dummy email id, password length should be 8-15, and should include upper and lower case with special charachters ]
    - SignIn for next login
    - Redirect to browse page (only after loggin in)
    - Routing of app
    - Form Validation (done via Regex)
    - Authentication done via Google Firebase where the project is hosted

2. Browse page (Comes only after authentication)
    - Header
    - Main Movie
        -- Trailer in the background (Autoplays and on mute)
        -- Title & Description
        -- Movie Suggestions
            -- Now Playing * N (Horizontally Scrollable)
            -- Top Rated * N (Horizontally Scrollable)
            -- Popular * N (Horizontally Scrollable)
            -- Upcomming * N (Horizontally Scrollable)

3. NetflixGPT
    - Search Bar
    - Movie Suggestions accordingly

