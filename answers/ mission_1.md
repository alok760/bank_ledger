## MISSION 1

For Mission 1, I have created a ReactJS Application which is handling all the cases given.
For ease of access i have also hosted the react application on netlify - https://lighthearted-cannoli-6ee79b.netlify.app/
To the run applicaiton in your location machine go to 

1. `cd ./website/bank`
2. and run `npm_start`
3. (optionally) run the flask server (pip3 install flask && python3 ./website/server.py) to serve the ledger json content as an API. However if the API server is not running 

Here is some info about the project - 
- 3 methods are used (refer website/bank/src/components/Sanitize.js)
    1. Remove duplicate transactions 
    2. Sort by the transactions chronologically
    3. when the transaction datetime is the same, we rearrange the transactions in the order in which balance and amount is mathematically correct.

- CSS framework: Bootstrap 4 is used.
- Mockups for missions 2 (deposits and withdrawals) are integrated in the main page
- Description for a transactions are dynamically generated on the basis of all the transaction details. 
- App sections are divided into components and are put into `./website/bank/src/components`.

