# This is a general setup which is used by me to run multi-container apps

## Ideally Docker should already be installed
-  Create ".env" file in the same directory as .env.example
-  Copy everything from env.example
- Edit the .env file with appropriate values as needed, blank will be treated as empty value
  - ### .env variable is ignored by default
  - By default Dockerfile.dev is being used so that Dockerfile can be created based on CI/CD envieronments. So don't alter a lot of setups unless you know what you are doing.

## To edit/create new env values

- Open env.example and write up the new env var that is needed without the value at the bottom ex: ``` keynameinenv=     ```
- Edit the env vars in .env file enter the appropriate value ex: ``` keynameinenv=valuewithoutquotes ``` 
- Edit docker compose file and in the service that would need that new config varible put it in this format 
            
            
            services:
                servicename:
                    environment:
                        - KEY_NAME=${keynameinenvfile}

            
- The KEY_NAME in docker-compose will directly be available in node's process.env.KEY_NAME 

## To run in the root directory

``` sudo ./init.sh ```


### .env contains all the configurable variables