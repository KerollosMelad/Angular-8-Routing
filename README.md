# Angular-8-Routing

different ways for routing in angular 8


//==============================================================================//
dynamic imports


	static import 
	we can’t dynamically generate any parameters of import.
	The module path must be a primitive string, can’t be a function call. This won’t work:
	
		import ... from getModuleName(); // Error, only from "string" is allowed
	
	Second, we can’t import conditionally or at run-time:

	if(...) {
	  	import ...; // Error, not allowed!
	}

	{
  		import ...; // Error, we can't put import in any block
	}
   	 //==============================================================================//

The import() function
	The import(module) function can be called from anywhere. 
	It returns a promise that resolves into a module object.

	utils.mjs file:-
	
	// Default export
		export default () => {
  			console.log('Hi from the default export!');
				};

	// Named export `doStuff`
		export const doStuff = () => {
	        console.log('Doing stuff…');
				};

		===============================================================
	loading step :-

	const moduleSpecifier = './utils.mjs';
  	importedModule = import(moduleSpecifier).
			  then((module) => {
					  module.default();   //  logs 'Hi from the default export!'
      				          module.doStuff();   //  logs 'Doing stuff…'
					 });


	if in async function use await keyword 
			  	importedModule = await  import(moduleSpecifier).
					  then((module) => {
					  module.default();   //  logs 'Hi from the default export!'
      				          module.doStuff();   //  logs 'Doing stuff…'
					 });

//=======================================================================================================//



