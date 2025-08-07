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