//react does not support SEO by defualt so that we will have to depend on third party website
SEO- is search engine optimization(react-helmet se ham reaxcrt me SEO kr skte h)

//axios is and http client
xml http req->modern way (fetch way)-> more modern  axios


XMLHttpRequest (XHR) is an older method for making network requests in JavaScript. It predates the Fetch API and offers a way to send and receive data from a server without having to refresh the entire page. \

fetch api- make network requests , uses ftech()
            handle -server response with json ->(parsed json responses)  and manage errors
            built in modern browsers

axios - promise based network request library
        third party javascript library , so should install and import
        handle responses and manage errors
        but in this there is no need to convert server response into json
        because it automatically parsed json responses
        and used promises, that allows us to directly access data

        Axios provides the ability to cancel requests using the built-in CancelToken mechanism.
Fetch API does not have built-in support for request cancellation.


// for notification - we use  react toastify(to show the notifications
)

//create .env file in client  folder to secure front end and connect backend

//to run backeend and  frontend concurrently we  use concurrently node package manager
and cors too
 enable cors in server.js
