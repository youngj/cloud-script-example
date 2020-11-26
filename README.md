# Telerivet Cloud Script API Examples

https://telerivet.com/api/script

This example repository shows how to use the Cloud Script API to handle SMS messages
by importing code from your own git repository.

Using your own git repository has several advantages over writing the code directly in your browser:

* Allows using source control to track version history
* Allows using your preferred code editors
* Allows building much larger services (the browser-based editor is limited to 100 KB of code)
* Allows reusing functionality without copy-and-paste

The master branch of this repository is imported into Telerivet with the module id `ext/example`. 

To try it, add a Cloud Script Module at https://telerivet.com/dashboard/a/script_modules :

* Set the Module Namespace to `ext/example`
* Set the Git Repository Clone URL to `https://github.com/Telerivet/cloud-script-example.git`
* Set the Branch to `master`.

Then, create a Cloud Script API service that is triggered for an incoming message at 
https://telerivet.com/dashboard/services , and add one line of code:

```
require('ext/example/main');
```

Then, whenever an incoming SMS message is received, it will be handled by the code in main.js.

All modules must have the extension .js . They may execute code directly, or may export functionality
to be used in other modules. All variables and functions described on https://telerivet.com/api/script
are automatically available as global variables in all modules.

To import other modules in the same repository, you can use relative imports. For example, from main.js the code 
`require('./commands/hello');` has the same effect as `require('ext/example/commands/hello');`.

However, relative imports are always preferable because they allow you to use different branches
for development and production code. 

For example, you could import the "dev" branch of this repository into Telerivet with the module ID 
`ext/example-dev`. Then the "dev" branch can be tested by adding a Cloud Script API service like this:

```
require('ext/example-dev/main');
```

To import your own repository into the Telerivet Cloud Script API, 
go to https://telerivet.com/dashboard/a/script_modules .
