package robothaxe.utilities.modular.core;

import robothaxe.core.IInjector;

/**
* The IModule interface is implemented by classes which are
* considered as base classes for that module. This is mandatory
* since appropriate injector and cleanup needs to be setup.
**/
interface IModule {

    /**
    * Use this setter to provide the module with an injector.
    * This setter should initiate the context of the module
    * via a ModuleContext that accepts the injector through its
    * constructor. The ModuleContext will create a child injector.
    */
    var parentInjector(null, default):IInjector;

    /**
    * Modules need a method for cleanup and removal of the module from
    * memory to make them available for garbage collection.
    */
    function dispose():Void;

}
