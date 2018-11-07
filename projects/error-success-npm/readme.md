# NPM ERROR SUCCESS MESSAGES FOR ANGULAR 
This is a simple to use NPM package for Angular projects. It is a service to handle all your error and success messages.

##Usage:
1. npm i error-success-npm

2. import it on the pages you want to make use of error or success messages
```typescript
import { ErrorSuccessNpmService } from 'error-success-npm/src/lib/error-success-npm.service';
```

3. Inject it as a dependency
 ```typescript
constructor(private errorSuccessMsg: ErrorSuccessNpmService){
    
}
```

4. Use the package like this:
 ```typescript
 // Option one insert message before an element: 
 // Function parameters: (message, element To InsertBefore, duration in milliseconds, type 'error' or 'success' is optional, className is optional)
 // the 'type' and 'className' parameters are optional. type can be set to change the defualt styling from red to green, className is to add your own class to the error messages. 
this.errorSuccessMsg.insertMsgBefore("This is a test error", this.yourElement, 2000);


// Option two insert message after an element: 
// Function parameters: (message, element To InsertBefore, duration in milliseconds, type 'error' or 'success' is optional, className is optional)
// the 'type' and 'className' parameters are optional. type can be set to change the defualt styling from red to green, className is to add your own class to the error messages. 
this.errorSuccessMsg.insertMsgAfter("This is a test error", this.yourElement, 2000);

// Option three insert message on top of the page: 
// Function parameters: (message, duration in milliseconds, type 'error' or 'success' is optional, className is optional )
// the 'type' and 'className' parameters are optional. type can be set to change the defualt styling from red to green, className is to add your own class to the error messages. 
this.errorSuccessMsg.insertMsgTopOfPage("This is a test error", 2000);

// Option four insert pop-over with centered message: 
// Function parameters: (message, duration in milliseconds, type 'error' or 'success' is optional, className is optional )
// the 'type' and 'className' parameters are optional. type can be set to change the defualt styling from red to green, className is to add your own class to the error messages. 
this.errorSuccessMsg.centeredPopOverMsg("This is a test error", 2000);

// Option five hide HTML element and place the error on that place, then change it back: 
// Function parameters: (message, element to swap, duration in milliseconds, type 'error' or 'success' is optional, className is optional )
// the 'type' and 'className' parameters are optional. type can be set to change the defualt styling from red to green, className is to add your own class to the error messages.
this.errorSuccessMsg.swapElementWithMsg("This is a test error", this.yourElement, 2000);

```