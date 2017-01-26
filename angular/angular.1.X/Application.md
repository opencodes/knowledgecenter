
###  Configuration block
This block is executed during the provider registration and configuration phase. Only providers and constants can be injected into configuration blocks. This block is used to inject module wise configuration settings to prevent accidental instantiation of services before they have been fully configured. This block is created using config() method.

```
config(function (injectables) { 
  // provider-injector 
  // This is an example of config block. 
  // You can have as many of these as you want. 
  // You can only inject Providers (not instances) 
  // into config blocks. 
})
```
### Run block
This block is executed after the configuration block. It is used to inject instances and constants. This block is created using run() method. This method is like as main method in C or C++.
The run block is a great place to put event handlers that need to be executed at the root level for the application. For example, authentication handlers.

```
run(function (injectables) { 
  // instance-injector 
  // This is an example of a run block. 
  /// You can have as many of these as you want. 
  // You can only inject instances (not Providers) 
  // into run blocks 
});
```
