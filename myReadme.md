Type Safety - build applications with type saftey (ie keep in mind the type of variables or value when using them in operations)

TS does static checking - i.e whenever you are writing the code , the parser of the language or the syntax of the language is constantly being analyzed by the IDE'S
THAT'S the only one job of TS

IN js wheneer the code is being executed in the browser or the engine then only the errors of js are thrown at us
but this is not the case with ts 
so what we need is a static checker that checks the code as it runs


so TS basically analyzez the code as we type. That's it

in ts u write more lines of code than js
the typescript is being converted to the js
ts is a superset of js

TypeScipt lang.org - website
its a development tool and is build totally upon js


we''ll be installing ts globally so we can use it anywhere
 

if u give in js syntax it will not run 
so run in terminal tsc filesname.ext
so then a file will be created in js with the same code



#tsc 

you dont have int or float in js
tyoe script is automsyicslly smsrt it can infer that u are trying to put a number in it

when ts doesnt know what kind of value is going to come up in future it puts it as any.

any basically turns off the type checking
noImpilcitAny - use this xcompiler flag to flag any implicit use of 'any'

in case of functions we really need to specify the type

never
some functions never return a value
if u want to make your errors more robust use never

**************************************************************************************************

How to setup typescript for real projects

* tsc --init ---> creates a simple typescript config file.
* npm init -y --> a package.json file is created
* create a index.html file
create two folders one src and other dist
using 
* mkdir src dist
src is where u write your code
distribution is something that gets on the production and is served to the end user.
* create a index.ts file in src
in dist folder create a index.js file


compile this file and produce it inside the index.html
look for output directory in tsconfig.json

it tells where the output of the file should go
uncomment it 

when you compile index.ts in src folder you want the index.js file to be
produced in the dist folder 

tsc -w
to run in the watch mode

npm i lite-server

change test to start script and put live server

either open with live server or lite server
btw lite server not that necessary can go with live server


so all summarized tsc -w to listen to ongoing changes 
and then run with live server
**************************************************************************************************
now we come to the tpic of how to create a class in typescript


// a set accessor can not have a return type annotation

in the world of swift there are a lot of protocols
in web dev we call them interface
these protocols they dont have definitions

whats the use of abstract classes in interfaces? -----> interview question
